#!/usr/bin/env python3
"""Count client-specific values hardcoded in the converted pages (outside Softr settings).

  python3 scripts/audit_hardcoded.py <path-to-converted-pages-root>

Each hit is something a per-client template has to replace. Edit TOKENS to add more.
"""
import os, re, sys, json
from collections import defaultdict
TOKENS = {
  "brand name 'Athos'": r"\bAthos\b",
  "domain athoshealth.com": r"athoshealth\.com",
  "domain myathos.com": r"myathos\.com",
  "parent entity Symbiotix": r"Symbiotix",
  "MSO name (Dhruv...)": r"Dhruv",
  "checkout: MyOrbit form URL / athos-wellness slug": r"myorbithealth|athos-wellness",
  "placeholder phone (000) 000-0000": r"\(000\) 000-0000",
  "placeholder address": r"\[Registered Agent Address\]",
  "brand green #245C3A": r"#245C3A",
  "brand teal #16625F": r"#16625F",
  "brand dark green #1a4d2e": r"#1a4d2e",
  "brand mid teal #558E8D": r"#558E8D",
  "font DM Serif Display / DM Sans": r"DM Serif Display|DM Sans",
  "font Canela / Telegraf": r"Canela|Telegraf",
  "image host replicate.delivery": r"replicate\.delivery",
  "image host softr-files": r"softr-files",
  "image host unsplash (placeholder)": r"unsplash\.com",
  "Calendly link": r"calendly\.com",
}
root = sys.argv[1]
SKIP = {"node_modules", "_softr-original", "app", "scripts", "dist"}
tot = defaultdict(int); files = defaultdict(set)
for d, dirs, fs in os.walk(root):
    dirs[:] = [x for x in dirs if x not in SKIP]
    for f in fs:
        if not re.match(r"block-\d+\.jsx$", f): continue
        p = os.path.join(d, f); s = open(p).read(); route = os.path.relpath(d, root)
        for k, rx in TOKENS.items():
            n = len(re.findall(rx, s, re.I if k.startswith("brand") or k.startswith("font") else 0))
            if n: tot[k] += n; files[k].add(route)
print(json.dumps({k: {"hits": tot[k], "pages": len(files[k])} for k in TOKENS if tot[k]}, indent=1))
