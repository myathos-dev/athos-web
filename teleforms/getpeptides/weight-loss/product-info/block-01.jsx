import { useState, useCallback, useEffect, useMemo, useRef } from "react";

const PR = "rgb(36, 92, 58)";
const BRAND = "Athos";
const FH = "'DM Serif Display','Noe Display','Saol Display',Georgia,serif";
const FB = "'DM Sans',system-ui,sans-serif";

const PRICE_FROM = { semaglutide: 90, tirzepatide: 140, retatrutide: 110 };
const MICRO_PRICE_FROM = { semaglutide: 45, tirzepatide: 70, retatrutide: 55 };

const DT = [
  { max: 30, label: "Starter", color: "#86EFAC", range: "27–29.9" },
  { max: 35, label: "Standard", color: "#4ADE80", range: "30–34.9" },
  { max: 40, label: "Accelerated", color: "#16A34A", range: "35–39.9" },
  { max: 999, label: "Maximum", color: "#166534", range: "≥40" },
];

const ADDONS = [
  { id: "none", nm: "No additives", desc: "Pure medication only", tip: "Standard compound without additional ingredients.", meds: ["semaglutide","tirzepatide","retatrutide"] },
  { id: "b12", nm: "Vitamin B12", desc: "Energy and metabolism", tip: "Supports energy levels and metabolic function. Most popular add-on.", meds: ["semaglutide","tirzepatide","retatrutide"] },
  { id: "b6", nm: "Vitamin B6", desc: "Reduces nausea during titration", tip: "Helps mitigate GI side effects during dose escalation. Recommended for BMI 35+.", meds: ["semaglutide","tirzepatide"] },
  { id: "nad", nm: "NAD+", desc: "Cellular energy and repair", tip: "Supports cellular repair and mitochondrial energy metabolism.", meds: ["semaglutide","tirzepatide"] },
  { id: "glycine", nm: "Glycine", desc: "Sleep quality and recovery", tip: "Supports sleep quality and collagen synthesis during weight loss.", meds: ["semaglutide","tirzepatide"] },
  { id: "niacinamide", nm: "Niacinamide", desc: "Skin and lipid support", tip: "Supports skin elasticity and lipid metabolism.", meds: ["tirzepatide"] },
];

const DR = {
  semaglutide: { injection: [1, 10], tablet: [2, 300], lozenge: [7.5, 30], capsule: [3, 50], liquid: [37.5, 75] },
  tirzepatide: { injection: [10, 90], tablet: [3, 180] },
  retatrutide: { injection: [10, 50] },
};

const PROTO = {
  semaglutide: {
    injection: [
      { p: "Starter", d: "0.25 mg", f: "Once weekly SubQ", t: "Wk 1–4" },
      { p: "Escalation", d: "0.5–1.0 mg", f: "Once weekly SubQ", t: "Wk 5–12" },
      { p: "Maintenance", d: "1.7–2.4 mg", f: "Once weekly SubQ", t: "Ongoing" },
    ],
    tablet: [
      { p: "Starter", d: "2–3 mg", f: "Once daily", t: "Wk 1–4" },
      { p: "Escalation", d: "5–7 mg", f: "Once daily", t: "Wk 5–8" },
      { p: "Maintenance", d: "10–14 mg", f: "Once daily", t: "Ongoing" },
    ],
    lozenge: [
      { p: "Starter", d: "250 mcg", f: "Once daily sublingual", t: "Wk 1–4" },
      { p: "Escalation", d: "500 mcg", f: "Once daily sublingual", t: "Wk 5–8" },
      { p: "Maintenance", d: "1 mg", f: "Once daily sublingual", t: "Ongoing" },
    ],
    capsule: [
      { p: "Starter", d: "3 mg", f: "Once daily with Metformin", t: "Wk 1–4" },
      { p: "Escalation", d: "7–14 mg", f: "Once daily with Metformin", t: "Wk 5–8" },
      { p: "Maintenance", d: "25–50 mg", f: "Once daily with Metformin", t: "Ongoing" },
    ],
    liquid: [
      { p: "Daily", d: "2.5 mg/mL", f: "Once daily oral solution", t: "Ongoing" },
    ],
  },
  tirzepatide: {
    injection: [
      { p: "Starter", d: "2.5 mg", f: "Once weekly SubQ", t: "Wk 1–4" },
      { p: "Escalation", d: "5–10 mg", f: "Once weekly SubQ", t: "Wk 5–12" },
      { p: "Maintenance", d: "10–15 mg", f: "Once weekly SubQ", t: "Ongoing" },
    ],
    tablet: [
      { p: "Starter", d: "3 mg", f: "Once daily RDT", t: "Wk 1–4" },
      { p: "Escalation", d: "4–5 mg", f: "Once daily RDT", t: "Wk 5–8" },
      { p: "Maintenance", d: "6 mg", f: "Once daily RDT", t: "Ongoing" },
    ],
  },
  retatrutide: {
    injection: [
      { p: "Starter", d: "2 mg", f: "Once weekly SubQ", t: "Wk 1–4" },
      { p: "Escalation", d: "4–8 mg", f: "Once weekly SubQ", t: "Wk 5–12" },
      { p: "Maintenance", d: "8–12 mg", f: "Once weekly SubQ", t: "Ongoing" },
    ],
  },
};

/* ══════════════════════════════════════════════
   PRODUCTS — Rebuilt from Athos_Qualifying_Items_NEW.csv
   Deduped by (med, route, addon, doseTier) for Dose Tier
   and (med, route, addon, conc, vol) for Flat Tier.
   Each product carries its checkout slug directly.
   ══════════════════════════════════════════════ */
const mkP = (m, r, a, c, v, mg, price, doseTier, slug, note) => ({
  med: m, route: r, addon: a, conc: c, vol: v, mg, price, doseTier, slug, note,
});

