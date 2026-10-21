import { Button } from "@/components/ui/button";
import { NavigationAction } from "@/components/navigation-action";
import { useState } from "react";
import { useTextSetting, useNavigationSetting } from "@/lib/editable-settings";


/* ── Category Illustrations (240×140 SVGs) ── */

const CategoryIllustrations = {
  nad: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <ellipse cx="120" cy="70" rx="50" ry="30" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <ellipse cx="120" cy="70" rx="25" ry="15" stroke="#245C3A" strokeWidth="1.5" opacity="0.4" />
      <circle cx="120" cy="70" r="6" fill="#245C3A" opacity="0.15" />
      <path d="M70 70L50 50" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M170 70L190 50" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M70 70L50 90" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M170 70L190 90" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="50" cy="50" r="3" fill="#245C3A" opacity="0.2" /><circle cx="190" cy="50" r="3" fill="#245C3A" opacity="0.2" />
      <circle cx="50" cy="90" r="3" fill="#245C3A" opacity="0.2" /><circle cx="190" cy="90" r="3" fill="#245C3A" opacity="0.2" />
      <text x="120" y="74" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="700">NAD+</text>
      <text x="120" y="120" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Mitochondrial coenzyme</text>
    </svg>
  ),
  motsc: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <path d="M40 70L70 45L100 70L130 45L160 70" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="70" r="4" fill="#245C3A" opacity="0.3" /><circle cx="70" cy="45" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="100" cy="70" r="4" fill="#245C3A" opacity="0.3" /><circle cx="130" cy="45" r="4" fill="#245C3A" opacity="0.3" />
      <circle cx="160" cy="70" r="4" fill="#245C3A" opacity="0.3" />
      <path d="M160 70L192 70" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="210" cy="70" r="18" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="210" y="67" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="700">AMPK</text>
      <text x="210" y="77" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="500" opacity="0.5">activated</text>
      <text x="120" y="120" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">6 injectable blends + standalone</text>
    </svg>
  ),
  bpc: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <path d="M60 30C60 30 80 50 80 70C80 90 60 110 60 110" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M90 30C90 30 110 50 110 70C110 90 90 110 90 110" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M120 30C120 30 140 50 140 70C140 90 120 110 120 110" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
      <path d="M40 70H200" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 4" opacity="0.2" />
      <circle cx="170" cy="55" r="14" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
      <path d="M165 55L169 59L176 51" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="170" cy="85" r="14" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
      <path d="M165 85L169 89L176 81" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <text x="120" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Systemic repair peptide — 15 amino acids</text>
    </svg>
  ),
  tb500: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <circle cx="80" cy="70" r="25" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="80" cy="70" r="8" fill="#245C3A" opacity="0.1" />
      <path d="M105 70L145 70" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4" />
      <path d="M135 62L145 70L135 78" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <circle cx="170" cy="70" r="25" stroke="#245C3A" strokeWidth="2" />
      <circle cx="170" cy="70" r="8" fill="#245C3A" opacity="0.15" />
      <path d="M163 67L168 72L177 64" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <text x="80" y="110" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.4">Damaged</text>
      <text x="170" y="110" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="500" opacity="0.4">Repaired</text>
      <text x="125" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Cell migration and tissue repair</text>
    </svg>
  ),
  wolverine: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <circle cx="90" cy="60" r="22" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="90" y="57" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="700">BPC</text>
      <text x="90" y="67" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="500" opacity="0.5">157</text>
      <circle cx="150" cy="60" r="22" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <text x="150" y="57" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="700">TB</text>
      <text x="150" y="67" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="500" opacity="0.5">500</text>
      <path d="M112 60L128 60" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="120" cy="60" r="3" fill="#245C3A" opacity="0.2" />
      <path d="M120 82L120 100" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M116 96L120 102L124 96" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <text x="120" y="115" textAnchor="middle" fill="#245C3A" fontSize="8" fontWeight="600" opacity="0.5">VALKYR</text>
      <text x="120" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Dual-peptide repair — one vial</text>
    </svg>
  ),
  cjc: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <path d="M30 75C45 55 60 55 75 75C90 95 105 95 120 75" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M30 65C45 45 60 45 75 65C90 85 105 85 120 65" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M120 70L148 70" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4" />
      <path d="M140 64L148 70L140 76" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      <circle cx="175" cy="70" r="27" stroke="#245C3A" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="175" cy="70" r="10" fill="#245C3A" opacity="0.1" />
      <text x="175" y="68" textAnchor="middle" fill="#245C3A" fontSize="10" fontWeight="700">GH</text>
      <text x="175" y="78" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="500" opacity="0.5">pulse</text>
      <text x="55" y="110" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="500" opacity="0.4">CJC-1295</text>
      <text x="55" y="100" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="500" opacity="0.4">Ipamorelin</text>
      <text x="120" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Growth hormone axis — pulsatile release</text>
    </svg>
  ),
  glo: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <circle cx="120" cy="65" r="45" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.15" />
      <circle cx="120" cy="65" r="33" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.25" />
      <circle cx="120" cy="65" r="21" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      <circle cx="120" cy="65" r="9" fill="#245C3A" opacity="0.12" />
      <text x="120" y="68" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="700">GHK</text>
      <path d="M113 44L111 41" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <text x="104" y="39" textAnchor="middle" fill="#245C3A" fontSize="6" fontWeight="500" opacity="0.4">BPC</text>
      <path d="M127 44L129 41" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
      <text x="136" y="39" textAnchor="middle" fill="#245C3A" fontSize="6" fontWeight="500" opacity="0.4">TB</text>
      <path d="M141 65L145 65" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
      <text x="157" y="68" textAnchor="middle" fill="#245C3A" fontSize="6" fontWeight="500" opacity="0.4">Epitalon</text>
      <path d="M165 52L168 55L175 48" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <path d="M165 72L168 75L175 68" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <path d="M75 52L72 55L65 48" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <path d="M75 72L72 75L65 68" stroke="#245C3A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      <text x="120" y="128" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">4-peptide longevity stack</text>
    </svg>
  ),
  klow: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <circle cx="120" cy="40" r="14" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      <text x="120" y="43" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="600">BPC</text>
      <circle cx="160" cy="70" r="14" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      <text x="160" y="73" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="600">TB</text>
      <circle cx="120" cy="100" r="14" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      <text x="120" y="98" textAnchor="middle" fill="#245C3A" fontSize="6" fontWeight="600">GHK</text>
      <text x="120" y="106" textAnchor="middle" fill="#245C3A" fontSize="5" fontWeight="500" opacity="0.5">Cu</text>
      <circle cx="80" cy="70" r="14" stroke="#245C3A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      <text x="80" y="73" textAnchor="middle" fill="#245C3A" fontSize="7" fontWeight="600">KPV</text>
      <path d="M120 54L120 86" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M94 70L146 70" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      <path d="M107 51L93 63" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
      <path d="M133 51L147 63" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
      <path d="M93 77L107 89" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
      <path d="M147 77L133 89" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
      <circle cx="120" cy="70" r="5" fill="#245C3A" opacity="0.12" />
      <text x="120" y="130" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Quad-peptide reconstituted blend</text>
    </svg>
  ),
  sermorelin: () => (
    <svg width="240" height="140" viewBox="0 0 240 140" fill="none">
      <path d="M80 35C95 30 115 28 130 32C145 36 155 44 160 55C165 66 163 78 155 87C147 96 135 100 120 100C105 100 93 96 85 87C77 78 75 66 80 55" stroke="#245C3A" strokeWidth="2" opacity="0.2" />
      <path d="M85 87C90 82 100 80 120 80C140 80 150 82 155 87" stroke="#245C3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
      <path d="M55 62C65 68 75 58 85 64C95 70 105 60 115 66" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <text x="70" y="55" fill="#245C3A" fontSize="7" fontWeight="500" opacity="0.4">Semax</text>
      <path d="M125 66C135 60 145 70 155 64C165 58 175 68 185 62" stroke="#245C3A" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <text x="170" y="55" fill="#245C3A" fontSize="7" fontWeight="500" opacity="0.4">Selank</text>
      <path d="M85 72L155 72" stroke="#245C3A" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" opacity="0.15" />
      <text x="120" y="128" textAnchor="middle" fill="#245C3A" fontSize="9" fontWeight="500" opacity="0.5">Cognitive calm — dual nootropic</text>
    </svg>
  ),
};

