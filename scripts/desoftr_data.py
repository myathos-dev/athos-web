#!/usr/bin/env python3
"""Convert a Softr data-bound block (useRecords / useRecordUpdate / useCurrentUser / sonner toast)
into a plain React component that takes its data as props.

  python3 scripts/desoftr_data.py <softr_file.jsx> <out_file.jsx>

Result signature:  export default function Block({ items: sourceItems = [], user = null, isAdmin = false, onUpdate })
  items    rows as Softr returned them: [{ id, fields: { ... } }]   (field names = keys of readSelect)
  user     { id, fullName, firstName } of the logged-in rep, or null
  isAdmin  replaces the old window.logged_in_user admin check
  onUpdate async (recordId, fields) => save to your backend. Optional: without it, edits apply
           locally only (the page still works for testing).
Saved fields are merged into the row locally after a successful save (Softr re-fetched instead).
"""
import re, sys

TOAST = r'''/* ── Toast (stand-in for sonner, which Softr mounted) ─────── */
const toast = (() => {
  const live = {};
  let n = 0;
  const show = (msg, opts = {}, kind = "info") => {
    if (typeof document === "undefined") return opts.id ?? ++n;
    let box = document.getElementById("blk-toasts");
    if (!box) { box = document.createElement("div"); box.id = "blk-toasts"; box.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;font-family:'DM Sans',system-ui,sans-serif"; document.body.appendChild(box); }
    const id = opts.id ?? ++n;
    const el = live[id] || document.createElement("div");
    el.style.cssText = `min-width:220px;max-width:340px;padding:10px 14px;border-radius:10px;background:#fff;box-shadow:0 6px 24px rgba(0,0,0,.12);border-left:4px solid ${kind === "error" ? "#991B1B" : kind === "success" ? "#245C3A" : "#9CA3AF"};font-size:13px;color:#1a4d2e`;
    el.innerHTML = "";
    const t = document.createElement("div"); t.style.fontWeight = "600"; t.textContent = msg; el.appendChild(t);
    if (opts.description) { const d = document.createElement("div"); d.style.cssText = "margin-top:2px;color:#6B7280"; d.textContent = opts.description; el.appendChild(d); }
    if (!live[id]) { box.appendChild(el); live[id] = el; }
    clearTimeout(el._t);
    if (kind !== "loading") el._t = setTimeout(() => { el.remove(); delete live[id]; }, 4000);
    return id;
  };
  const fn = (m, o) => show(m, o);
  fn.success = (m, o) => show(m, o, "success");
  fn.error = (m, o) => show(m, o, "error");
  fn.loading = (m, o) => show(m, o, "loading");
  return fn;
})();
'''

DATA_LAYER = '''  /* ── Data (was Softr useRecords / useRecordUpdate) ── */
  const [patches, setPatches] = useState({});
  const rows = sourceItems.map((it) => (patches[it.id] ? { ...it, fields: { ...it.fields, ...patches[it.id] } } : it));
  const data = { pages: [{ items: rows }] };
  const status = "success";
  const hasNextPage = false, isFetchingNextPage = false, fetchNextPage = () => {};
'''

UPDATE_LAYER = '''  const updateRecord = {
    mutateAsync: async ({ recordId, fields }) => {
      if (onUpdate) await onUpdate(recordId, fields);
      setPatches((p) => ({ ...p, [recordId]: { ...p[recordId], ...fields } }));
    },
    mutate: (args, cb = {}) => {
      updateRecord.mutateAsync(args).then(cb.onSuccess, (err) => {
        __ON_ERROR__
        if (cb.onError) cb.onError(err);
      });
    },
  };
'''


def main(src, dst):
    s = open(src).read()
    report = []
    sig = "export default function Block({ items: sourceItems = [], user = null, isAdmin = false, onUpdate }) {"
    n0 = s.count("export default function Block() {")
    s = s.replace("export default function Block() {", sig)
    if n0 != 1: report.append(f"Block() signature found {n0}x")

    # imports
    s = re.sub(r'^import[^\n]*from\s+["\']@/[^"\']+["\'];?[ \t]*\n', "", s, flags=re.M)
    had_toast = bool(re.search(r'^import \{ toast \} from "sonner";\n', s, flags=re.M))
    s = re.sub(r'^import \{ toast \} from "sonner";\n', "", s, flags=re.M)

    # q.select -> plain object (kept as a record of the Softr field IDs)
    s = s.replace("q.select({", "({")
    s = s.replace("/* ── Field map", "/* ── Softr field IDs (legacy reference; rows arrive as items[].fields.<key>)\n   Field map", 1)

    # admin + user
    s = re.sub(r"\nconst isAdminUser = \(\) => \{.*?\n(?=\n)", "\n", s, count=1, flags=re.S)
    s = re.sub(r"[ \t]*const user = useCurrentUser\(\);\n", "", s)
    s = re.sub(r"[ \t]*const isAdmin = isAdminUser\(\);\n", "", s)

    # useRecords
    m = re.search(r"[ \t]*const \{[^}]*\} = useRecords\(\{[^\n]*\);\n", s)
    if m: s = s[:m.start()] + DATA_LAYER + s[m.end():]
    else: report.append("useRecords line not found")

    # useRecordUpdate
    m = re.search(r"[ \t]*const updateRecord = useRecordUpdate\(\{ fields: writeFields, onError: \((\w+)\) => (.*?) \}\);\n", s)
    if m:
        s = s[:m.start()] + UPDATE_LAYER.replace("__ON_ERROR__", f"{m.group(2)};").replace("(err) => {", f"({m.group(1)}) => {{") + s[m.end():]
    elif "useRecordUpdate(" in s: report.append("useRecordUpdate line not matched")

    if had_toast:
        i = s.find("/* ━")
        if i < 0: i = s.find("export default function Block")
        s = s[:i] + TOAST + "\n" + s[i:]

    for kw in ["useRecords(", "useRecordUpdate(", "useRecordCreate(", "useCurrentUser(", "window.softr", "logged_in_user", "@/", "isAdminUser", 'from "sonner"', "q.select"]:
        if kw in s: report.append(f"still uses {kw}")
    open(dst, "w").write(s)
    print(f"{dst}: " + ("clean" if not report else "; ".join(report)))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