const PRODUCTS = [
  /* ── Retatrutide · Injection ── */
  mkP("retatrutide","injection","none","10 mg/mL","1ml",10,110,"2mg/wk","retatrutide-2mg","10 mg/mL × 1ml"),
  mkP("retatrutide","injection","b12","10 mg/mL","1ml",10,110,"2mg/wk","retatrutide-2mg","10 mg/mL × 1ml + B12"),
  mkP("retatrutide","injection","none","8 mg/mL","2ml",16,155,"4mg/wk","retatrutide-4mg","8 mg/mL × 2ml"),
  mkP("retatrutide","injection","none","10 mg/mL","2ml",20,270,"8mg/wk","retatrutide-8mg","10 mg/mL × 2ml"),
  mkP("retatrutide","injection","none","16 mg/mL","2ml",32,320,"12mg/wk","retatrutide-12mg","16 mg/mL × 2ml"),
  mkP("retatrutide","injection","none","10 mg/mL","4ml",40,800,"Flat","retatrutide","10 mg/mL × 4ml"),
  mkP("retatrutide","injection","none","10 mg/mL","5ml",50,800,"Flat","retatrutide","10 mg/mL × 5ml"),

  /* ── Semaglutide · Injection · none ── */
  mkP("semaglutide","injection","none","2.5 mg/mL","1ml",2.5,90,"0.5mg/wk","semaglutide-0.5mg","2.5 mg/mL × 1ml"),
  mkP("semaglutide","injection","none","2.5 mg/mL","2ml",5,125,"1mg/wk","semaglutide-1mg","2.5 mg/mL × 2ml"),
  mkP("semaglutide","injection","none","2.5 mg/mL","3ml",7.5,160,"1.7mg/wk","semaglutide-1.7mg","2.5 mg/mL × 3ml"),
  mkP("semaglutide","injection","none","2.5 mg/mL","4ml",10,170,"2.4mg/wk","semaglutide-2.4mg","2.5 mg/mL × 4ml"),
  mkP("semaglutide","injection","none","2.5 mg/mL","6ml",15,170,"2.4mg/wk","semaglutide-2.4mg","2.5 mg/mL × 6ml — extended supply"),
  /* ── Semaglutide · Injection · B12 ── */
  mkP("semaglutide","injection","b12","1 mg/mL","1ml",1,90,"0.25mg/wk","semaglutide-0.25mg","1 mg/mL × 1ml + B12"),
  mkP("semaglutide","injection","b12","2.5 mg/mL","1ml",2.5,90,"0.5mg/wk","semaglutide-0.5mg","2.5 mg/mL × 1ml + B12"),
  mkP("semaglutide","injection","b12","2.5 mg/mL","2ml",5,125,"1mg/wk","semaglutide-1mg","2.5 mg/mL × 2ml + B12"),
  mkP("semaglutide","injection","b12","2.5 mg/mL","3ml",7.5,160,"1.7mg/wk","semaglutide-1.7mg","2.5 mg/mL × 3ml + B12"),
  mkP("semaglutide","injection","b12","2.5 mg/mL","4ml",10,170,"2.4mg/wk","semaglutide-2.4mg","2.5 mg/mL × 4ml + B12"),
  /* ── Semaglutide · Injection · B6 ── */
  mkP("semaglutide","injection","b6","1 mg/mL","1ml",1,90,"0.25mg/wk","semaglutide-0.25mg","1 mg/mL × 1ml + B6"),
  mkP("semaglutide","injection","b6","2.5 mg/mL","1ml",2.5,90,"0.5mg/wk","semaglutide-0.5mg","2.5 mg/mL × 1ml + B6"),
  mkP("semaglutide","injection","b6","2.5 mg/mL","2ml",5,125,"1mg/wk","semaglutide-1mg","2.5 mg/mL × 2ml + B6"),
  mkP("semaglutide","injection","b6","2.5 mg/mL","3ml",7.5,160,"1.7mg/wk","semaglutide-1.7mg","2.5 mg/mL × 3ml + B6"),
  mkP("semaglutide","injection","b6","2.5 mg/mL","4ml",10,170,"2.4mg/wk","semaglutide-2.4mg","2.5 mg/mL × 4ml + B6"),
  /* ── Semaglutide · Injection · Glycine ── */
  mkP("semaglutide","injection","glycine","2.5 mg/mL","1ml",2.5,90,"0.5mg/wk","semaglutide-0.5mg","2.5 mg/mL × 1ml + Glycine"),
  mkP("semaglutide","injection","glycine","2.5 mg/mL","2ml",5,125,"1mg/wk","semaglutide-1mg","2.5 mg/mL × 2ml + Glycine"),
  mkP("semaglutide","injection","glycine","2.5 mg/mL","3ml",7.5,160,"1.7mg/wk","semaglutide-1.7mg","2.5 mg/mL × 3ml + Glycine"),
  mkP("semaglutide","injection","glycine","2.5 mg/mL","4ml",10,170,"2.4mg/wk","semaglutide-2.4mg","2.5 mg/mL × 4ml + Glycine"),
  /* ── Semaglutide · Injection · NAD+ ── */
  mkP("semaglutide","injection","nad","2.5 mg/mL","1ml",2.5,90,"0.5mg/wk","semaglutide-0.5mg","2.5 mg/mL × 1ml + NAD+"),
  mkP("semaglutide","injection","nad","2.5 mg/mL","2ml",5,125,"1mg/wk","semaglutide-1mg","2.5 mg/mL × 2ml + NAD+"),
  mkP("semaglutide","injection","nad","2.5 mg/mL","3ml",7.5,160,"1.7mg/wk","semaglutide-1.7mg","2.5 mg/mL × 3ml + NAD+"),
  mkP("semaglutide","injection","nad","2.5 mg/mL","4ml",10,170,"2.4mg/wk","semaglutide-2.4mg","2.5 mg/mL × 4ml + NAD+"),

  /* ── Semaglutide · Capsule (all Flat, with Metformin) ── */
  mkP("semaglutide","capsule","none","3 mg/cap","per capsule",3,320,"Flat","semaglutide","Sema/Metformin 3 mg"),
  mkP("semaglutide","capsule","none","7 mg/cap","per capsule",7,320,"Flat","semaglutide","Sema/Metformin 7 mg"),
  mkP("semaglutide","capsule","none","14 mg/cap","per capsule",14,320,"Flat","semaglutide","Sema/Metformin 14 mg"),
  mkP("semaglutide","capsule","none","25 mg/cap","per capsule",25,320,"Flat","semaglutide","Sema/Metformin 25 mg"),
  mkP("semaglutide","capsule","none","40 mg/cap","per capsule",40,320,"Flat","semaglutide","Sema/Metformin 40 mg"),
  mkP("semaglutide","capsule","none","50 mg/cap","per capsule",50,320,"Flat","semaglutide","Sema/Metformin 50 mg"),

  /* ── Semaglutide · Lozenge (all Flat) ── */
  mkP("semaglutide","lozenge","none","250 mcg/loz","30 lozenges",7.5,320,"Flat","semaglutide","Sublingual lozenge 250 mcg — 30 day"),
  mkP("semaglutide","lozenge","none","500 mcg/loz","30 lozenges",15,320,"Flat","semaglutide","Sublingual lozenge 500 mcg — 30 day"),
  mkP("semaglutide","lozenge","none","1 mg/loz","30 lozenges",30,320,"Flat","semaglutide","Sublingual lozenge 1 mg — 30 day"),

  /* ── Semaglutide · Liquid (all Flat) ── */
  mkP("semaglutide","liquid","none","2.5 mg/mL","15ml",37.5,320,"Flat","semaglutide","Oral solution 2.5 mg/mL — 15ml"),
  mkP("semaglutide","liquid","none","2.5 mg/mL","30ml",75,320,"Flat","semaglutide","Oral solution 2.5 mg/mL — 30ml"),

  /* ── Semaglutide · Tablet (all Flat) ── */
  mkP("semaglutide","tablet","none","2 mg/tab","per tab",2,320,"Flat","semaglutide","ODT/RDT 2 mg + B12 — weekly"),
  mkP("semaglutide","tablet","none","5 mg/tab","per tab",5,320,"Flat","semaglutide","ODT/RDT 5 mg + B12 — weekly"),
  mkP("semaglutide","tablet","none","12 mg/tab","per tab",12,320,"Flat","semaglutide","ODT/RDT 12 mg + B12 — weekly"),
  mkP("semaglutide","tablet","none","2 mg/tab","30 tabs",60,320,"Flat","semaglutide","ODT/RDT 2 mg + anti-nausea daily — 30 day"),
  mkP("semaglutide","tablet","none","3 mg/tab","30 tabs",90,320,"Flat","semaglutide","ODT/RDT 3 mg + anti-nausea daily — 30 day"),
  mkP("semaglutide","tablet","none","4 mg/tab","30 tabs",120,320,"Flat","semaglutide","ODT/RDT 4 mg + anti-nausea daily — 30 day"),
  mkP("semaglutide","tablet","none","6 mg/tab","30 tabs",180,320,"Flat","semaglutide","ODT/RDT 6 mg + anti-nausea daily — 30 day"),
  mkP("semaglutide","tablet","none","8 mg/tab","30 tabs",240,320,"Flat","semaglutide","ODT/RDT 8 mg + anti-nausea daily — 30 day"),
  mkP("semaglutide","tablet","none","10 mg/tab","30 tabs",300,320,"Flat","semaglutide","ODT/RDT 10 mg + anti-nausea daily — 30 day"),

  /* ── Tirzepatide · Injection · none ── */
  mkP("tirzepatide","injection","none","10 mg/mL","1ml",10,140,"2.5mg/wk","tirzepatide-2.5mg","10 mg/mL × 1ml"),
  mkP("tirzepatide","injection","none","10 mg/mL","2ml",20,190,"5mg/wk","tirzepatide-5mg","10 mg/mL × 2ml"),
  mkP("tirzepatide","injection","none","10 mg/mL","3ml",30,220,"7.5mg/wk","tirzepatide-7.5mg","10 mg/mL × 3ml"),
  mkP("tirzepatide","injection","none","10 mg/mL","4ml",40,260,"10mg/wk","tirzepatide-10mg","10 mg/mL × 4ml"),
  mkP("tirzepatide","injection","none","20 mg/mL","3ml",60,315,"12.5mg/wk","tirzepatide-12.5mg","20 mg/mL × 3ml"),
  mkP("tirzepatide","injection","none","25 mg/mL","3ml",75,340,"15mg/wk","tirzepatide-15mg","25 mg/mL × 3ml"),
  /* ── Tirzepatide · Injection · B12 ── */
  mkP("tirzepatide","injection","b12","10 mg/mL","1ml",10,140,"2.5mg/wk","tirzepatide-2.5mg","10 mg/mL × 1ml + B12"),
  mkP("tirzepatide","injection","b12","10 mg/mL","2ml",20,190,"5mg/wk","tirzepatide-5mg","10 mg/mL × 2ml + B12"),
  mkP("tirzepatide","injection","b12","20 mg/mL","1.5ml",30,220,"7.5mg/wk","tirzepatide-7.5mg","20 mg/mL × 1.5ml + B12"),
  mkP("tirzepatide","injection","b12","20 mg/mL","2ml",40,260,"10mg/wk","tirzepatide-10mg","20 mg/mL × 2ml + B12"),
  mkP("tirzepatide","injection","b12","17 mg/mL","4ml",68,340,"15mg/wk","tirzepatide-15mg","17 mg/mL × 4ml + B12"),
  /* ── Tirzepatide · Injection · B6 ── */
  mkP("tirzepatide","injection","b6","10 mg/mL","1ml",10,140,"2.5mg/wk","tirzepatide-2.5mg","10 mg/mL × 1ml + B6"),
  mkP("tirzepatide","injection","b6","10 mg/mL","2ml",20,190,"5mg/wk","tirzepatide-5mg","10 mg/mL × 2ml + B6"),
  mkP("tirzepatide","injection","b6","20 mg/mL","1.5ml",30,220,"7.5mg/wk","tirzepatide-7.5mg","20 mg/mL × 1.5ml + B6"),
  mkP("tirzepatide","injection","b6","20 mg/mL","2ml",40,260,"10mg/wk","tirzepatide-10mg","20 mg/mL × 2ml + B6"),
  mkP("tirzepatide","injection","b6","20 mg/mL","3ml",60,315,"12.5mg/wk","tirzepatide-12.5mg","20 mg/mL × 3ml + B6"),
  /* ── Tirzepatide · Injection · Glycine ── */
  mkP("tirzepatide","injection","glycine","10 mg/mL","1ml",10,140,"2.5mg/wk","tirzepatide-2.5mg","10 mg/mL × 1ml + Glycine"),
  mkP("tirzepatide","injection","glycine","10 mg/mL","2ml",20,190,"5mg/wk","tirzepatide-5mg","10 mg/mL × 2ml + Glycine"),
  mkP("tirzepatide","injection","glycine","20 mg/mL","1.5ml",30,220,"7.5mg/wk","tirzepatide-7.5mg","20 mg/mL × 1.5ml + Glycine"),
  mkP("tirzepatide","injection","glycine","20 mg/mL","2ml",40,260,"10mg/wk","tirzepatide-10mg","20 mg/mL × 2ml + Glycine"),
  /* ── Tirzepatide · Injection · NAD+ ── */
  mkP("tirzepatide","injection","nad","10 mg/mL","1ml",10,140,"2.5mg/wk","tirzepatide-2.5mg","10 mg/mL × 1ml + NAD+"),
  mkP("tirzepatide","injection","nad","10 mg/mL","2ml",20,190,"5mg/wk","tirzepatide-5mg","10 mg/mL × 2ml + NAD+"),
  mkP("tirzepatide","injection","nad","20 mg/mL","1.5ml",30,220,"7.5mg/wk","tirzepatide-7.5mg","20 mg/mL × 1.5ml + NAD+"),
  mkP("tirzepatide","injection","nad","20 mg/mL","2ml",40,260,"10mg/wk","tirzepatide-10mg","20 mg/mL × 2ml + NAD+"),
  /* ── Tirzepatide · Injection · Niacinamide ── */
  mkP("tirzepatide","injection","niacinamide","8 mg/mL","2.5ml",20,190,"5mg/wk","tirzepatide-5mg","8 mg/mL × 2.5ml + Niacinamide"),

  /* ── Tirzepatide · Tablet (all Flat) ── */
  mkP("tirzepatide","tablet","none","3 mg/tab","1 tab",3,470,"Flat","tirzepatide","ODT/RDT 3 mg — weekly"),
  mkP("tirzepatide","tablet","none","4 mg/tab","1 tab",4,470,"Flat","tirzepatide","ODT/RDT 4 mg — weekly"),
  mkP("tirzepatide","tablet","none","5 mg/tab","1 tab",5,470,"Flat","tirzepatide","ODT/RDT 5 mg — weekly"),
  mkP("tirzepatide","tablet","none","3 mg/tab","30 tabs",90,470,"Flat","tirzepatide","ODT/RDT 3 mg daily — 30 day"),
  mkP("tirzepatide","tablet","none","4 mg/tab","30 tabs",120,470,"Flat","tirzepatide","ODT/RDT 4 mg daily — 30 day"),
  mkP("tirzepatide","tablet","none","5 mg/tab","30 tabs",150,470,"Flat","tirzepatide","ODT/RDT 5 mg daily — 30 day"),
  mkP("tirzepatide","tablet","none","6 mg/tab","30 tabs",180,470,"Flat","tirzepatide","ODT/RDT 6 mg daily — 30 day"),
];

