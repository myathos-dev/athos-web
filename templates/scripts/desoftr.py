#!/usr/bin/env python3
"""Convert a Softr Vibe Coding block into a plain React component (no Softr imports).

  python3 scripts/desoftr.py <softr_file.jsx> <out_file.jsx>

Rules (deterministic, nothing else is touched):
  - drops `import ... from "@/..."` lines
  - useTextSetting / useLongTextSetting / useImageSetting / useNavigationSetting /
    useArraySetting / useNumberSetting / useBooleanSetting({ ..., initialValue: X })  ->  X
  - <Button asChild ...><NavigationAction navigation={N}>..</NavigationAction></Button>  ->  <a href=..>..</a>
  - <NavigationAction navigation={N} ...>..</NavigationAction>  ->  <a href=..>..</a>
  - <Button ...>..</Button> (no asChild)  ->  <button ...>..</button>
Anything else Softr-specific (useRecords, useCurrentUser, window.softr...) is reported, not changed.
"""
import re, sys

SETTING_HOOKS = ["useTextSetting", "useLongTextSetting", "useImageSetting", "useNavigationSetting",
                 "useArraySetting", "useNumberSetting", "useBooleanSetting"]
BTN_BASE = "inline-flex items-center justify-center"


def match_close(s, i):
    """s[i] is an opening bracket; return index of its matching close, skipping strings/comments."""
    pairs = {"(": ")", "{": "}", "[": "]"}
    stack = [pairs[s[i]]]
    j = i + 1
    while j < len(s):
        c = s[j]
        if c in "\"'`":
            q = c; j += 1
            while j < len(s) and s[j] != q:
                if s[j] == "\\": j += 1
                elif q == "`" and s[j] == "$" and j + 1 < len(s) and s[j + 1] == "{":
                    j = match_close(s, j + 1)
                j += 1
        elif s.startswith("//", j):
            j = s.find("\n", j)
            if j < 0: return -1
        elif s.startswith("/*", j):
            j = s.find("*/", j) + 1
        elif c in pairs:
            stack.append(pairs[c])
        elif c in ")}]":
            if c != stack[-1]: raise ValueError(f"bracket mismatch at {j}")
            stack.pop()
            if not stack: return j
        j += 1
    return -1


def top_level_value(obj, key):
    """obj is the text inside { }. Return the source text of `key:` value at depth 0."""
    m = None
    depth = 0; j = 0
    while j < len(obj):
        c = obj[j]
        if c in "\"'`":
            q = c; j += 1
            while j < len(obj) and obj[j] != q:
                if obj[j] == "\\": j += 1
                j += 1
        elif c in "([{":
            j = match_close(obj, j)
        elif depth == 0 and re.match(r"\b" + key + r"\s*:", obj[j:]) and (j == 0 or not (obj[j-1].isalnum() or obj[j-1] == "_")):
            m = re.match(r"\b" + key + r"\s*:\s*", obj[j:])
            start = j + m.end()
            k = start
            while k < len(obj):
                ch = obj[k]
                if ch in "\"'`":
                    q = ch; k += 1
                    while k < len(obj) and obj[k] != q:
                        if obj[k] == "\\": k += 1
                        k += 1
                elif ch in "([{":
                    k = match_close(obj, k)
                elif ch == ",":
                    break
                k += 1
            return obj[start:k].strip()
        j += 1
    return None


def replace_setting_hooks(s, report):
    out = []; i = 0
    pat = re.compile(r"\b(" + "|".join(SETTING_HOOKS) + r")\s*\(")
    while True:
        m = pat.search(s, i)
        if not m: out.append(s[i:]); break
        open_paren = m.end() - 1
        close = match_close(s, open_paren)
        args = s[open_paren + 1:close].strip()
        val = None
        if args.startswith("{"):
            obj_close = match_close(args, 0)
            val = top_level_value(args[1:obj_close], "initialValue")
        else:  # positional form: useTextSetting("key", value)
            parts = args.split(",", 1)
            val = parts[1].strip() if len(parts) == 2 else None
        if val is None:
            report.append(f"no initialValue in {m.group(1)} call; left unchanged")
            out.append(s[i:close + 1]); i = close + 1; continue
        out.append(s[i:m.start()]); out.append(val); i = close + 1
    return "".join(out)


def href_parts(nav):
    """nav = JSX expression text inside navigation={...}. Return (href_expr, target_attr)."""
    nav = nav.strip()
    if nav.startswith("{"):
        dest = top_level_value(nav[1:match_close(nav, 0)], "destination")
        open_in = top_level_value(nav[1:match_close(nav, 0)], "openIn") or ""
        target = ' target="_blank" rel="noopener noreferrer"' if "NEW_TAB" in open_in else ""
        return dest, target
    return f"{nav}.destination", f' target={{{nav}.openIn === "NEW_TAB" ? "_blank" : undefined}}'