/* ── Constants ── */


const CHECKOUT_URLS = {
  nad:        "https://onboard.myorbithealth.com/form/athos-wellness/nad",
  motsc:      "https://onboard.myorbithealth.com/form/athos-wellness/mots-c",
  bpc:        "https://onboard.myorbithealth.com/form/athos-wellness/bpc-157",
  tb500:      "https://onboard.myorbithealth.com/form/athos-wellness/tb-500",
  wolverine:  "https://onboard.myorbithealth.com/form/athos-wellness/wolverine",
  cjc:        "https://onboard.myorbithealth.com/form/athos-wellness/cjc-ipamorelin",
  glo:        "https://onboard.myorbithealth.com/form/athos-wellness/glo",
  klow:       "https://onboard.myorbithealth.com/form/athos-wellness/klow",
  sermorelin: "https://onboard.myorbithealth.com/form/athos-wellness/sermorelin",
};

const PROMO = {
  single: { code: "TRYUS", discount: 0.10, label: "10% off" },
  protocol: { code: "PROTOCOL", discount: 0.20, label: "20% off", minItems: 2 },
};

const ADDON_NAMES = {
  nad: "NAD+", motsc: "MOTS-c", bpc: "BPC-157", tb500: "TB-500",
  wolverine: "Wolverine", cjc: "CJC-1295/Ipamorelin", glo: "GLO Blend",
  klow: "KLOW Blend", sermorelin: "Sermorelin",
};

function buildPeptideNotes(cart, promoCode, promoLabel) {
  if (cart.length === 0) return "";
  var primary = cart[0];
  var pName = primary.productName || primary.categoryName || "";
  var pForm = primary.formName || primary.name || "";
  var pPrice = primary.micro ? "$" + (primary.displayPrice || Math.round(primary.msrp / 2)) + "/mo (billed every 2 months at $" + primary.msrp + ")" : "$" + primary.msrp + "/mo";
  var note = "Primary: " + pName + " " + pForm + " (" + primary.format + ") — " + pPrice;
  if (primary.micro) note += "\nMICRO-DOSE PROTOCOL — CHANGE BILLING TO EVERY 2 MONTHS";
  var addons = cart.slice(1);
  if (addons.length > 0) {
    note += "\nAdd-ons: " + addons.map(function(c) {
      var cName = c.productName || c.categoryName || "";
      var cForm = c.formName || c.name || "";
      var aPrice = c.micro ? "$" + (c.displayPrice || Math.round(c.msrp / 2)) + "/mo (billed every 2 months at $" + c.msrp + ")" : "$" + c.msrp + "/mo";
      return cName + " " + cForm + " (" + c.format + ") — " + aPrice + (c.micro ? " [MICRO-DOSE]" : "");
    }).join(", ");
  }
  note += "\nPromo code: " + promoCode + " (" + promoLabel + ")";
  return note;
}