const MED_NAMES = { semaglutide: "Semaglutide", tirzepatide: "Tirzepatide", retatrutide: "Retatrutide" };
const ROUTE_LABELS = { injection: "Weekly injection", tablet: "Daily dissolving tablet", lozenge: "Sublingual lozenge", capsule: "Oral capsule", liquid: "Oral solution" };
const ADDON_NAMES = { none: "No additives", b12: "B12", b6: "B6", nad: "NAD+", glycine: "Glycine", niacinamide: "Niacinamide" };

/* ── Microdosing ── */
const MICRO_TIERS = {
  "0.25mg/wk": true,
  "0.5mg/wk": true,
  "1mg/wk": true,
  "2.5mg/wk": true,
  "5mg/wk": true,
  "2mg/wk": true,
  "4mg/wk": true,
};

/* ── Protocol Stacks (GLP + Peptide Pairing) ── */
const STACKS = [
  { id: "muscle-loss", problem: "Keep muscle", hook: "Preserve lean mass while losing fat", peptide: "cjc-ipa", name: "Growth Hormone Peptide", category: "CJC-1295/Ipamorelin", why: "Stimulates natural growth hormone to protect muscle during weight loss", glps: ["semaglutide","tirzepatide","retatrutide"], price: 205 },
  { id: "metabolic-plateau", problem: "Break plateau", hook: "Restart stalled fat loss", peptide: "motsc", name: "Metabolic Activator", category: "MOTS-c", why: "Activates a second fat-burning pathway when progress stalls", glps: ["semaglutide","tirzepatide"], price: 245 },
  { id: "fat-recomp", problem: "Maximize fat burn", hook: "Stack cellular metabolism on top", peptide: "motsc", name: "Metabolic Activator", category: "MOTS-c", why: "Adds cellular-level fat burning to your triple-agonist for maximum results", glps: ["retatrutide"], price: 245 },
  { id: "glp-fatigue", problem: "Boost energy", hook: "Fight fatigue during weight loss", peptide: "nad-inj", name: "Cellular Energy Peptide", category: "NAD+", why: "Restores cellular energy when caloric deficit leaves you drained", glps: ["semaglutide","tirzepatide","retatrutide"], price: 205 },
  { id: "gi-issues", problem: "Calm nausea", hook: "Reduce GI side effects", peptide: "bpc-157", name: "Gut Repair Peptide", category: "BPC-157", why: "Heals gut lining and reduces nausea common during dose escalation", glps: ["semaglutide","tirzepatide","retatrutide"], price: 190 },
  { id: "joint-pain", problem: "Repair joints", hook: "Protect joints during rapid change", peptide: "wolverine", name: "Joint Recovery Blend", category: "Wolverine", why: "Dual-peptide blend that repairs joints stressed by rapid body composition changes", glps: ["semaglutide","tirzepatide","retatrutide"], price: 200 },
  { id: "skin-tightening", problem: "Tighten skin", hook: "Firm skin as your body shrinks", peptide: "glo", name: "Skin Firming Blend", category: "GLO", why: "Boosts collagen production and tissue repair to keep skin tight as you lose weight", glps: ["semaglutide","tirzepatide","retatrutide"], price: 235 },
  { id: "kitchen-sink", problem: "Full coverage", hook: "Gut, skin, and recovery all-in-one", peptide: "klow", name: "Total Recovery Blend", category: "KLOW", why: "Combines skin firming, gut healing, and anti-inflammatory support in one protocol", glps: ["semaglutide","tirzepatide","retatrutide"], price: 310 },
  { id: "sleep-recovery", problem: "Sleep better", hook: "Improve sleep quality on a deficit", peptide: "semax-selank", name: "Sleep + Focus Peptide", category: "Sermorelin", why: "Supports deep sleep and stress resilience when your body is under caloric stress", glps: ["semaglutide","tirzepatide","retatrutide"], price: 180 },
];