def jsx_attr_expr(tag_src, name):
    m = re.search(r"\b" + name + r"\s*=\s*\{", tag_src)
    if not m: return None, None
    o = m.end() - 1
    c = match_close(tag_src, o)
    return tag_src[o + 1:c], (m.start(), c + 1)


def open_tag_end(s, i):
    """s[i] == '<'. Return index of the '>' closing this opening tag (brace-aware)."""
    j = i + 1
    while j < len(s):
        if s[j] == "{": j = match_close(s, j)
        elif s[j] in "\"'":
            q = s[j]; j += 1
            while s[j] != q: j += 1
        elif s[j] == ">": return j
        j += 1
    return -1


def add_class(attrs):
    m = re.search(r'className\s*=\s*"([^"]*)"', attrs)
    if m: return attrs[:m.start()] + f'className="{BTN_BASE} {m.group(1)}"' + attrs[m.end():]
    return attrs + f' className="{BTN_BASE}"'


def strip_attr(attrs, name):
    attrs = re.sub(r'\s+' + name + r'\s*=\s*"[^"]*"', "", attrs)
    attrs = re.sub(r'\s+' + name + r'\b(?!\s*=)', "", attrs)
    return attrs


def convert_buttons(s, report):
    # Button asChild wrapping NavigationAction
    while True:
        m = re.search(r"<Button\b", s)
        if not m: break
        te = open_tag_end(s, m.start())
        tag = s[m.start():te + 1]
        close = s.find("</Button>", te)
        inner = s[te + 1:close]
        attrs = tag[len("<Button"):-1]
        is_child = re.search(r"\basChild\b", attrs)
        attrs = strip_attr(strip_attr(strip_attr(attrs, "asChild"), "size"), "variant")
        if is_child:
            nm = re.search(r"<NavigationAction\b", inner)
            if not nm:
                report.append("Button asChild without NavigationAction; converted to <span>")
                s = s[:m.start()] + "<span" + add_class(attrs) + ">" + inner + "</span>" + s[close + len("</Button>"):]
                continue
            nte = open_tag_end(inner, nm.start())
            ntag = inner[nm.start():nte + 1]
            nclose = inner.rfind("</NavigationAction>")
            children = inner[nte + 1:nclose]
            nav, span = jsx_attr_expr(ntag, "navigation")
            href, target = href_parts(nav)
            new = "<a href={" + href + "}" + target + add_class(attrs) + ">" + children + "</a>"
            s = s[:m.start()] + inner[:nm.start()].rstrip() + new.replace("\n", "\n") + inner[nclose + len("</NavigationAction>"):].rstrip() + s[close + len("</Button>"):]
            # keep indentation tidy: collapse the whitespace that wrapped the old NavigationAction
        else:
            s = s[:m.start()] + "<button" + add_class(attrs) + ">" + inner + "</button>" + s[close + len("</Button>"):]
    # bare NavigationAction
    while True:
        m = re.search(r"<NavigationAction\b", s)
        if not m: break
        te = open_tag_end(s, m.start())
        tag = s[m.start():te + 1]
        nav, span = jsx_attr_expr(tag, "navigation")
        href, target = href_parts(nav)
        rest = tag[:span[0]] + tag[span[1]:]
        rest = "<a " + rest[len("<NavigationAction"):-1].strip() + " href={" + href + "}" + target + ">"
        rest = rest.replace("<a  ", "<a ").replace("<a  href", "<a href")
        # find matching close (count nesting)
        depth = 1; j = te + 1
        while depth:
            o = s.find("<NavigationAction", j); c = s.find("</NavigationAction>", j)
            if o != -1 and o < c: depth += 1; j = o + 1
            else: depth -= 1; j = c + 1
        c = j - 1
        s = s[:m.start()] + rest + s[te + 1:c] + "</a>" + s[c + len("</NavigationAction>"):]
    return s


def main(src, dst):
    s = open(src).read()
    report = []
    s = re.sub(r'^import[^\n]*from\s+["\']@/[^"\']+["\'];?[ \t]*\n', "", s, flags=re.M)
    s = replace_setting_hooks(s, report)
    s = convert_buttons(s, report)
    # tidy "<a ...>" lines that inherited the old wrapper's blank indentation
    s = re.sub(r"\n[ \t]*\n([ \t]*<a href)", r"\n\1", s)
    for kw in ["useRecords", "useRecordUpdate", "useRecordCreate", "useCurrentUser", "window.softr", "logged_in_user", "@/"]:
        if kw in s: report.append(f"still uses {kw}; needs a manual replacement")
    open(dst, "w").write(s)
    print(f"{dst}: " + ("clean" if not report else "; ".join(report)))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
