#!/usr/bin/env python3
"""Inventory every Softr editable setting (the fields Softr let you edit per page).

  python3 scripts/extract_fields.py <path-to-_softr-original> > fields.json

These settings are the natural first set of template fields: Softr already
separated them from the code. Output: { "<route>": { "block-01": [ {hook,name,label,default} ] } }
"""
import json, os, re, sys
sys.path.insert(0, os.environ.get("DESOFTR_DIR", os.path.join(os.path.dirname(__file__))))
from desoftr import match_close, top_level_value, SETTING_HOOKS  # noqa: E402

def unquote(v):
    if v is None: return None
    v = v.strip()
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "\"'`":
        if v[0] == '"':
            try: return json.loads(v)
            except ValueError: pass
        return v[1:-1].replace("\\'", "'").replace('\\"', '"').replace("\\n", "\n")
    return v  # objects/arrays kept as source text

def fields(src):
    out = []
    pat = re.compile(r"\b(" + "|".join(SETTING_HOOKS) + r")\s*\(")
    for m in pat.finditer(src):
        if src[m.start()-7:m.start()] == "import " or "from" in src[m.start()-60:m.start()].split("\n")[-1]:
            continue
        close = match_close(src, m.end() - 1)
        args = src[m.end():close].strip()
        if not args.startswith("{"): continue
        body = args[1:match_close(args, 0)]
        out.append({"hook": m.group(1).replace("use", "").replace("Setting", "").lower(),
                    "name": unquote(top_level_value(body, "name")),
                    "label": unquote(top_level_value(body, "label")),
                    "default": unquote(top_level_value(body, "initialValue"))})
    return out

root = sys.argv[1]
res = {}
for d, _, files in sorted(os.walk(root)):
    for f in sorted(files):
        if not re.match(r"block-\d+\.jsx$", f): continue
        fl = fields(open(os.path.join(d, f)).read())
        if fl: res.setdefault(os.path.relpath(d, root), {})[f[:-4]] = fl
json.dump(res, sys.stdout, indent=1, ensure_ascii=False)