/* ── Orbit Checkout ── */
const ORBIT_BASE = "https://checkout.athos.example/form/athos-wellness";

const CSS = `@keyframes tfSIR{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}@keyframes tfSOL{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}@keyframes tfSIL{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}@keyframes tfSOR{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}.tf-ef{animation:tfSIR .4s cubic-bezier(.16,1,.3,1) forwards}.tf-xf{animation:tfSOL .3s cubic-bezier(.7,0,.84,0) forwards}.tf-eb{animation:tfSIL .4s cubic-bezier(.16,1,.3,1) forwards}.tf-xb{animation:tfSOR .3s cubic-bezier(.7,0,.84,0) forwards}.tf-idle{opacity:1;transform:translateX(0)}@keyframes tfFI{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.tf-fi{animation:tfFI .4s cubic-bezier(.16,1,.3,1) forwards}@keyframes tfFtI{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.tf-fta{animation:tfFtI .35s cubic-bezier(.16,1,.3,1) forwards}`;

/* ── Icons ── */
const Arr = () => <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>;
const BkA = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>;
const Chk = ({ c }) => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>;
const BoltSVG = () => <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><path d="M18 4L8 18h6l-2 10 10-14h-6l2-10z" fill={PR} opacity=".2" stroke={PR} strokeWidth="1.5" strokeLinejoin="round"/></svg>;
const ShieldSVG = () => <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><path d="M16 4L6 8v6c0 7 4.5 11 10 13 5.5-2 10-6 10-13V8L16 4z" fill={PR} opacity=".15" stroke={PR} strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 16l3 3 5-6" stroke={PR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CellSVG = () => <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" fill={PR} opacity=".1" stroke={PR} strokeWidth="1.5"/><circle cx="16" cy="16" r="4" fill={PR} opacity=".25"/></svg>;
const MoonSVG = () => <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><path d="M22 18A8 8 0 1114 10a6 6 0 008 8z" fill={PR} opacity=".15" stroke={PR} strokeWidth="1.5"/></svg>;
const PureSVG = () => <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" fill={PR} opacity=".1" stroke={PR} strokeWidth="1.5"/><path d="M11 16l3.5 3.5L21 13" stroke={PR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const NiacSVG = () => <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="8" y="8" width="16" height="16" rx="4" fill={PR} opacity=".1" stroke={PR} strokeWidth="1.5"/><circle cx="16" cy="16" r="3" fill={PR} opacity=".3"/></svg>;
const AICONS = { none: <PureSVG/>, b12: <BoltSVG/>, b6: <ShieldSVG/>, nad: <CellSVG/>, glycine: <MoonSVG/>, niacinamide: <NiacSVG/> };

/* ── Tooltip ── */
const Tip = ({ text }) => {
  const [s, setS] = useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex", marginLeft: 6, cursor: "pointer", verticalAlign: "middle" }} onMouseEnter={() => setS(true)} onMouseLeave={() => setS(false)} onClick={e => { e.stopPropagation(); setS(!s); }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(0 0% 65%)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      {s && <div style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", width: 240, padding: "10px 12px", borderRadius: 10, backgroundColor: "hsl(0 0% 15%)", color: "#fff", fontSize: 13, fontWeight: 400, lineHeight: "18px", fontFamily: FB, boxShadow: "0 8px 24px rgba(0,0,0,.2)", zIndex: 100 }}>{text}<div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid hsl(0 0% 15%)" }}/></div>}
    </span>
  );
};

/* ── Shared UI ── */
const LH = ({ showBack, onBack, prog }) => (
  <header style={{ position: "sticky", top: 0, zIndex: 10, maxWidth: 520, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", backgroundColor: "#fff", borderBottom: "1px solid hsl(0 0% 90%)" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", position: "relative" }}>
      {showBack && <button onClick={onBack} style={{ position: "absolute", left: 20, display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9999, border: "1px solid hsl(0 0% 90%)", backgroundColor: "transparent", color: "hsl(0 0% 8.5%)", fontSize: 14, fontWeight: 400, cursor: "pointer", lineHeight: 1, fontFamily: FB }}><BkA/> Back</button>}
      <span style={{ fontSize: 28, fontWeight: 600, color: PR, letterSpacing: "-0.01em", fontFamily: FH }}>{BRAND}</span>
    </div>
    <div style={{ padding: "0 20px 16px" }}><div style={{ width: "100%", height: 12, borderRadius: 9999, backgroundColor: "hsl(0 0% 96.5%)", overflow: "hidden" }}><div style={{ width: `${prog}%`, height: "100%", borderRadius: 9999, backgroundColor: PR, transition: "width .4s ease" }}/></div></div>
  </header>
);
const LF = ({ onClick, disabled, label }) => (
  <footer className="tf-fta" style={{ position: "sticky", bottom: 0, maxWidth: 520, width: "100%", margin: "auto auto 0", padding: "16px 20px", backgroundColor: "#fff", borderTop: "1px solid hsl(0 0% 90%)" }}>
    <button onClick={onClick} disabled={disabled} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: FB, fontSize: 16, fontWeight: 500, lineHeight: "24px", padding: 16, borderRadius: 12, border: "none", backgroundColor: !disabled ? PR : "hsl(0 0% 96.5%)", color: !disabled ? "#fff" : "hsl(0 0% 55%)", cursor: !disabled ? "pointer" : "not-allowed", transition: "background-color .3s, color .3s" }}>{label || "Continue"} <Arr/></button>
  </footer>
);
const SR = ({ l, v }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid hsl(0 0% 93%)" }}>
    <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, color: "hsl(0 0% 45%)" }}>{l}</span>
    <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{v}</span>
  </div>
);

const DoseMeter = ({ bmi, selMg, med, effRoute }) => {
  const bmiTier = DT.find(t => bmi < t.max) || DT[3];
  const range = DR[med]?.[effRoute] || [0, 100];
  let meterVal, meterTier;
  if (selMg !== null && selMg !== undefined && range[1] > range[0]) {
    const raw = ((selMg - range[0]) / (range[1] - range[0])) * 100;
    meterVal = Math.max(8, Math.min(92, raw));
    meterTier = raw < 25 ? DT[0] : raw < 50 ? DT[1] : raw < 75 ? DT[2] : DT[3];
  } else {
    const raw = ((Math.max(27, Math.min(45, bmi)) - 27) / 18) * 100;
    meterVal = Math.max(8, Math.min(92, raw)); meterTier = bmiTier;
  }
  return (<div style={{ marginBottom: 20 }}>
    <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "flex", alignItems: "center" }}>{selMg !== null && selMg !== undefined ? "Selected Dosing Intensity" : "Your Dosing Tier"}<Tip text={selMg !== null && selMg !== undefined ? "Reflects intensity of your selected product relative to the full dose range." : "Based on your BMI. Your provider confirms the final dosing plan."}/></div>
    <div style={{ position: "relative", width: "100%", height: 36, borderRadius: 9999, overflow: "visible", display: "flex" }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 9999, overflow: "hidden", display: "flex" }}>{DT.map((d, i) => <div key={i} style={{ flex: 1, backgroundColor: d.color }}/>)}</div>
      <div style={{ position: "absolute", left: `${meterVal}%`, top: 0, transform: "translateX(-50%)", height: "100%", display: "flex", alignItems: "center", zIndex: 2, transition: "left .4s cubic-bezier(.16,1,.3,1)" }}><div style={{ padding: "3px 10px", borderRadius: 9999, backgroundColor: meterTier.color, color: meterTier.color === "#86EFAC" || meterTier.color === "#4ADE80" ? "hsl(0 0% 15%)" : "#fff", fontFamily: FB, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,.2)", border: "2px solid #fff" }}>{meterTier.label}</div></div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>{DT.map((d, i) => <div key={i} style={{ flex: 1, textAlign: i === 0 ? "left" : i === 3 ? "right" : "center" }}><span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)" }}>{d.range}</span></div>)}</div>
  </div>);
};