function buildPeptideScript(notes, addonNames, promoCode, promoLabel) {
  var n = notes.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");
  var addonsHtml = "";
  if (addonNames.length > 0) {
    addonsHtml = addonNames.map(function(name) {
      return '<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(36,92,58,0.06);border-radius:8px;margin-bottom:6px"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7L6 10L11 4" stroke="#245C3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span style="font-size:14px;font-weight:500;color:#1a4d2e">' + name + '</span></div>';
    }).join("");
  }

  return '<script>(function(){' +
    'function tp(){if(typeof answers==="undefined"||typeof showStep==="undefined"||typeof STEPS==="undefined"){setTimeout(tp,200);return}' +
    'var ni=STEPS.findIndex(function(s){return s.id.indexOf("note")!==-1});var nid=STEPS[ni]?STEPS[ni].id:"patient-notes";' +
    'answers[nid]="' + n + '";' +
    'var _o=showStep;window.showStep=function(n){_o(n);if(n===ni){setTimeout(function(){var ta=document.querySelector(".step.active textarea");if(ta){ta.value=answers[nid];ta.dispatchEvent(new Event("input",{bubbles:true}))}},300)}}}' +
    'tp();' +
    'var _popupShown=false;' +
    'document.addEventListener("click",function(e){' +
      'var btn=e.target.closest(".btn-continue");' +
      'if(!btn||_popupShown)return;' +
      'if(!document.querySelector(".step.active")||document.querySelector(".step.active").textContent.indexOf("Off-Label")===-1)return;' +
      'e.preventDefault();e.stopPropagation();_popupShown=true;' +
      'var ov=document.createElement("div");' +
      'ov.style.cssText="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.4);font-family:DM Sans,system-ui,sans-serif";' +
      'ov.innerHTML=\'<div style="background:#fff;border-radius:16px;padding:28px 24px;max-width:380px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.2)">' +
        (addonNames.length > 0
          ? '<p style="font-size:18px;font-weight:700;color:#1a4d2e;margin:0 0 4px">Select these add-ons next</p>' +
            '<p style="font-size:13px;font-weight:600;color:#333;margin:0 0 16px"><strong>You must select these on the next page</strong> or your order may be delayed.</p>' +
            addonsHtml.replace(/'/g, "\\'")
          : '<p style="font-size:18px;font-weight:700;color:#1a4d2e;margin:0 0 4px">Don\\\'t forget your discount</p>' +
            '<p style="font-size:13px;font-weight:600;color:#333;margin:0 0 16px"><strong>Copy your promo code</strong> and apply it on the next page at checkout.</p>'
        ) +
        '<div style="margin-top:14px;padding:10px 12px;background:rgba(36,92,58,0.06);border-radius:8px;display:flex;align-items:center;justify-content:space-between">' +
          '<span style="font-size:13px;color:#1a4d2e">Promo code: <strong>' + promoCode + '</strong> (' + promoLabel + ')</span>' +
          '<span id="addon-popup-copy" style="font-size:12px;color:#245C3A;font-weight:600;cursor:pointer;padding:4px 10px;background:rgba(36,92,58,0.1);border-radius:6px">Copy</span>' +
        '</div>' +
        '<button id="addon-popup-go" style="width:100%;margin-top:16px;padding:14px;border-radius:10px;border:none;background:#245C3A;color:#fff;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit">Got it — continue →</button>' +
      '</div>\';' +
      'document.body.appendChild(ov);' +
      'document.getElementById("addon-popup-copy").addEventListener("click",function(){navigator.clipboard.writeText("' + promoCode + '");this.textContent="Copied!";setTimeout(function(){document.getElementById("addon-popup-copy").textContent="Copy"},2000)});' +
      'document.getElementById("addon-popup-go").addEventListener("click",function(){ov.remove();btn.click()});' +
    '},true);' +
    '})()\x3c/script>';
}


/* ── Category Data ── */

const categoryData = {
  nad: {
    name: "NAD+",
    tag: "Coenzyme",
    msrp: 170,
    oneLiner: "Foundational energy, mitochondrial health, anti-aging.",
    formats: ["Injectable", "Oral", "Nasal", "Topical", "Troche", "RDT"],
    mechanism: "NAD+ is a coenzyme in every living cell — it drives mitochondrial energy production, DNA repair, and sirtuin activation. Levels decline ~50% between ages 40 and 60. Supplementation restores cellular energy capacity and supports metabolic resilience across every organ system.",
    formulations: [
      { format: "Injectable", name: "100mg/ml", who: "Any patient. Universal standalone or add-on", use: "Foundational energy, mitochondrial support. 100mg SubQ 2–3×/week" },
      { format: "Injectable", name: "200mg/ml", who: "Patients preferring minimal injection volume", use: "Same protocol, half the volume per dose" },
      { format: "Injectable", name: "Lyophilized", who: "Purity-focused, longevity protocols", use: "Highest purity. Reconstituted fresh before use" },
      { format: "Injectable", name: "Aqueous", who: "Convenience preference", use: "Pre-mixed. Slightly different absorption profile" },
      { format: "Injectable", name: "Limitless (custom)", who: "Flexible dosing under provider direction", use: "Provider-customized strength via Partell" },
      { format: "Injectable", name: "Liquid Olympia", who: "Cost-sensitive patients", use: "Standard 100mg/ml. Alternative source" },
      { format: "Troche", name: "200 / 300 / 400mg", who: "Needle-averse, daily maintenance", use: "Sublingual. No needle. Daily convenience" },
      { format: "Oral", name: "Capsule 200mg", who: "Simplest oral protocol", use: "Swallowed daily. Most convenient format" },
      { format: "Oral", name: "Capsule +B12+Caffeine", who: "Fatigue, AM productivity", use: "Energy stack in a single capsule" },
      { format: "Oral", name: "Capsule +Sermorelin+B12", who: "Anti-aging, body comp, sleep goals", use: "NAD+ + GH secretagogue + B12 in one cap" },
      { format: "RDT", name: "+Sermorelin", who: "Longevity-focused, GH support without injection", use: "Dissolving tablet. NAD+ + GH axis stimulation" },
      { format: "Nasal", name: "Spray 100mg/ml", who: "Needle-averse, travel-friendly, cognitive focus", use: "Systemic NAD+. Daily nasal delivery" },
      { format: "Nasal", name: "Spray 300mg/ml", who: "Experienced users wanting stronger nasal dose", use: "High-concentration. Faster saturation" },
      { format: "Nasal", name: "Pump 50mg/ml", who: "New to NAD+, sensitive patients", use: "Low-dose daily. Entry-level nasal" },
      { format: "Topical", name: "Cream 10% 30ml", who: "Anti-aging skin, adjunct to injectable", use: "Topical NAD+. Dermatological benefit" },
    ],
  },
  motsc: {
    name: "MOTS-c",
    tag: "Mitochondrial",
    msrp: 230,
    oneLiner: "Mitochondrial metabolic peptide — standalone or 5 targeted blends.",
    formats: ["Injectable"],
    mechanism: "MOTS-c is a mitochondrial-derived peptide that activates AMPK — the same metabolic switch triggered by exercise. Available standalone or in 5 targeted blends that pair MOTS-c with compounds for a specific goal. All injectable-only for 100% bioavailability. Single subcutaneous injection, daily AM fasted.",
    formulations: [
      { format: "Injectable", name: "Standalone 10mg/5ml", who: "MOTS-c monotherapy, metabolic support", use: "Pure MOTS-c. AMPK activation without blend compounds" },
      { format: "Injectable", name: "Adonix", who: "Weight loss — GH + fat oxidation + MOTS-c", use: "Tesa/Ipa/AOD/MOTS-c. Metabolic acceleration + fat loss" },
      { format: "Injectable", name: "Empress", who: "Women 35+ — hormonal, skin, metabolic, libido", use: "MOTS-c/BPC/GHK-Cu/Kisspeptin. Longevity + vitality" },
      { format: "Injectable", name: "Lucid", who: "Brain fog, focus, anxiety, cognitive decline", use: "Semax/Selank/MOTS-c/Tesa. Cognitive + metabolic" },
      { format: "Injectable", name: "Kali", who: "Weight loss with GI sensitivity, aggressive fat loss", use: "BPC/MOTS-c/5-Amino/Tesa. Fat loss + gut protection" },
      { format: "Injectable", name: "Inferno", who: "Body recomp, fat loss stacking with GLP-1", use: "AOD/CJC/Ipa/MOTS-c. Maximum fat oxidation + GH pulse" },
    ],
  },
  bpc: {
    name: "BPC-157",
    tag: "Repair",
    msrp: 170,
    oneLiner: "Systemic tissue repair, GI healing, anti-inflammatory.",
    formats: ["Injectable", "Oral", "Nasal"],
    mechanism: "BPC-157 is a 15-amino-acid peptide derived from human gastric juice. It accelerates tissue repair — tendons, ligaments, gut lining, and muscle — by upregulating growth factor expression and angiogenesis. Systemically anti-inflammatory with a strong GI-protective profile.",
    formulations: [
      { format: "Injectable", name: "2mg/ml 5ml", who: "General recovery, GI support, systemic use", use: "Daily SubQ. 500mcg/day standard" },
      { format: "Injectable", name: "3mg/ml 3ml or 5ml", who: "Mid-range dosing, 30-day supply", use: "Moderate concentration. Standard dose" },
      { format: "Injectable", name: "5mg/ml 2ml or 3ml", who: "Experienced users, acute injury protocol", use: "Higher concentration, smaller volume draws" },
      { format: "Injectable", name: "MDV (GrandAve)", who: "Clinic dispensing, provider-administered", use: "Multi-dose vial. Higher purity standard" },
      { format: "Oral", name: "Capsule 500mcg ×44", who: "IBS, leaky gut, GLP-1 GI side effects", use: "GI-targeted. Capsule acts locally in gut. 22-day supply" },
      { format: "Nasal", name: "Spray 2.5mg/ml 15ml", who: "Needle-averse, systemic inflammation", use: "Daily nasal. Systemic + upper GI delivery" },
      { format: "Injectable", name: "→ Wolverine Blend", who: "Want BPC-157 + TB-500 in one vial?", use: "See Wolverine Blend — dual-peptide convenience. Valkyr 2/2mg/ml", crossRef: "wolverine" },
    ],
  },
  tb500: {
    name: "TB-500",
    tag: "Recovery",
    msrp: 150,
    oneLiner: "Cell migration, deep tissue repair, post-surgical recovery.",
    formats: ["Injectable"],
    mechanism: "TB-500 (Thymosin Beta-4 fragment) promotes cell migration and differentiation — the mechanism your body uses to move repair cells to damaged tissue. It reduces inflammation, promotes angiogenesis, and accelerates recovery from injury, surgery, or chronic tissue damage. 750mcg–2mg SubQ 1–2×/week.",
    formulations: [
      { format: "Injectable", name: "2mg/ml 5ml", who: "Injury recovery, chronic inflammation, post-surgical", use: "Standalone systemic repair. 750mcg–2mg SubQ 1–2×/week" },
      { format: "Injectable", name: "→ Wolverine Blend", who: "Want BPC-157 + TB-500 in one vial?", use: "See Wolverine Blend — dual-peptide convenience. Valkyr 2/2mg/ml", crossRef: "wolverine" },
    ],
  },
  wolverine: {
    name: "Wolverine Blend",
    tag: "Dual Repair",
    msrp: 180,
    oneLiner: "BPC-157 + TB-500 — local and systemic healing in one vial.",
    formats: ["Injectable"],
    mechanism: "The Wolverine Blend (Valkyr) combines BPC-157's tissue-specific repair with TB-500's systemic cell migration in a single injectable. BPC-157 upregulates growth factors at the injury site while TB-500 recruits repair cells from distant tissue. Protocol: 500mcg BPC + 750mcg TB daily SubQ, 4–8 weeks on, 30-day washout.",
    formulations: [
      { format: "Injectable", name: "Valkyr 2/2mg/ml 5ml", who: "Injury recovery, post-surgical, athletes, chronic inflammation", use: "Dual-peptide convenience. BPC + TB in one vial. 4–8 week cycles" },
    ],
  },
  cjc: {
    name: "CJC-1295/Ipamorelin",
    tag: "GH Axis",
    msrp: 160,
    oneLiner: "Pulsatile growth hormone release — recovery, sleep, body composition.",
    formats: ["Injectable"],
    mechanism: "CJC-1295 extends growth hormone releasing hormone half-life while Ipamorelin triggers clean GH pulses without cortisol or prolactin spikes. Together they restore the natural GH rhythm that declines with age — improving deep sleep, recovery, lean mass, and fat metabolism. SubQ before bed, 5 days on / 2 off.",
    formulations: [
      { format: "Injectable", name: "Prometheus 12/24 5ml", who: "Standard GH protocol, body comp + recovery", use: "CJC 12mg/Ipa 24mg per vial. Evening SubQ" },
      { format: "Injectable", name: "Prometheus 6/12 5ml", who: "Lower-dose entry, sensitive patients", use: "CJC 6mg/Ipa 12mg per vial. Half-strength" },
      { format: "Injectable", name: "Atlas ⚠", who: "Advanced — GH + IGF + Tesa stack", use: "CJC/Ipa/Tesa/IGF-1. Body recomp. Exception pricing" },
      { format: "Injectable", name: "Hypnos ⚠", who: "Sleep + anxiolytic + GH", use: "DSIP/Selank/CJC/Ipa. Deep sleep + calm + GH pulse. Exception pricing" },
    ],
  },
  glo: {
    name: "GLO Blend",
    tag: "Longevity",
    msrp: 190,
    oneLiner: "Fountain of Youth — GHK-Cu, BPC, TB-500, Epitalon in one vial.",
    formats: ["Injectable"],
    mechanism: "The GLO Blend (Fountain of Youth) stacks four longevity peptides: GHK-Cu for collagen remodeling and skin repair, BPC-157 for systemic tissue healing, TB-500 for cell migration, and Epitalon for telomerase activation. A single daily SubQ injection targeting aging at four distinct biological levels.",
    formulations: [
      { format: "Injectable", name: "FOY 50/10/10/10 5ml", who: "Anti-aging, skin quality, systemic repair, longevity", use: "GHK-Cu 50mg/BPC 10mg/TB 10mg/Epitalon 10mg. Daily SubQ" },
    ],
  },
  klow: {
    name: "KLOW Blend",
    tag: "Quad-Peptide",
    msrp: 199,
    oneLiner: "BPC + TB + GHK-Cu + KPV — maximum repair stack, custom order.",
    formats: ["Injectable"],
    mechanism: "KLOW combines four repair and anti-inflammatory peptides in a single 503A reconstituted vial: BPC-157 for tissue-specific healing, TB-500 for systemic cell migration, GHK-Cu for collagen and copper-dependent repair, and KPV for potent anti-inflammatory action. Custom order through provider. 80mg/5ml concentration.",
    formulations: [
      { format: "Injectable", name: "80mg/5ml (custom order)", who: "Complex injury, post-surgical, autoimmune inflammation", use: "BPC+TB+GHK-Cu+KPV. 503A reconstituted. Provider must order" },
    ],
  },
  sermorelin: {
    name: "Sermorelin",
    tag: "Neuroactive",
    msrp: 165,
    oneLiner: "GH-releasing peptide — currently available as Kalm (Semax/Selank).",
    formats: ["Injectable"],
    mechanism: "Sermorelin is a growth hormone releasing hormone analog. The Kalm blend pairs Semax (BDNF expression, cognitive processing) with Selank (GABA modulation, anxiolytic calm without sedation). Together they sharpen focus and reduce anxiety simultaneously. 5mg/5ml SubQ or intranasal, daily AM.",
    formulations: [
      { format: "Injectable", name: "Kalm 5mg/5ml", who: "Brain fog, anxiety, cognitive decline, stress", use: "Semax/Selank blend. Daily SubQ AM. Cognitive + anxiolytic" },
    ],
  },
};

/* ── Brand Tokens ── */
var G = "#245C3A";
var GD = "#1a4d2e";
var FF = "'DM Serif Display', Georgia, serif";
var FB = "'DM Sans', system-ui, sans-serif";

var productKeys = ["bpc", "tb500", "wolverine", "nad", "motsc", "cjc", "glo", "klow", "sermorelin"];
var groupMap = { bpc: "recovery", tb500: "recovery", wolverine: "recovery", nad: "longevity", motsc: "longevity", cjc: "longevity", glo: "longevity", klow: "longevity", sermorelin: "longevity" };

/* ── Component ── */
export default function Block() {
  var [filter, setFilter] = useState("all");
  var [detail, setDetail] = useState(null);
  var [bag, setBag] = useState([]);
  var [bagOpen, setBagOpen] = useState(false);
  var [codeCopied, setCodeCopied] = useState(false);
  var [loading, setLoading] = useState(false);
  var [microMode, setMicroMode] = useState({});

  var headline = useTextSetting({ name: "headline", label: "Headline", initialValue: "Your protocol,\nbuilt here." });
  var ctaText = useTextSetting({ name: "cta-text", label: "CTA Text", initialValue: "Get Started for $0" });
  var ctaLink = useNavigationSetting({ name: "cta-link", label: "CTA Link", initialValue: { destination: "/sign-up", openIn: "SELF" } });

  var filtered = filter === "all" ? productKeys : productKeys.filter(function(k) { return groupMap[k] === filter; });

  var getPromo = function() { return bag.length >= 2 ? PROMO.protocol : PROMO.single; };
  var getSubtotal = function() { return bag.reduce(function(s, c) { return s + (c.displayPrice || c.msrp); }, 0); };
  var getTotal = function() { return Math.round(getSubtotal() * (1 - getPromo().discount)); };
  var copyCode = function() { navigator.clipboard.writeText(getPromo().code).then(function() { setCodeCopied(true); setTimeout(function() { setCodeCopied(false); }, 2000); }).catch(function() {}); };

  var addToBag = function(productId, formIndex) {
    setBag(function(prev) {
      var cat = categoryData[productId];
      if (!cat) return prev;
      var form = cat.formulations[formIndex];
      if (!form || form.crossRef) return prev;
      var isMicro = form.format === "Injectable" && microMode[productId];
      var displayPrice = isMicro ? Math.round(cat.msrp / 2) : cat.msrp;
      var newItem = { productId: productId, formIndex: formIndex, productName: cat.name, formName: form.name, format: form.format, msrp: cat.msrp, displayPrice: displayPrice, micro: isMicro, use: form.use, who: form.who };
      var exact = prev.find(function(c) { return c.productId === productId && c.formIndex === formIndex && c.micro === isMicro; });
      if (exact) return prev.filter(function(c) { return !(c.productId === productId && c.formIndex === formIndex && c.micro === isMicro); });
      var idx = prev.findIndex(function(c) { return c.productId === productId; });
      if (idx >= 0) { var u = prev.slice(); u[idx] = newItem; return u; }
      return prev.concat([newItem]);
    });
  };

  var removeFromBag = function(idx) { setBag(function(prev) { return prev.filter(function(_, i) { return i !== idx; }); }); };
  var isInBag = function(pid, fi) { return bag.some(function(c) { return c.productId === pid && c.formIndex === fi; }); };
  var productInBag = function(pid) { return bag.some(function(c) { return c.productId === pid; }); };

  var handleCheckout = function() {
    if (bag.length === 0 || loading) return;
    setLoading(true);
    var primaryKey = bag[0].productId;
    var url = CHECKOUT_URLS[primaryKey];
    var promo = getPromo();
    var notes = buildPeptideNotes(bag, promo.code, promo.label);
    var addonNames = bag.slice(1).filter(function(c) { return c.productId !== primaryKey; }).map(function(c) { return ADDON_NAMES[c.productId] || c.productName; });
    try { sessionStorage.setItem("tf_intake", JSON.stringify({ peptide: primaryKey, effectiveRoute: "injection", quickCheckout: true, promoCode: promo.code, subtotal: getSubtotal(), estimatedTotal: getTotal(), checkoutNotes: notes, selectedProducts: bag.map(function(c) { return { label: c.productName + " " + c.formName, format: c.format, category: c.productId, msrp: c.msrp }; }) })); } catch (e) {}
    var sc = buildPeptideScript(notes, addonNames, promo.code, promo.label);
    var banner = '<div style="position:sticky;top:0;z-index:9999;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 20px;background:#f5f2ed;border-bottom:1px solid rgba(36,92,58,0.12);font-family:DM Sans,system-ui,sans-serif;font-size:14px;color:#1a4d2e">Apply code <span style="font-weight:700;background:rgba(36,92,58,0.1);padding:2px 8px;border-radius:4px">' + promo.code + '</span> for ' + promo.label + '</div>';
    fetch(url).then(function(r) { return r.text(); }).then(function(html) {
      var bt = '<base href="' + url + '">'; var m = html;
      m = m.indexOf("<head>") !== -1 ? m.replace("<head>", "<head>" + bt) : bt + m;
      m = m.indexOf("<body>") !== -1 ? m.replace("<body>", "<body>" + banner) : m;
      m = m.indexOf("</body>") !== -1 ? m.replace("</body>", sc + "\n</body>") : m + sc;
      window.top.location.href = URL.createObjectURL(new Blob([m], { type: "text/html" }));
    }).catch(function() { window.top.location.href = url; });
  };

  var detailCat = detail ? categoryData[detail] : null;
  var DetailIllustration = detail ? CategoryIllustrations[detail] : null;

  return (
    <div style={{ fontFamily: FB, backgroundColor: "#fff", color: GD }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');`}</style>
      <div className="container">
        <div className="content">

          {/* ── Hero ── */}
          <div style={{ padding: "48px 0 32px", textAlign: "center" }}>
            <h1 style={{ fontFamily: FF, fontSize: 42, fontWeight: 600, lineHeight: 1.15, color: GD, letterSpacing: "-0.02em", margin: "0 0 12px", whiteSpace: "pre-line" }}>{headline}</h1>
            <p style={{ fontSize: 16, color: "#888", margin: 0 }}>Clinical-grade peptides. One provider. Ships to your door.</p>
          </div>

          {/* ── Category Tabs ── */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", padding: "0 0 32px" }}>
            {[["all", "All"], ["recovery", "Recovery"], ["longevity", "Longevity"]].map(function(t) {
              var active = filter === t[0];
              return <button key={t[0]} onClick={function() { setFilter(t[0]); }} style={{ fontFamily: FB, fontSize: 13, fontWeight: 600, padding: "8px 20px", borderRadius: 9999, border: "none", cursor: "pointer", transition: "all 0.2s", backgroundColor: active ? GD : "transparent", color: active ? "#fff" : "#888" }}>{t[1]}</button>;
            })}
          </div>

          {/* ── Promo Banner ── */}
          {bag.length > 0 && (
            <div onClick={copyCode} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 16px", borderRadius: 12, marginBottom: 20, backgroundColor: G + "08", border: "1px solid " + G + "15", cursor: "pointer" }}>
              <span style={{ fontSize: 13, color: GD, fontWeight: 500 }}>{bag.length >= 2 ? <><strong>20% off</strong> — protocol discount</> : <><strong>10% off</strong> — add another for 20%</>}</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 6, backgroundColor: G + "15", color: G, letterSpacing: "0.05em" }}>{getPromo().code}</span>
              <span style={{ fontSize: 11, color: codeCopied ? G : "#999", fontWeight: codeCopied ? 600 : 400 }}>{codeCopied ? "Copied" : "Copy"}</span>
            </div>
          )}

          {/* ── Product Grid ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, paddingBottom: 48 }}>
            {filtered.map(function(key) {
              var cat = categoryData[key];
              var inBag = productInBag(key);
              var Illust = CategoryIllustrations[key];
              var nonCrossRefCount = cat.formulations.filter(function(f) { return !f.crossRef; }).length;
              return (
                <div key={key} style={{ borderRadius: 16, padding: 24, backgroundColor: inBag ? G + "08" : "#FAFAF8", border: "1px solid " + (inBag ? G + "25" : "rgba(0,0,0,0.06)"), cursor: "pointer", transition: "all 0.25s ease", position: "relative" }}
                  onMouseOver={function(e) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; }}
                  onMouseOut={function(e) { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                  {/* Microdose badge */}
                  {cat.formats.includes("Injectable") && (
                    <span style={{ position: "absolute", top: -9, right: 12, fontSize: 10, fontWeight: 600, color: "#fff", backgroundColor: "#37B8D3", padding: "2px 8px", borderRadius: 9999, fontFamily: FB }}>NEW Microdosing</span>
                  )}
                  <div onClick={function() { setDetail(key); }}>
                    {/* Illustration */}
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 12, opacity: 0.85 }}>
                      {Illust && <Illust />}
                    </div>
                    {/* Tags */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 9999, backgroundColor: G + "12", color: G }}>{cat.tag}</span>
                      {cat.formats.map(function(f) { return <span key={f} style={{ fontSize: 9, color: "#bbb", fontWeight: 500 }}>{f}</span>; })}
                    </div>
                    {/* Name + Description */}
                    <div style={{ fontFamily: FF, fontSize: 20, fontWeight: 600, color: GD, margin: "4px 0", lineHeight: 1.2 }}>{cat.name}</div>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5, margin: "0 0 16px" }}>{cat.oneLiner}</p>
                  </div>
                  {/* Price + Add */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ fontSize: 20, fontWeight: 700, color: G }}>${cat.msrp}</span><span style={{ fontSize: 13, fontWeight: 400, color: "#999" }}>/mo</span>
                      {cat.formats.includes("Injectable") && <div style={{ fontSize: 11, color: "#37B8D3", fontWeight: 500 }}>From ${Math.round(cat.msrp / 2)}/mo*</div>}
                    </div>
                    <button onClick={function(e) { e.stopPropagation(); if (nonCrossRefCount === 1) { addToBag(key, 0); } else { setDetail(key); } }}
                      style={{ fontFamily: FB, fontSize: 13, fontWeight: 600, padding: "8px 20px", borderRadius: 10, border: "none", cursor: "pointer", backgroundColor: inBag ? GD : G + "12", color: inBag ? "#fff" : G, transition: "all 0.2s" }}>
                      {inBag ? "✓ In Bag" : nonCrossRefCount === 1 ? "+ Add" : "Select"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <div style={{ textAlign: "center", padding: "16px 0 48px" }}>
            <Button asChild size="lg" className="text-white hover:opacity-90 shadow-sm px-10 py-6 rounded-md font-semibold" style={{ backgroundColor: G }}>
              <NavigationAction navigation={ctaLink}>{ctaText}</NavigationAction>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Product Detail Sheet ── */}
      {detailCat && DetailIllustration && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, backgroundColor: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end", justifyContent: "center", fontFamily: FB }} onClick={function() { setDetail(null); }}>
          <div style={{ backgroundColor: "#fff", borderRadius: "24px 24px 0 0", width: "100%", maxWidth: 520, maxHeight: "85vh", overflow: "auto", padding: "32px 24px 24px" }} onClick={function(e) { e.stopPropagation(); }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: FF, fontSize: 24, fontWeight: 600, color: GD }}>{detailCat.name}</span>
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 9999, backgroundColor: G + "12", color: G }}>{detailCat.tag}</span>
                </div>
                <div><span style={{ fontSize: 22, fontWeight: 700, color: G }}>${detailCat.msrp}</span><span style={{ fontSize: 14, color: "#999" }}>/mo</span></div>
              </div>
              <button onClick={function() { setDetail(null); }} style={{ width: 36, height: 36, borderRadius: "50%", border: "none", backgroundColor: "rgba(0,0,0,0.06)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#555" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </button>
            </div>
            {/* Illustration */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><DetailIllustration /></div>
            {/* Available formats */}
            <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
              {detailCat.formats.map(function(f) { return <span key={f} style={{ fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 9999, backgroundColor: G + "10", color: G }}>{f}</span>; })}
            </div>

            {/* Microdose toggle — injectable formulations only */}
            {detailCat.formats.includes("Injectable") && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 0, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <button onClick={function() { setMicroMode(function(p) { var n = Object.assign({}, p); n[detail] = false; return n; }); }}
                    style={{ flex: 1, padding: "10px 16px", border: "none", cursor: "pointer", fontFamily: FB, fontSize: 13, fontWeight: 600,
                      backgroundColor: !microMode[detail] ? GD : "#fff", color: !microMode[detail] ? "#fff" : "#888", transition: "all 0.2s" }}>
                    Standard ${detailCat.msrp}/mo
                  </button>
                  <button onClick={function() { setMicroMode(function(p) { var n = Object.assign({}, p); n[detail] = true; return n; }); }}
                    style={{ flex: 1, padding: "10px 16px", border: "none", cursor: "pointer", fontFamily: FB, fontSize: 13, fontWeight: 600, position: "relative",
                      backgroundColor: microMode[detail] ? "#37B8D3" : "#fff", color: microMode[detail] ? "#fff" : "#888", transition: "all 0.2s" }}>
                    Microdose ${Math.round(detailCat.msrp / 2)}/mo*
                  </button>
                </div>
                {microMode[detail] && <p style={{ fontSize: 11, color: "#37B8D3", fontWeight: 500, margin: "6px 0 0", textAlign: "right" }}>*Billed every 2 months at ${detailCat.msrp}</p>}
                {!microMode[detail] && <span style={{ position: "absolute", top: -1, right: -1 }}></span>}
              </div>
            )}
            {/* Mechanism */}
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 20 }}>{detailCat.mechanism}</p>

            {/* Discount banner — visible during browsing */}
            {bag.length > 0 && (
              <div onClick={copyCode} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: 10, marginBottom: 16, backgroundColor: bag.length >= 2 ? G + "08" : "#16625F0A", border: "1px solid " + (bag.length >= 2 ? G + "15" : "#16625F15"), cursor: "pointer" }}>
                <span style={{ fontSize: 12, color: GD, fontWeight: 500 }}>{bag.length >= 2 ? <><strong>20% off</strong> — protocol discount applied</> : <><strong>10% off</strong> — add another item for 20%</>}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 6, backgroundColor: G + "12", color: G, letterSpacing: "0.05em" }}>{getPromo().code}</span>
                  <span style={{ fontSize: 10, color: codeCopied ? G : "#bbb", fontWeight: codeCopied ? 600 : 400 }}>{codeCopied ? "Copied" : "Copy"}</span>
                </div>
              </div>
            )}

            {/* Formulations */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: G, letterSpacing: "0.04em", margin: 0 }}>SELECT FORMULATION</p>
              {bag.length === 0 && <p style={{ fontSize: 11, color: "#bbb", margin: 0 }}>Tap to add to your bag</p>}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {detailCat.formulations.map(function(form, i) {
                var isCrossRef = !!form.crossRef;
                var active = !isCrossRef && isInBag(detail, i);
                if (isCrossRef) {
                  return (
                    <div key={i} onClick={function() { setDetail(form.crossRef); }} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", backgroundColor: "#FAFAF8", cursor: "pointer" }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: G }}>{form.name}</span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3.5 2L7 5L3.5 8" stroke={G} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  );
                }
                return (
                  <div key={i} onClick={function() { addToBag(detail, i); }} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12, border: "2px solid " + (active ? G : "rgba(0,0,0,0.08)"), backgroundColor: active ? G + "06" : "#fff", cursor: "pointer", transition: "all 0.2s" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", border: "2px solid " + (active ? G : "#ccc"), backgroundColor: active ? G : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {active && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6L5.5 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: GD }}>{form.name}</span>
                        <span style={{ fontSize: 10, fontWeight: 500, padding: "2px 8px", borderRadius: 9999, backgroundColor: G + "10", color: G }}>{form.format}</span>
                      </div>
                      <p style={{ fontSize: 12, color: "#555", margin: "3px 0 0", lineHeight: 1.4 }}>{form.use}</p>
                      <p style={{ fontSize: 11, color: "#999", margin: "2px 0 0" }}>{form.who}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Bottom action */}
            {productInBag(detail) ? (
              <button onClick={function() { setDetail(null); setBagOpen(true); }} style={{ width: "100%", padding: 16, borderRadius: 12, border: "none", backgroundColor: GD, color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: FB }}>View Bag →</button>
            ) : (
              <button onClick={function() { var firstNonRef = detailCat.formulations.findIndex(function(f) { return !f.crossRef; }); if (firstNonRef >= 0) addToBag(detail, firstNonRef); }}
                style={{ width: "100%", padding: 16, borderRadius: 12, border: "none", backgroundColor: microMode[detail] ? "#37B8D3" : G, color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: FB }}>
                {microMode[detail] ? "Add to Bag — $" + Math.round(detailCat.msrp / 2) + "/mo*" : "Add to Bag — $" + detailCat.msrp + "/mo"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Bag Drawer ── */}
      {bagOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1001, fontFamily: FB }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)" }} onClick={function() { setBagOpen(false); }} />
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "100%", maxWidth: 380, backgroundColor: "#fff", display: "flex", flexDirection: "column", boxShadow: "-8px 0 40px rgba(0,0,0,0.1)", zIndex: 1 }}>
            {/* Drawer Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              <span style={{ fontFamily: FF, fontSize: 20, fontWeight: 600, color: GD }}>Your Bag</span>
              <button onClick={function() { setBagOpen(false); }} style={{ width: 36, height: 36, borderRadius: "50%", border: "none", backgroundColor: "rgba(0,0,0,0.06)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#555" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </button>
            </div>
            {/* Drawer Body */}
            <div style={{ flex: 1, overflow: "auto", padding: "16px 24px" }}>
              {bag.length === 0 && <div style={{ textAlign: "center", padding: "60px 0" }}><p style={{ fontSize: 14, color: "#999" }}>Your bag is empty</p></div>}
              {bag.map(function(item, idx) {
                var isPrimary = idx === 0;
                return (
                  <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 4, backgroundColor: isPrimary ? G : "#16625F15", color: isPrimary ? "#fff" : "#16625F" }}>{isPrimary ? "Primary" : "Add-on"}</span>
                        {item.micro && <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 4, backgroundColor: "#37B8D3", color: "#fff" }}>MICRODOSE</span>}
                        <span style={{ fontSize: 14, fontWeight: 600, color: GD }}>{item.productName}</span>
                      </div>
                      <span style={{ fontSize: 12, color: "#888" }}>{item.formName} · {item.format}</span>
                      {item.micro && <p style={{ fontSize: 10, color: "#37B8D3", fontWeight: 500, margin: "2px 0 0" }}>Billed every 2 months at ${item.msrp}</p>}
                      <p style={{ fontSize: 11, color: "#aaa", margin: "2px 0 0", lineHeight: 1.3 }}>{item.use}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, marginLeft: 12 }}>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: GD }}>${item.displayPrice || item.msrp}</span>
                        {item.micro && <div style={{ fontSize: 10, color: "#999" }}>/mo*</div>}
                      </div>
                      <button onClick={function() { removeFromBag(idx); }} style={{ width: 24, height: 24, borderRadius: "50%", border: "none", backgroundColor: "rgba(0,0,0,0.05)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7 3L3 7M3 3L7 7" stroke="#999" strokeWidth="1.3" strokeLinecap="round" /></svg>
                      </button>
                    </div>
                  </div>
                );
              })}
              {bag.length > 0 && (
                <div style={{ marginTop: 20, padding: 16, borderRadius: 12, backgroundColor: "#FAFAF8" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: "#888" }}>Subtotal</span>
                    <span style={{ fontSize: 13, color: "#555" }}>${getSubtotal()}/mo</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 13, color: G, fontWeight: 500 }}>{getPromo().code} ({getPromo().label})</span>
                    <span style={{ fontSize: 13, color: G, fontWeight: 500 }}>-${getSubtotal() - getTotal()}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: GD }}>Total</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: GD }}>${getTotal()}/mo</span>
                  </div>
                </div>
              )}
              {bag.length > 0 && (
                <div onClick={copyCode} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, padding: "10px 12px", borderRadius: 10, backgroundColor: G + "08", cursor: "pointer" }}>
                  <span style={{ fontSize: 12, color: GD }}>Promo: <strong>{getPromo().code}</strong></span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: codeCopied ? G : "#999", padding: "3px 8px", borderRadius: 6, backgroundColor: G + "10" }}>{codeCopied ? "Copied!" : "Copy"}</span>
                </div>
              )}
            </div>
            {/* Drawer Footer */}
            {bag.length > 0 && (
              <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <button onClick={handleCheckout} disabled={loading} style={{ width: "100%", padding: 16, borderRadius: 12, border: "none", backgroundColor: loading ? "#ccc" : G, color: "#fff", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", fontFamily: FB, transition: "all 0.2s" }}>
                  {loading ? "Loading checkout..." : "Checkout — $" + getTotal() + "/mo"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Floating Cart Icon ── */}
      {!bagOpen && !detail && (
        <div onClick={function() { setBagOpen(true); }} style={{ position: "fixed", top: 90, right: 20, display: "flex", alignItems: "center", gap: 10, padding: bag.length > 0 ? "12px 18px" : "12px", borderRadius: 9999, backgroundColor: bag.length > 0 ? GD : "#fff", color: bag.length > 0 ? "#fff" : GD, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", zIndex: 100, fontFamily: FB, border: bag.length > 0 ? "none" : "1px solid rgba(0,0,0,0.08)" }}>
          <div style={{ position: "relative" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6V20C3 21.1 4 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 6H21" strokeLinecap="round" /><path d="M16 10C16 12.2 14.2 14 12 14C9.8 14 8 12.2 8 10" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {bag.length > 0 && <div style={{ position: "absolute", top: -6, right: -8, width: 16, height: 16, borderRadius: "50%", backgroundColor: bag.length > 0 ? "#fff" : G, color: bag.length > 0 ? GD : "#fff", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{bag.length}</div>}
          </div>
          {bag.length > 0 && <span style={{ fontSize: 14, fontWeight: 700 }}>${getTotal()}/mo</span>}
        </div>
      )}
    </div>
  );
}