const ProtoCard = ({ proto, route }) => (<div style={{ marginBottom: 20, borderRadius: 12, border: "1px solid hsl(0 0% 90%)", overflow: "hidden" }}>
  <div style={{ padding: "12px 16px", backgroundColor: `${PR}08`, borderBottom: "1px solid hsl(0 0% 90%)" }}><span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 20%)" }}>Dosing Protocol — {ROUTE_LABELS[route] || route}</span></div>
  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FB, fontSize: 13 }}><thead><tr style={{ backgroundColor: "hsl(0 0% 97%)" }}>{["Phase","Dose","Frequency","Duration"].map(h => <th key={h} style={{ padding: "8px 12px", textAlign: "left", fontWeight: 500, color: "hsl(0 0% 45%)", borderBottom: "1px solid hsl(0 0% 93%)" }}>{h}</th>)}</tr></thead>
    <tbody>{proto.map((r, i) => (<tr key={i}><td style={{ padding: "10px 12px", fontWeight: 600, color: PR, borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.p}</td><td style={{ padding: "10px 12px", color: "hsl(0 0% 20%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.d}</td><td style={{ padding: "10px 12px", color: "hsl(0 0% 35%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.f}</td><td style={{ padding: "10px 12px", color: "hsl(0 0% 35%)", borderBottom: i < proto.length - 1 ? "1px solid hsl(0 0% 95%)" : "none" }}>{r.t}</td></tr>))}</tbody></table>
  <div style={{ padding: "10px 12px", backgroundColor: "hsl(0 0% 98%)", borderTop: "1px solid hsl(0 0% 93%)" }}><p style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 50%)", lineHeight: "16px", margin: 0 }}>Your provider adjusts dosing based on tolerance and clinical response.</p></div></div>);

const IncludedBanner = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 12, backgroundColor: `${PR}0A`, border: `1px solid ${PR}20`, marginBottom: 20 }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={PR} strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
    <div><span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: PR }}>Included with your subscription</span><span style={{ fontFamily: FB, fontSize: 12, fontWeight: 400, color: "hsl(0 0% 50%)", display: "block", marginTop: 1 }}>Add-ons compounded at no extra cost</span></div>
  </div>
);

/* ── Orbit Intake + Consent Popup ── */
function buildNotesString(data) {
  const label = data.selectedProduct?.label || "Unknown product";
  const addonName = ADDON_NAMES[data.selectedProduct?.addon] || ADDON_NAMES[data.addon] || "None";
  const priorFlag = data.priorGLP1 === "none" ? "No prior GLP-1 use" : `Prior GLP-1: ${data.priorGLP1}`;
  const bmi = data.bmi || "Unknown";
  const goalWeight = data.goalWeight || "Not specified";
  const microFlag = data.microdose ? " [MICRODOSE — billed every 2 months]" : "";
  let notes = `Patient requests: ${label} + ${addonName}${microFlag}\nOther important info: ${priorFlag}, BMI ${bmi}, goal weight ${goalWeight} lbs`;
  if (data.protocolStack) {
    const ps = data.protocolStack;
    if (ps.microdose) {
      notes += `\nProtocol stack: ${ps.name} — MICRO-DOSE PROTOCOL CHANGE BILLING TO EVERY 2 MONTHS FOR ${ps.category}`;
    } else {
      notes += `\nProtocol stack: ${ps.name} — standard monthly billing for ${ps.category}`;
    }
  }
  return notes;
}

function buildInjectedScript(stateVal, notesStr, weight, feet, inches, weightLossGoal, protocolStack) {
  const safeState = stateVal.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  const safeNotes = notesStr.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");
  const safeGoal = (weightLossGoal || '').replace(/\\/g, "\\\\").replace(/'/g, "\\'");

  let popupCategory = '';
  let popupName = '';
  let popupMicro = false;
  if (protocolStack) {
    popupCategory = (protocolStack.category || '').replace(/'/g, "\\'");
    popupName = (protocolStack.name || '').replace(/'/g, "\\'");
    popupMicro = protocolStack.microdose === true;
  }

  const popupScript = protocolStack ? `
var _popupShown=false;
document.addEventListener('click',function(e){
  var btn=e.target.closest('.btn-continue');
  if(!btn||_popupShown)return;
  var step=document.querySelector('.step.active');
  if(!step||!step.querySelector('textarea'))return;
  e.preventDefault();e.stopPropagation();_popupShown=true;
  var ov=document.createElement('div');
  ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
  ov.innerHTML='<div style="background:#fff;border-radius:16px;max-width:420px;width:100%;padding:28px 24px;font-family:DM Sans,system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.3)">'
    +'<div style="font-size:20px;font-weight:600;color:#1a1a1a;margin-bottom:4px">Your Protocol Add-On</div>'
    +'<div style="font-size:14px;color:#888;margin-bottom:20px"><span style="text-decoration:underline;color:#16625F">On the next page, select <strong>${popupCategory}</strong> as an add-on item</span> to complete your protocol.</div>'
    +'<div style="padding:14px 16px;border-radius:12px;background:hsl(140 30% 97%);border:1px solid rgba(36,92,58,.15);margin-bottom:16px">'
    +'<div style="font-size:15px;font-weight:600;color:#1a1a1a">${popupName}</div>'
    +'<div style="font-size:13px;color:#666;margin-top:2px">${popupMicro?"Microdose protocol — billed every 2 months":"Standard monthly protocol"}</div>'
    +'</div>'
    +'<div style="padding:10px 14px;border-radius:10px;background:hsl(0 0% 97%);border:1px solid hsl(0 0% 90%);margin-bottom:20px;display:flex;align-items:center;justify-content:space-between">'
    +'<div><div style="font-size:12px;color:#888">Promo code — <strong style="color:#16625F">20% off</strong></div><div style="font-size:18px;font-weight:600;letter-spacing:1px;color:rgb(36,92,58)">PROTOCOL</div></div>'
    +'<button id="addon-popup-copy" style="padding:6px 14px;border-radius:8px;border:1px solid hsl(0 0% 85%);background:#fff;font-size:13px;font-weight:500;cursor:pointer;font-family:inherit">Copy</button>'
    +'</div>'
    +'<div style="font-size:13px;color:#888;margin-bottom:16px;text-align:center">Next step: upload your photo ID for verification</div>'
    +'<button id="addon-popup-go" style="width:100%;padding:14px;border-radius:12px;border:none;background:rgb(36,92,58);color:#fff;font-size:16px;font-weight:500;cursor:pointer;font-family:inherit">Got it, continue</button>'
    +'</div>';
  document.body.appendChild(ov);
  document.getElementById('addon-popup-copy').addEventListener('click',function(){navigator.clipboard.writeText('PROTOCOL');this.textContent='Copied!';});
  document.getElementById('addon-popup-go').addEventListener('click',function(){ov.remove();btn.click();});
},true);` : '';

  return `<script>(function(){function tryPrefill(){if(typeof answers==='undefined'||typeof showStep==='undefined'||typeof STEPS==='undefined'){setTimeout(tryPrefill,200);return}var notesIdx=STEPS.findIndex(function(s){return s.id.indexOf('note')!==-1});var notesId=STEPS[notesIdx]?STEPS[notesIdx].id:'patient-notes';answers['state']='${safeState}';answers['bmi']={weight:'${weight}',feet:'${feet}',inches:'${inches}'};answers['weight-loss-goal']='${safeGoal}';answers[notesId]='${safeNotes}';var _orig=showStep;window.showStep=function(n){_orig(n);if(n===notesIdx){setTimeout(function(){var ta=document.querySelector('.step.active textarea');if(ta){ta.value=answers[notesId];ta.dispatchEvent(new Event('input',{bubbles:true}))}},300)}};showStep(3)}tryPrefill();${popupScript}})()\x3c/script>`;
}

function OrbitIntake({ medication, slug, sessionData }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current || !sessionData) return;
    const url = `${ORBIT_BASE}/${slug}`;
    const notesStr = buildNotesString(sessionData);
    const script = buildInjectedScript(sessionData.state || "", notesStr, sessionData.weight || "", sessionData.feet || "", sessionData.inches || "", sessionData.weightLossGoal || "", sessionData.protocolStack || null);
    fetch(url).then(r => r.text()).then(html => {
      const baseTag = `<base href="${url}">`;
      let modified = html;
      if (modified.includes("<head>")) modified = modified.replace("<head>", `<head>${baseTag}`);
      else modified = baseTag + modified;
      if (modified.includes("</body>")) modified = modified.replace("</body>", `${script}\n</body>`);
      else modified = modified + script;
      const iframe = document.createElement("iframe");
      iframe.style.cssText = "width:100%;min-height:100vh;border:none;display:block;";
      iframe.srcdoc = modified;
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(iframe);
    }).catch(err => {
      if (containerRef.current) containerRef.current.innerHTML = `<div style="text-align:center;padding:40px;font-family:system-ui"><p style="font-size:16px;font-weight:600;color:#333;margin-bottom:8px">Unable to load intake form</p><p style="font-size:14px;color:#888;margin-bottom:20px">${err.message}</p><a href="${url}" target="_blank" rel="noopener noreferrer" style="font-size:14px;color:${PR};text-decoration:underline">Open form in new tab →</a></div>`;
    });
  }, [medication, slug, sessionData]);
  return (<div ref={containerRef} style={{ width: "100%", minHeight: "100vh" }}><div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, fontFamily: FB, gap: 12 }}><div style={{ width: 32, height: 32, border: "3px solid hsl(0 0% 90%)", borderTopColor: PR, borderRadius: "50%", animation: "tfSp .8s linear infinite" }}/><p style={{ fontSize: 14, color: "hsl(0 0% 50%)" }}>Loading health intake…</p><style>{`@keyframes tfSp{to{transform:rotate(360deg)}}`}</style></div></div>);
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
export default function TeleformProductInfo() {
  const [cached] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; }
  });
  useEffect(() => {
    if (!cached.medication || !cached.effectiveRoute) window.location.href = "/getpeptides/weight-loss/product";
  }, []);

  const bmi = cached.bmi || 30;
  const med = cached.medication || "semaglutide";
  const effRoute = cached.effectiveRoute || "injection";
  const isInj = effRoute === "injection";
  const isFirst = cached.priorGLP1 === "none";
  const isMicro = cached.microdose === true && isInj;
  const bmiTier = DT.find(t => bmi < t.max) || DT[3];
  const prog = Math.round((10 / 13) * 100);
  const proto = PROTO[med]?.[effRoute] || PROTO.semaglutide.injection;
  const hasAddons = isInj && !isMicro;

  const startStep = hasAddons ? 1 : 2;
  const [step, setStep] = useState(startStep);
  const [dStep, setDStep] = useState(startStep);
  const [anim, setAnim] = useState("idle");
  const [dir, setDir] = useState("forward");
  const [addon, setAddon] = useState(hasAddons ? null : "none");
  const [selIdx, setSelIdx] = useState(-1);
  const [stackId, setStackId] = useState(null);
  const [stackMicro, setStackMicro] = useState(true);
  const [showOrbit, setShowOrbit] = useState(false);

  const availAddons = useMemo(() => ADDONS.filter(a => a.meds.includes(med)), [med]);
  const availStacks = useMemo(() => STACKS.filter(s => s.glps.includes(med)), [med]);
  const selStack = useMemo(() => availStacks.find(s => s.id === stackId) || null, [availStacks, stackId]);

  /* ── Product filtering ── */
  const filteredProducts = useMemo(() => {
    if (!isMicro && addon === null) return [];
    let p = PRODUCTS.filter(x => x.med === med && x.route === effRoute);
    if (isMicro) {
      /* Microdose: only products whose doseTier is in MICRO_TIERS, deduped by doseTier (prefer addon=none) */
      p = p.filter(x => MICRO_TIERS[x.doseTier]);
      const seen = new Map();
      for (const x of p) { if (!seen.has(x.doseTier) || x.addon === "none") seen.set(x.doseTier, x); }
      p = Array.from(seen.values());
    } else if (hasAddons) {
      p = p.filter(x => x.addon === addon);
    } else {
      p = p.filter(x => x.addon === "none");
    }
    return p.sort((a, b) => a.mg - b.mg);
  }, [med, effRoute, addon, hasAddons, isMicro]);

  const recIdx = useMemo(() => {
    if (!filteredProducts.length) return 0;
    if (isFirst) return 0;
    return Math.floor(filteredProducts.length / 2);
  }, [filteredProducts, isFirst]);

  const selProduct = selIdx >= 0 && selIdx < filteredProducts.length ? filteredProducts[selIdx] : null;

  /* ── Nav with scroll-to-top ── */
  const nav = useCallback((s, d) => {
    if (anim !== "idle") return;
    setDir(d); setAnim("exit");
    setTimeout(() => {
      setDStep(s); setStep(s);
      window.scrollTo({ top: 0, behavior: "instant" });
      setTimeout(() => { setAnim("enter"); setTimeout(() => setAnim("idle"), 400); }, 50);
    }, 300);
  }, [anim]);
  const fwd = s => nav(s, "forward");
  const bwd = s => nav(s, "backward");
  const tc = () => {
    if (anim === "enter") return dir === "forward" ? "tf-ef" : "tf-eb";
    if (anim === "exit") return dir === "forward" ? "tf-xf" : "tf-xb";
    return "tf-idle";
  };

  /* ── Micro display helpers ── */
  const getMicroDisplayPrice = (price) => Math.round(price / 2);
  const getMicroDisplayDose = (doseTier) => {
    const m = doseTier.match(/([\d.]+)(mg\/wk)/);
    if (!m) return doseTier;
    return `${parseFloat(m[1]) / 2}mg/wk`;
  };

  /* ── Billing summary values ── */
  const billingGlpMonthly = selProduct ? (isMicro ? getMicroDisplayPrice(selProduct.price) : selProduct.price) : 0;
  const billingStackMonthly = selStack ? (stackMicro ? Math.round(selStack.price / 2) : selStack.price) : 0;
  const billingTotalMonthly = billingGlpMonthly + billingStackMonthly;
  const billingAnyBimonthly = isMicro || (selStack && stackMicro);
  const billingTotalCharge = (selProduct ? selProduct.price : 0) + (selStack ? selStack.price : 0);

  const saveAndContinue = () => {
    try {
      const d = JSON.parse(sessionStorage.getItem("tf_intake") || "{}");
      d.addon = addon;
      d.monthlyPrice = isMicro ? getMicroDisplayPrice(selProduct?.price || 0) : (selProduct?.price || 0);
      d.weight = cached.weight;
      d.feet = cached.feet;
      d.inches = cached.inches;
      d.weightLossGoal = cached.weightLossGoal;
      if (selProduct) {
        d.selectedProduct = {
          label: `${MED_NAMES[med]} ${selProduct.conc} ${selProduct.vol}${isMicro ? " [MICRODOSE]" : ""}`,
          conc: selProduct.conc, vol: selProduct.vol, mg: selProduct.mg,
          price: selProduct.price, addon: selProduct.addon, note: selProduct.note,
          slug: selProduct.slug, doseTier: selProduct.doseTier,
        };
      }
      if (selStack) {
        const microPrice = Math.round(selStack.price / 2);
        d.protocolStack = {
          id: selStack.id, peptide: selStack.peptide, name: selStack.name,
          category: selStack.category, price: selStack.price,
          microdose: stackMicro, displayPrice: stackMicro ? microPrice : selStack.price,
          billingNote: stackMicro ? `Billed every 2 months at $${selStack.price}` : "Billed monthly",
        };
      } else {
        d.protocolStack = null;
      }
      sessionStorage.setItem("tf_intake", JSON.stringify(d));
    } catch (e) { console.error(e); }
    setShowOrbit(true);
  };

  const orbitSessionData = useMemo(() => {
    if (!showOrbit) return null;
    try { return JSON.parse(sessionStorage.getItem("tf_intake") || "{}"); } catch { return {}; }
  }, [showOrbit]);

  if (showOrbit) {
    const slug = selProduct?.slug || med;
    return (<div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#fff" }}><style>{CSS}</style><OrbitIntake medication={med} slug={slug} sessionData={orbitSessionData}/></div>);
  }

  const rs = a => ({ display: "flex", alignItems: "flex-start", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${a ? PR : "hsl(0 0% 90%)"}`, backgroundColor: a ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s", position: "relative" });
  const ds = a => ({ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${a ? PR : "hsl(0 0% 85%)"}`, backgroundColor: a ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 });

  return (
    <div style={{ overflow: "hidden", position: "relative", fontFamily: FB, backgroundColor: "#fff", color: "hsl(0 0% 8.5%)" }}>
      <style>{CSS}</style>
      <div className={tc()} style={{ width: "100%", minHeight: "100vh" }}>

        {/* ── Step 1 — Add-on Selection (injection, non-microdose) ── */}
        {dStep === 1 && hasAddons && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => { window.location.href = "/getpeptides/weight-loss/product"; }} prog={prog}/>
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Customize your compound
                <Tip text="Add-ons are compounded into your injection vial at no change to your dosing schedule."/>
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 20 }}>Optional ingredients mixed into your {MED_NAMES[med]} vial</p>
              <IncludedBanner/>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {availAddons.map(a => (
                  <li key={a.id}><label onClick={() => { setAddon(a.id); setSelIdx(-1); }} style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${addon === a.id ? PR : "hsl(0 0% 90%)"}`, backgroundColor: addon === a.id ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s" }}>
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${addon === a.id ? PR : "hsl(0 0% 85%)"}`, backgroundColor: addon === a.id ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>{addon === a.id && <Chk c="#fff"/>}</span>
                    <div style={{ flexShrink: 0 }}>{AICONS[a.id]}</div>
                    <div style={{ flex: 1 }}><div style={{ display: "flex", alignItems: "center" }}><span style={{ fontFamily: FB, fontSize: 16, fontWeight: 600, color: "hsl(0 0% 8.5%)", lineHeight: 1.3 }}>{a.nm}</span><Tip text={a.tip}/></div><div style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "hsl(0 0% 45%)", marginTop: 2 }}>{a.desc}</div></div>
                  </label></li>
                ))}
              </ul>
              {bmi >= 35 && !addon && med !== "retatrutide" && (
                <div className="tf-fi" style={{ marginTop: 16, padding: "10px 14px", borderRadius: 12, backgroundColor: "hsl(0 0% 97%)", border: "1px solid hsl(0 0% 90%)" }}>
                  <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", lineHeight: "18px", margin: 0 }}>With a BMI of {bmi}, Vitamin B6 is recommended to help manage GI side effects during dose escalation.</p>
                </div>
              )}
            </main>
            <LF onClick={() => fwd(2)} disabled={addon === null}/>
          </div>
        )}

        {/* ── Step 2 — Product / Supply Selection ── */}
        {dStep === 2 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => { if (hasAddons) bwd(1); else window.location.href = "/getpeptides/weight-loss/product"; }} prog={prog}/>
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
                <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", margin: 0 }}>{isMicro ? "Choose your microdose" : "Choose your supply"}</h1>
                <span style={{ fontFamily: FB, fontSize: 22, fontWeight: 700, color: PR }}>{selProduct ? `$${isMicro ? getMicroDisplayPrice(selProduct.price) : selProduct.price}` : `$${isMicro ? (MICRO_PRICE_FROM[med] || 45) : (PRICE_FROM[med] || 90)}+`}<span style={{ fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)" }}>/mo</span></span>
              </div>
              {isMicro && <span style={{ display: "inline-block", fontSize: 10, fontWeight: 600, color: "#fff", backgroundColor: "#37B8D3", padding: "2px 8px", borderRadius: 9999, fontFamily: FB, marginBottom: 8 }}>MICRODOSING</span>}
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 4 }}>{MED_NAMES[med]} — {ROUTE_LABELS[effRoute]}{!isMicro && addon && addon !== "none" ? ` + ${ADDON_NAMES[addon]}` : ""}</p>
              <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 400, color: "hsl(0 0% 55%)", marginBottom: 20, lineHeight: "18px" }}>{isMicro ? "Half-dose protocol — same vial, billed every 2 months. Your effective weekly dose is shown below." : isFirst ? "As a first-time patient, we recommend starting with the lowest effective dose." : "All available strengths shown. Select based on your treatment phase."}</p>
              <ProtoCard proto={proto} route={effRoute}/>
              <DoseMeter bmi={bmi} selMg={selProduct?.mg ?? null} med={med} effRoute={effRoute}/>
              <p style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: "hsl(0 0% 35%)", marginBottom: 10 }}>{selProduct ? `$${isMicro ? getMicroDisplayPrice(selProduct.price) : selProduct.price}/mo${isMicro ? "*" : ""} subscription` : `From $${isMicro ? (MICRO_PRICE_FROM[med] || 45) : (PRICE_FROM[med] || 90)}/mo`}</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0, margin: 0 }}>
                {filteredProducts.map((p, i) => {
                  const sel = selIdx === i; const isRec = i === recIdx;
                  const displayPrice = isMicro ? getMicroDisplayPrice(p.price) : p.price;
                  const displayDose = isMicro ? getMicroDisplayDose(p.doseTier) : p.doseTier;
                  return (<li key={i}><label onClick={() => setSelIdx(i)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 12, border: `2px solid ${sel ? PR : "hsl(0 0% 90%)"}`, backgroundColor: sel ? "hsl(140 30% 94%)" : "hsl(0 0% 98%)", cursor: "pointer", transition: "all .2s" }}>
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${sel ? PR : "hsl(0 0% 85%)"}`, backgroundColor: sel ? PR : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>{sel && <Chk c="#fff"/>}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: FB, fontSize: 16, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{isMicro ? `${displayDose}` : `${p.conc} — ${p.vol}`}</span>
                        {isRec && <span style={{ fontSize: 10, fontWeight: 600, color: PR, backgroundColor: `${PR}15`, padding: "2px 7px", borderRadius: 9999, fontFamily: FB }}>{isFirst ? "Recommended starter" : "Recommended"}</span>}
                        {!isMicro && <Tip text={p.note}/>}
                      </div>
                      <div style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 50%)", marginTop: 3 }}>{isMicro ? `${p.conc} — ${p.vol} (half-dose)` : p.note}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 2 }}>
                        <span style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)" }}>{p.mg} mg total</span>
                        <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: PR }}>${displayPrice}/mo{isMicro ? "*" : ""}</span>
                      </div>
                    </div>
                  </label></li>);
                })}
              </ul>
              {isMicro && <p style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 12, lineHeight: "16px" }}>*Billed every 2 months at ${selProduct ? selProduct.price : "—"}. You use half the vial per month.</p>}
              <p style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: isMicro ? 8 : 16, lineHeight: "16px", marginBottom: 24 }}>Pricing includes medication, provider consultation{hasAddons ? ", and any selected add-on" : ""}. Your provider may adjust based on clinical response.</p>
            </main>
            <LF onClick={() => { if (isInj) fwd(3); else fwd(4); }} disabled={selIdx < 0} label={isInj ? "Continue" : "Review selection"}/>
          </div>
        )}

        {/* ── Step 3 — Protocol Pairing (injection only) ── */}
        {dStep === 3 && isInj && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => bwd(2)} prog={prog}/>
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>
                Pair a peptide with your {MED_NAMES[med]}
                <Tip text="Protocol stacks address common GLP-1 side effects and gaps. The peptide is a separate subscription — select it as an add-on during checkout."/>
              </h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 20 }}>
                Targeted peptides for common GLP-1 side effects and gaps
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {availStacks.map(s => {
                  const a = stackId === s.id;
                  const microPrice = Math.round(s.price / 2);
                  return (
                    <li key={s.id}>
                      <label onClick={() => { setStackId(s.id); setStackMicro(true); }} style={rs(a)}>
                        <span style={ds(a)}>{a && <Chk c="#fff"/>}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontFamily: FB, fontSize: 16, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{s.problem}</span>
                            <span style={{ fontSize: 10, fontWeight: 600, color: PR, backgroundColor: `${PR}15`, padding: "2px 7px", borderRadius: 9999, fontFamily: FB }}>Recommended</span>
                          </div>
                          <div style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 45%)", marginTop: 2 }}>{s.name} — {s.hook}</div>
                          <div style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)", marginTop: 1 }}>{s.why}</div>

                          {a && (
                            <div className="tf-fi" style={{ marginTop: 10, display: "flex", gap: 8 }}>
                              <button onClick={e => { e.stopPropagation(); setStackMicro(true); }} style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: `1.5px solid ${stackMicro ? PR : "hsl(0 0% 85%)"}`, backgroundColor: stackMicro ? "hsl(140 30% 94%)" : "transparent", cursor: "pointer", fontFamily: FB, fontSize: 12, fontWeight: 500, color: stackMicro ? PR : "hsl(0 0% 45%)", textAlign: "center" }}>
                                Microdose ${microPrice}/mo*
                              </button>
                              <button onClick={e => { e.stopPropagation(); setStackMicro(false); }} style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: `1.5px solid ${!stackMicro ? PR : "hsl(0 0% 85%)"}`, backgroundColor: !stackMicro ? "hsl(140 30% 94%)" : "transparent", cursor: "pointer", fontFamily: FB, fontSize: 12, fontWeight: 500, color: !stackMicro ? PR : "hsl(0 0% 45%)", textAlign: "center" }}>
                                Standard ${s.price}/mo
                              </button>
                            </div>
                          )}
                          {a && stackMicro && <div style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)", marginTop: 4 }}>*Billed every 2 months at ${s.price}</div>}

                          {!a && <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 600, color: PR, marginTop: 6 }}>Starting at ${microPrice}/mo*</div>}
                          {!a && <div style={{ fontFamily: FB, fontSize: 11, color: "hsl(0 0% 55%)", marginTop: 1 }}>*Microdose — billed every 2 months at ${s.price}</div>}
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>

              <button onClick={() => { setStackId(null); fwd(4); }} style={{ display: "block", margin: "20px auto 24px", padding: "8px 16px", border: "none", backgroundColor: "transparent", fontFamily: FB, fontSize: 14, fontWeight: 400, color: "hsl(0 0% 50%)", cursor: "pointer", textDecoration: "underline" }}>
                Skip — I just want {MED_NAMES[med]}
              </button>
            </main>
            <LF onClick={() => fwd(4)} disabled={!stackId} label="Review selection"/>
          </div>
        )}

        {/* ── Step 4 — Review ── */}
        {dStep === 4 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LH showBack onBack={() => { if (isInj) bwd(3); else bwd(2); }} prog={prog}/>
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FH, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-.01em", marginBottom: 6 }}>Your treatment selection</h1>
              <p style={{ fontFamily: FB, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 24 }}>Review before continuing to health intake</p>

              {selProduct && (
                <div className="tf-fi" style={{ padding: 20, borderRadius: 12, border: `1px solid ${PR}25`, backgroundColor: "hsl(140 30% 97%)", marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontFamily: FH, fontSize: 22, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{MED_NAMES[med]}</span>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontFamily: FB, fontSize: 22, fontWeight: 700, color: PR }}>${isMicro ? getMicroDisplayPrice(selProduct.price) : selProduct.price}</span>
                      <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 400, color: "hsl(0 0% 50%)", display: "block" }}>per month{isMicro ? "*" : ""}</span>
                    </div>
                  </div>
                  <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 500, color: PR, backgroundColor: `${PR}12`, padding: "3px 10px", borderRadius: 9999, display: "inline-block", marginBottom: 16 }}>{ROUTE_LABELS[effRoute]}</span>
                  {isMicro && <span style={{ fontFamily: FB, fontSize: 10, fontWeight: 600, color: "#fff", backgroundColor: "#37B8D3", padding: "2px 8px", borderRadius: 9999, marginLeft: 8 }}>MICRODOSE</span>}
                  <SR l="Concentration" v={selProduct.conc}/>
                  <SR l="Volume" v={selProduct.vol}/>
                  <SR l="Total medication" v={`${selProduct.mg} mg`}/>
                  {isMicro && <SR l="Effective weekly dose" v={getMicroDisplayDose(selProduct.doseTier)}/>}
                  {hasAddons && <SR l="Add-on" v={ADDON_NAMES[addon] || "None"}/>}
                  <SR l="Dosing tier" v={selProduct.doseTier !== "Flat" ? selProduct.doseTier : bmiTier.label}/>
                  <SR l="Your BMI" v={String(bmi)}/>
                  <SR l="Goal weight" v={cached.goalWeight ? `${cached.goalWeight} lbs` : "—"}/>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0 0" }}>
                    <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 400, color: "hsl(0 0% 45%)" }}>Supply</span>
                    <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>{selProduct.note}</span>
                  </div>
                  {isMicro && <div style={{ padding: "8px 0 0" }}><span style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)" }}>*Billed every 2 months at ${selProduct.price}</span></div>}
                </div>
              )}

              {/* Protocol Stack Review Card */}
              {selStack && (
                <div className="tf-fi" style={{ padding: 20, borderRadius: 12, border: `1px solid ${PR}25`, backgroundColor: "hsl(140 30% 97%)", marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontFamily: FH, fontSize: 18, fontWeight: 600, color: "hsl(0 0% 8.5%)" }}>Protocol Add-On</span>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontFamily: FB, fontSize: 22, fontWeight: 700, color: PR }}>${stackMicro ? Math.round(selStack.price / 2) : selStack.price}</span>
                      <span style={{ fontFamily: FB, fontSize: 12, fontWeight: 400, color: "hsl(0 0% 50%)", display: "block" }}>per month{stackMicro ? "*" : ""}</span>
                    </div>
                  </div>
                  <SR l="Peptide" v={selStack.name}/>
                  <SR l="Category" v={selStack.category}/>
                  <SR l="Dosing" v={stackMicro ? "Microdose protocol" : "Standard monthly"}/>
                  <SR l="Addresses" v={selStack.problem}/>
                  {stackMicro && (
                    <div style={{ padding: "8px 0 0" }}>
                      <span style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 55%)" }}>*Billed every 2 months at ${selStack.price}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Billing Summary */}
              {selProduct && (
                <div style={{ borderRadius: 12, border: `1.5px solid ${PR}30`, overflow: "hidden", marginBottom: 24 }}>
                  <div style={{ padding: "16px 16px 12px", backgroundColor: `${PR}08` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 500, color: "hsl(0 0% 35%)" }}>Due today</span>
                      <span style={{ fontFamily: FB, fontSize: 22, fontWeight: 700, color: PR }}>$0</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: FB, fontSize: 14, fontWeight: 500, color: "hsl(0 0% 35%)" }}>Billed upon physician approval</span>
                      <span style={{ fontFamily: FB, fontSize: 18, fontWeight: 700, color: "hsl(0 0% 8.5%)" }}>${billingTotalCharge}</span>
                    </div>
                  </div>
                  <div style={{ padding: "10px 16px", backgroundColor: "hsl(0 0% 98%)", borderTop: `1px solid ${PR}15` }}>
                    <span style={{ fontFamily: FB, fontSize: 12, color: "hsl(0 0% 50%)", lineHeight: "16px" }}>
                      {billingAnyBimonthly
                        ? `Effective $${billingTotalMonthly}/mo — billed every 2 months at $${billingTotalCharge}. No charge until your provider reviews and approves your treatment plan.`
                        : `$${billingTotalMonthly}/mo subscription. No charge until your provider reviews and approves your treatment plan.`
                      }
                    </span>
                  </div>
                </div>
              )}

              <DoseMeter bmi={bmi} selMg={selProduct?.mg ?? null} med={med} effRoute={effRoute}/>
              <ProtoCard proto={proto} route={effRoute}/>
              <p style={{ fontFamily: FB, fontSize: 13, color: "hsl(0 0% 55%)", lineHeight: "18px", marginBottom: 24 }}>Dosing starts conservatively and titrates up over 4–8 weeks based on tolerance. Your provider will adjust the schedule based on your response and complete health history.</p>
            </main>
            <LF onClick={saveAndContinue} disabled={selIdx < 0} label="Continue to health intake"/>
          </div>
        )}

      </div>
    </div>
  );
}