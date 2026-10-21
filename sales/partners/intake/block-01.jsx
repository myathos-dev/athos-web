import { useState, useCallback, useEffect } from "react";

/*
  Submit: pass an `onCreate` prop — async (fields) => save the partner to your backend.
  fields uses the keys of `fields` below (same columns the Softr partners table had).
  On success the page goes to /partners/intake/complete. Without onCreate, submit shows an
  error and nothing is saved.
*/

const STATES = [
  {name:"Alabama",abbr:"AL",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Alabama.svg"},
  {name:"Alaska",abbr:"AK",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Alaska.svg"},
  {name:"Arizona",abbr:"AZ",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Arizona.svg"},
  {name:"Arkansas",abbr:"AR",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Arkansas.svg"},
  {name:"California",abbr:"CA",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_California.svg"},
  {name:"Colorado",abbr:"CO",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colorado.svg"},
  {name:"Connecticut",abbr:"CT",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Connecticut.svg"},
  {name:"Delaware",abbr:"DE",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Delaware.svg"},
  {name:"Florida",abbr:"FL",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Florida.svg"},
  {name:"Georgia",abbr:"GA",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_State_of_Georgia.svg"},
  {name:"Hawaii",abbr:"HI",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Hawaii.svg"},
  {name:"Idaho",abbr:"ID",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Idaho.svg"},
  {name:"Illinois",abbr:"IL",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Illinois.svg"},
  {name:"Indiana",abbr:"IN",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Indiana.svg"},
  {name:"Iowa",abbr:"IA",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iowa.svg"},
  {name:"Kansas",abbr:"KS",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kansas.svg"},
  {name:"Kentucky",abbr:"KY",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kentucky.svg"},
  {name:"Louisiana",abbr:"LA",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Louisiana.svg"},
  {name:"Maine",abbr:"ME",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Maine.svg"},
  {name:"Maryland",abbr:"MD",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Maryland.svg"},
  {name:"Massachusetts",abbr:"MA",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Massachusetts.svg"},
  {name:"Michigan",abbr:"MI",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Michigan.svg"},
  {name:"Minnesota",abbr:"MN",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Minnesota.svg"},
  {name:"Mississippi",abbr:"MS",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mississippi.svg"},
  {name:"Missouri",abbr:"MO",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Missouri.svg"},
  {name:"Montana",abbr:"MT",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Montana.svg"},
  {name:"Nebraska",abbr:"NE",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Nebraska.svg"},
  {name:"Nevada",abbr:"NV",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Nevada.svg"},
  {name:"New Hampshire",abbr:"NH",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_Hampshire.svg"},
  {name:"New Jersey",abbr:"NJ",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_Jersey.svg"},
  {name:"New Mexico",abbr:"NM",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_Mexico.svg"},
  {name:"New York",abbr:"NY",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_York.svg"},
  {name:"North Carolina",abbr:"NC",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_North_Carolina.svg"},
  {name:"North Dakota",abbr:"ND",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_North_Dakota.svg"},
  {name:"Ohio",abbr:"OH",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ohio.svg"},
  {name:"Oklahoma",abbr:"OK",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Oklahoma.svg"},
  {name:"Oregon",abbr:"OR",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Oregon.svg"},
  {name:"Pennsylvania",abbr:"PA",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Pennsylvania.svg"},
  {name:"Rhode Island",abbr:"RI",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Rhode_Island.svg"},
  {name:"South Carolina",abbr:"SC",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Carolina.svg"},
  {name:"South Dakota",abbr:"SD",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Dakota.svg"},
  {name:"Tennessee",abbr:"TN",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tennessee.svg"},
  {name:"Texas",abbr:"TX",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Texas.svg"},
  {name:"Utah",abbr:"UT",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Utah.svg"},
  {name:"Vermont",abbr:"VT",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Vermont.svg"},
  {name:"Virginia",abbr:"VA",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Virginia.svg"},
  {name:"Washington",abbr:"WA",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Washington.svg"},
  {name:"West Virginia",abbr:"WV",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_West_Virginia.svg"},
  {name:"Wisconsin",abbr:"WI",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Wisconsin.svg"},
  {name:"Wyoming",abbr:"WY",flag:"https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Wyoming.svg"},
];

const IC = {
  zelle:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M16 8L8 16"/><path d="M8 8h8"/><path d="M8 16h8"/></svg>,
  paypal:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M7 21l1.5-9h7c3 0 5.5-2.5 5-5.5S18 2 15 2H8.5a1 1 0 00-1 .8L4 21h3z"/><path d="M10 14l-.5 3h5c2.5 0 4.5-2 4-4.5s-2.5-3.5-5-3.5h-3"/></svg>,
  ach:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M12 3l9 7H3l9-7z"/><path d="M5 10v11"/><path d="M19 10v11"/><path d="M9 10v11"/><path d="M15 10v11"/></svg>,
  person:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"/><path d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
  building:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/><path d="M9 7h1"/><path d="M14 7h1"/><path d="M9 11h1"/><path d="M14 11h1"/><path d="M9 15h1"/><path d="M14 15h1"/><path d="M10 21v-4h4v4"/></svg>,
  tag:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5"/></svg>,
  dollar:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  megaphone:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
};

const BASE_DOCS = [
  {label:"Master Services Agreement",url:"/legal/partners/msa",badge:"Core Agreement",badgeColor:"blue"},
  {label:"Disclosure Agreement",url:"/legal/partners/disclosure",badge:"Required Disclosure",badgeColor:"blue"},
  {label:"Compliance Policy",url:"/legal/partners/compliance",badge:"Regulatory",badgeColor:"blue"},
  {label:"Privacy Policy",url:"/legal/partners/privacy",badge:"Data Protection",badgeColor:"blue"},
  {label:"Terms of Service",url:"/legal/partners/terms",badge:"Platform Terms",badgeColor:"blue"},
  {label:"FMV Certification",url:"/legal/partners/fmv-certification",badge:"Compensation",badgeColor:"blue"},
  {label:"Cash Pay Policy",url:"/legal/partners/cash-pay-policy",badge:"Billing",badgeColor:"blue"},
];
const PRIVACY_ADD={label:"State Privacy Addendum",url:"/legal/partners/privacy#state-addendum",stateSpecific:true,badgeColor:"amber"};
const ADD_1={label:"Anti-Kickback / Fee-Splitting Addendum",url:"/legal/partners/addendum-1",stateSpecific:true,badgeColor:"amber"};
const ADD_2={label:"Enhanced Compliance Certification",url:"/legal/partners/addendum-2",stateSpecific:true,badgeColor:"amber"};
const CFG={1:{docs:[]},2:{docs:[PRIVACY_ADD]},3:{docs:[ADD_1]},4:{docs:[ADD_1],flatFee:true},5:{docs:[PRIVACY_ADD,ADD_1]},6:{docs:[PRIVACY_ADD,ADD_1],flatFee:true},7:{docs:[ADD_2]},8:{docs:[PRIVACY_ADD,ADD_2]}};
const ST_CFG={AL:1,AK:1,AR:1,IN:1,IA:1,LA:1,ME:1,MA:1,MS:1,MO:1,NH:1,ND:1,PA:1,RI:1,SC:1,SD:1,VT:1,WV:1,WY:1,CT:2,OR:2,UT:2,DE:3,FL:3,IL:3,MI:3,NJ:3,NC:3,NY:3,TN:4,CA:5,TX:5,VA:6,AZ:7,GA:7,HI:7,ID:7,KS:7,KY:7,MD:7,MN:7,NE:7,NV:7,NM:7,OH:7,OK:7,WA:7,WI:7,CO:8,MT:8};
const getDocsForState=(abbr)=>{const c=ST_CFG[abbr]||1,e=CFG[c];return{docs:[...BASE_DOCS,...e.docs],flatFee:!!e.flatFee};};
const CAT_MAP={influencer:"influencer",gym_owner:"gym",chiropractor:"chiro",personal_trainer:"trainer",med_spa:"medspa"};
const INDUSTRIES = [
  {id:"influencer",label:"Influencer / Content Creator",sub:"Social media, YouTube, podcasts, newsletters"},
  {id:"gym",label:"Gym / Studio Owner",sub:"CrossFit, Pilates, yoga, boutique fitness"},
  {id:"chiro",label:"Chiropractor / Clinical Practice",sub:"Chiropractic, PT, functional medicine"},
  {id:"trainer",label:"Personal Trainer / Coach",sub:"1:1 coaching, online training, bootcamps"},
  {id:"medspa",label:"Med Spa / Wellness Center",sub:"Aesthetics, IV therapy, wellness clinics"},
];
const PAY_TYPES=[{id:"Zelle",label:"Zelle",icon:IC.zelle},{id:"Paypal",label:"PayPal",icon:IC.paypal},{id:"ACH",label:"ACH",icon:IC.ach}];
const PAY_PH={Zelle:"Zelle email or phone number",Paypal:"PayPal email address",ACH:"Bank name + last 4 of account #"};
const OTHER_CHANNELS=[
  {id:"facebook",label:"Facebook"},{id:"tiktok",label:"TikTok"},{id:"youtube",label:"YouTube"},
  {id:"snapchat",label:"Snapchat"},{id:"reddit",label:"Reddit"},{id:"emails",label:"Emails"},{id:"other",label:"Other"},
];

const P="rgb(36, 92, 58)",BRAND="Athos",STEPS=8,FH="'DM Serif Display', Georgia, serif",FB="'DM Sans', system-ui, sans-serif";
/* Softr field IDs (legacy reference) */
const fields = ({
  Name:"JvUHo",Industry:"OajlM",Phone:"rgLvM",Email:"1vUbv",Promo_Code:"V0SUU",TOS_Agreed:"t7Bxk",
  Payment_Method:"w0ld4",Payment_type:"k7zMW",State:"9Hvui",EIN:"GMXQD",Company_Contact:"thhU4",
  Instagram_Username:"mj9Qg",Instagram_Followers:"OkxRW",Other_Social_Channels:"gnYZq",Commission:"R6wiI",
});

const css=`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
@keyframes tfSIR{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}
@keyframes tfSOL{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}
@keyframes tfSIL{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}
@keyframes tfSOR{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}
.tf-ef{animation:tfSIR .4s cubic-bezier(.16,1,.3,1) forwards}
.tf-xf{animation:tfSOL .3s cubic-bezier(.7,0,.84,0) forwards}
.tf-eb{animation:tfSIL .4s cubic-bezier(.16,1,.3,1) forwards}
.tf-xb{animation:tfSOR .3s cubic-bezier(.7,0,.84,0) forwards}
.tf-i{opacity:1;transform:translateX(0)}
@keyframes tfFI{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.tf-fi{animation:tfFI .4s cubic-bezier(.16,1,.3,1) forwards}
@keyframes tfFo{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.tf-fa{animation:tfFo .35s cubic-bezier(.16,1,.3,1) forwards}
@keyframes tfMI{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
.tf-modal{animation:tfMI .3s cubic-bezier(.16,1,.3,1) forwards}`;

const ChkI=({c})=><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>;
const Arrow=({d})=>(<svg width={d==="back"?14:16} height={d==="back"?14:16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d={d==="back"?"M15 19l-7-7 7-7":"M9 5l7 7-7 7"}/></svg>);
const inp={width:"100%",fontFamily:FB,fontSize:18,fontWeight:500,padding:16,borderRadius:12,border:"2px solid hsl(0 0% 90%)",backgroundColor:"#fff",color:"hsl(0 0% 8.5%)",outline:"none",transition:"border-color .2s",boxSizing:"border-box"};
const inpSm={...inp,fontSize:16,padding:"12px 14px"};
const focH=(e)=>(e.target.style.borderColor=P);
const blurH=(e)=>(e.target.style.borderColor="hsl(0 0% 90%)");
const BADGE_S={blue:{bg:"hsl(210 100% 96%)",color:"hsl(210 70% 35%)",border:"1px solid hsl(210 60% 85%)"},amber:{bg:"hsl(30 100% 95%)",color:"hsl(25 80% 40%)",border:"1px solid hsl(30 80% 85%)"}};
const DocBadge=({text,color})=>{const s=BADGE_S[color]||BADGE_S.blue;return<span style={{fontFamily:FB,fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:9999,backgroundColor:s.bg,color:s.color,border:s.border,whiteSpace:"nowrap"}}>{text}</span>;};
const fmtFD=(val)=>{if(!val)return"";const n=parseInt(val.replace(/,/g,""),10);if(isNaN(n))return val;if(n>=1e6)return`${(n/1e6).toFixed(n%1e6===0?0:1)}M`;if(n>=1e3)return`${(n/1e3).toFixed(n%1e3===0?0:1)}k`;return String(n);};
const fmtNC=(val)=>{const d=val.replace(/\D/g,"");if(!d)return"";return Number(d).toLocaleString("en-US");};

const Hdr=({pct,showBack,onBack})=>(
  <header style={{position:"sticky",top:0,zIndex:10,maxWidth:520,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",backgroundColor:"#fff",borderBottom:"1px solid hsl(0 0% 90%)"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"16px 20px",position:"relative"}}>
      {showBack&&<button onClick={onBack} style={{position:"absolute",left:20,display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:9999,border:"1px solid hsl(0 0% 90%)",backgroundColor:"transparent",color:"hsl(0 0% 8.5%)",fontSize:14,cursor:"pointer",fontFamily:FB}}><Arrow d="back"/>Back</button>}
      <span style={{fontSize:28,fontWeight:600,color:P,fontFamily:FH}}>{BRAND}</span>
    </div>
    <div style={{padding:"0 20px 16px"}}><div style={{width:"100%",height:12,borderRadius:9999,backgroundColor:"hsl(0 0% 96.5%)",overflow:"hidden"}}><div style={{width:`${pct}%`,height:"100%",borderRadius:9999,backgroundColor:P,transition:"width .4s ease"}}/></div></div>
  </header>);
const Ftr=({onClick,disabled,label})=>(
  <footer className="tf-fa" style={{position:"sticky",bottom:0,maxWidth:520,width:"100%",margin:"auto auto 0",padding:"16px 20px",backgroundColor:"#fff",borderTop:"1px solid hsl(0 0% 90%)"}}>
    <button onClick={onClick} disabled={disabled} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8,fontFamily:FB,fontSize:16,fontWeight:500,padding:16,borderRadius:12,border:"none",backgroundColor:!disabled?P:"hsl(0 0% 96.5%)",color:!disabled?"#fff":"hsl(0 0% 55%)",cursor:!disabled?"pointer":"not-allowed",transition:"background-color .3s, color .3s"}}>{label||"Continue"}<Arrow d="fwd"/></button>
  </footer>);
const Title=({t,s})=>(<><h1 style={{fontFamily:FH,fontSize:24,fontWeight:600,lineHeight:"30px",marginBottom:6}}>{t}</h1><p style={{fontFamily:FB,fontSize:16,color:"hsl(0 0% 45%)",marginBottom:24}}>{s}</p></>);
const Lbl=({children})=><label style={{fontFamily:FB,fontSize:14,fontWeight:500,color:"hsl(0 0% 45%)",marginBottom:8,display:"block"}}>{children}</label>;
const Crd=({sel,onClick,label,sub,icon})=>(<li><label onClick={onClick} style={{display:"flex",alignItems:"center",gap:14,padding:16,borderRadius:12,border:`2px solid ${sel?P:"hsl(0 0% 90%)"}`,backgroundColor:sel?P:"hsl(0 0% 98%)",color:sel?"#fff":"hsl(0 0% 8.5%)",cursor:"pointer",transition:"all .2s"}}><span style={{flexShrink:0,width:24,height:24,borderRadius:"50%",border:`2px solid ${sel?"#fff":"hsl(0 0% 85%)"}`,backgroundColor:sel?"#fff":"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>{sel&&<ChkI c={P}/>}</span>{icon&&<span style={{display:"flex",alignItems:"center",color:sel?"#fff":"hsl(0 0% 45%)"}}>{icon}</span>}<div style={{flex:1}}><span style={{fontFamily:FB,fontSize:17,fontWeight:500,display:"block"}}>{label}</span>{sub&&<span style={{fontFamily:FB,fontSize:13,opacity:.7}}>{sub}</span>}</div></label></li>);
const Row=({l,v})=>(<div style={{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid hsl(0 0% 93%)"}}><span style={{fontFamily:FB,fontSize:14,color:"hsl(0 0% 45%)"}}>{l}</span><span style={{fontFamily:FB,fontSize:15,fontWeight:600,textAlign:"right",maxWidth:"60%"}}>{v||"—"}</span></div>);
const Shell=({children})=><div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>{children}</div>;
const Main=({children})=><main style={{maxWidth:520,width:"100%",margin:"0 auto",flex:1,padding:"24px 20px 0"}}>{children}</main>;
const Col=({gap,children})=><div style={{display:"flex",flexDirection:"column",gap}}>{children}</div>;
const List=({children})=><ul style={{display:"flex",flexDirection:"column",gap:10,listStyle:"none",padding:0,margin:0}}>{children}</ul>;

/* ── Toast (stand-in for sonner, which Softr mounted) ─────── */
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

export default function PartnerIntakeForm({ onCreate }){
  const [step,setStep]=useState(1);const [dStep,setDStep]=useState(1);const [anim,setAnim]=useState("idle");const [dir,setDir]=useState("forward");
  const [name,setName]=useState("");const [phone,setPhone]=useState("");const [email,setEmail]=useState("");
  const [selState,setSelState]=useState(null);const [stSrch,setStSrch]=useState("");
  const [industry,setIndustry]=useState(null);const [showCatList,setShowCatList]=useState(false);
  const [entityType,setEntityType]=useState("individual");const [ein,setEin]=useState("");const [companyContact,setCompanyContact]=useState("");
  const [payType,setPayType]=useState(null);const [payMethod,setPayMethod]=useState("");const [promo,setPromo]=useState("");
  const [igUser,setIgUser]=useState("");const [igCount,setIgCount]=useState("");
  const [selCh,setSelCh]=useState(new Set());const [chData,setChData]=useState({});
  const [modalUrl,setModalUrl]=useState(null);const [modalTitle,setModalTitle]=useState("");
  const [openedDocs,setOpenedDocs]=useState(new Set());const [agreedDocs,setAgreedDocs]=useState(new Set());

  useEffect(()=>{try{const raw=sessionStorage.getItem("athos_partner");if(!raw)return;const d=JSON.parse(raw);if(d.timestamp&&Date.now()-d.timestamp>30*60*1000)return;if(d.category&&CAT_MAP[d.category])setIndustry(CAT_MAP[d.category]);}catch{}},[]);

  const commRate=entityType==="company"?30:20;const isCo=entityType==="company";const indObj=INDUSTRIES.find(i=>i.id===industry);
  const stLegal=selState?getDocsForState(selState):{docs:[],flatFee:false};
  const allAgreed=stLegal.docs.length>0&&agreedDocs.size===stLegal.docs.length;
  const openDoc=(doc)=>{setModalUrl(doc.url);setModalTitle(doc.label);setOpenedDocs(p=>new Set(p).add(doc.url));};
  const toggleAgree=(url)=>{if(!openedDocs.has(url))return;setAgreedDocs(p=>{const n=new Set(p);n.has(url)?n.delete(url):n.add(url);return n;});};
  const einOk=(v)=>/^\d{2}-\d{7}$/.test(v);
  const fmtEin=(e)=>{let v=e.target.value.replace(/\D/g,"").slice(0,9);if(v.length>2)v=v.slice(0,2)+"-"+v.slice(2);setEin(v);};
  const s4Ok=industry&&(entityType==="individual"||(einOk(ein)&&companyContact.trim()));
  const s5Ok=igUser.trim()&&igCount.trim();

  const toggleCh=(id)=>{setSelCh(p=>{const n=new Set(p);if(n.has(id)){n.delete(id);setChData(d=>{const c={...d};delete c[id];return c;});}else{n.add(id);setChData(d=>({...d,[id]:{username:"",followers:""}}));}return n;});};
  const setChF=(id,f,v)=>setChData(p=>({...p,[id]:{...p[id],[f]:v}}));
  const buildOC=()=>{if(selCh.size===0)return"";return OTHER_CHANNELS.filter(c=>selCh.has(c.id)).map(c=>{const d=chData[c.id]||{};const u=d.username||"";const f=fmtFD(d.followers||"");const pts=[c.label];if(u)pts.push(c.id==="emails"?u:`@${u}`);if(f)pts.push(`${f} Followers`);return pts.join(" | ");}).join("\n");};
  const ocSummary=OTHER_CHANNELS.filter(c=>selCh.has(c.id)).map(c=>c.label).join(", ");

  /* was Softr useRecordCreate */
  const [createStatus,setCreateStatus]=useState("idle");
  const createRecord={status:createStatus,mutate:(data)=>{setCreateStatus("pending");Promise.resolve().then(()=>{if(!onCreate)throw new Error("No onCreate handler — partner was not saved");return onCreate(data);}).then(()=>{setCreateStatus("success");toast.success("Partner created successfully!");window.location.href="/partners/intake/complete";},(err)=>{setCreateStatus("error");toast.error("Failed to create record",{description:err.message});});}};

  const nav=useCallback((ns,d)=>{if(anim!=="idle")return;setDir(d);setAnim("exit");setTimeout(()=>{setDStep(ns);setStep(ns);setTimeout(()=>{setAnim("enter");setTimeout(()=>setAnim("idle"),400);},50);},300);},[anim]);
  const fwd=(s)=>nav(s,"forward");const bwd=(s)=>nav(s,"backward");
  const tc=()=>{if(anim==="enter")return dir==="forward"?"tf-ef":"tf-eb";if(anim==="exit")return dir==="forward"?"tf-xf":"tf-xb";return"tf-i";};
  const pct=Math.round((step/STEPS)*100);
  const emOk=(v)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);const phOk=(v)=>v.replace(/\D/g,"").length===10;
  const fmtPh=(e)=>{let v=e.target.value.replace(/\D/g,"").slice(0,10);if(v.length>=7)v=`(${v.slice(0,3)}) ${v.slice(3,6)}-${v.slice(6)}`;else if(v.length>=4)v=`(${v.slice(0,3)}) ${v.slice(3)}`;else if(v.length>=1)v=`(${v}`;setPhone(v);};
  const filtered=STATES.filter(s=>s.name.toLowerCase().includes(stSrch.toLowerCase()));
  const stObj=STATES.find(s=>s.abbr===selState);const stName=stObj?stObj.name:null;

  const handleSubmit=()=>{
    if(!name.trim()){toast.error("Please enter a name");return;}
    if(!promo.trim()){toast.error("Please enter a promo code");return;}
    if(!payMethod.trim()){toast.error("Please enter payment details");return;}
    if(!allAgreed){toast.error("Please agree to all required documents");return;}
    createRecord.mutate({
      Name:name.trim(),Industry:industry,Phone:phone.trim(),Email:email.trim(),
      Promo_Code:promo.trim(),TOS_Agreed:true,Payment_Method:payMethod.trim(),
      Payment_type:payType,State:stName,EIN:isCo?ein.trim():"",
      Company_Contact:isCo?companyContact.trim():"",
      Instagram_Username:igUser.trim(),
      Instagram_Followers:igCount.replace(/,/g,""),
      Other_Social_Channels:buildOC(),
      Commission:commRate,
    });
  };
  const pending=createRecord.status==="pending";

  return(
    <div style={{overflow:"hidden",fontFamily:FB,backgroundColor:"#fff",color:"hsl(0 0% 8.5%)"}}>
      <style>{css}</style>
      {modalUrl&&(<div style={{position:"fixed",inset:0,zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,.5)"}} onClick={()=>setModalUrl(null)}>
        <div className="tf-modal" onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:540,maxHeight:"85vh",margin:20,borderRadius:16,backgroundColor:"#fff",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 60px rgba(0,0,0,.2)"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:"1px solid hsl(0 0% 90%)"}}>
            <span style={{fontFamily:FH,fontSize:18,fontWeight:600,color:P}}>{modalTitle}</span>
            <button onClick={()=>setModalUrl(null)} style={{width:32,height:32,borderRadius:8,border:"1px solid hsl(0 0% 90%)",backgroundColor:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="hsl(0 0% 45%)" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
          </div>
          <iframe src={modalUrl} title={modalTitle} style={{flex:1,width:"100%",minHeight:400,border:"none"}}/>
        </div>
      </div>)}

      <div className={tc()} style={{width:"100%",minHeight:"100vh"}}>

        {dStep===1&&(<Shell><Hdr pct={pct}/><Main>
          <Title t="Let's get started" s="Enter your name to begin partner onboarding"/>
          <div><Lbl>Partner Name</Lbl><input style={inp} placeholder="e.g. Acme Corporation" value={name} onChange={e=>setName(e.target.value)} onFocus={focH} onBlur={blurH}/></div>
        </Main><Ftr onClick={()=>fwd(2)} disabled={!name.trim()}/></Shell>)}

        {dStep===2&&(<Shell><Hdr pct={pct} showBack onBack={()=>bwd(1)}/><Main>
          <Title t="Contact information" s="How can we reach you?"/>
          <Col gap={16}>
            <div><Lbl>Phone</Lbl><input style={{...inp,paddingLeft:48}} inputMode="numeric" placeholder="(555) 123-4567" value={phone} onChange={fmtPh} onFocus={focH} onBlur={blurH}/></div>
            <div><Lbl>Email</Lbl><input style={{...inp,paddingLeft:48}} type="email" placeholder="partner@example.com" value={email} onChange={e=>setEmail(e.target.value)} onFocus={focH} onBlur={blurH}/></div>
            {email&&!emOk(email)&&<p style={{fontFamily:FB,fontSize:14,color:"#c53030"}}>Please enter a valid email</p>}
          </Col>
        </Main><Ftr onClick={()=>fwd(3)} disabled={!phOk(phone)||!emOk(email)}/></Shell>)}

        {dStep===3&&(<Shell><Hdr pct={pct} showBack onBack={()=>bwd(2)}/><Main>
          <Title t="Where are you located?" s="Select your state of operation"/>
          {!selState&&<input type="text" placeholder="Search states..." value={stSrch} onChange={e=>setStSrch(e.target.value)} style={{...inp,fontSize:16,padding:"14px 16px",marginBottom:16}} onFocus={focH} onBlur={blurH}/>}
          {selState&&stObj?(<div className="tf-fi"><label style={{display:"flex",alignItems:"center",gap:14,padding:"14px 16px",borderRadius:12,border:`2px solid ${P}`,backgroundColor:"hsl(140 30% 94%)"}}>
            <span style={{flexShrink:0,width:24,height:24,borderRadius:"50%",border:`2px solid ${P}`,backgroundColor:P,display:"flex",alignItems:"center",justifyContent:"center"}}><ChkI c="white"/></span>
            <img src={stObj.flag} alt="" style={{width:32,height:22,objectFit:"cover",borderRadius:3,border:"1px solid hsl(0 0% 90%)"}}/>
            <span style={{fontFamily:FB,fontSize:17,fontWeight:500,flex:1}}>{stObj.name}</span>
            <button onClick={()=>{setSelState(null);setStSrch("");setOpenedDocs(new Set());setAgreedDocs(new Set());}} style={{fontFamily:FB,padding:"4px 12px",borderRadius:9999,border:"1px solid hsl(0 0% 85%)",backgroundColor:"transparent",color:"hsl(0 0% 45%)",fontSize:13,cursor:"pointer"}}>Change</button>
          </label></div>):(<ul style={{display:"flex",flexDirection:"column",gap:8,listStyle:"none",padding:0,paddingBottom:24}}>
            {filtered.map(s=>(<li key={s.abbr}><label onClick={()=>{setSelState(s.abbr);setStSrch("");setOpenedDocs(new Set());setAgreedDocs(new Set());}} style={{display:"flex",alignItems:"center",gap:14,padding:"14px 16px",borderRadius:12,border:"2px solid hsl(0 0% 90%)",backgroundColor:"hsl(0 0% 98%)",cursor:"pointer"}}>
              <span style={{flexShrink:0,width:24,height:24,borderRadius:"50%",border:"2px solid hsl(0 0% 85%)"}}/>
              <img src={s.flag} alt="" style={{width:32,height:22,objectFit:"cover",borderRadius:3,border:"1px solid hsl(0 0% 90%)"}}/>
              <span style={{fontFamily:FB,fontSize:17,fontWeight:500}}>{s.name}</span>
            </label></li>))}
            {!filtered.length&&<li style={{padding:24,textAlign:"center",color:"hsl(0 0% 55%)",fontSize:15}}>No states match</li>}
          </ul>)}
        </Main>{selState&&<Ftr onClick={()=>fwd(4)} disabled={false}/>}</Shell>)}

        {dStep===4&&(<Shell><Hdr pct={pct} showBack onBack={()=>bwd(3)}/><Main>
          <Title t="Confirm your details" s="Verify your category, choose your entity type, and review your commission rate"/>
          <Col gap={24}>
            <div><Lbl>Partner Category</Lbl>
              {industry&&!showCatList?(<div className="tf-fi" style={{display:"flex",alignItems:"center",gap:14,padding:"14px 16px",borderRadius:12,border:`2px solid ${P}`,backgroundColor:"hsl(140 30% 94%)"}}>
                <span style={{flexShrink:0,width:24,height:24,borderRadius:"50%",border:`2px solid ${P}`,backgroundColor:P,display:"flex",alignItems:"center",justifyContent:"center"}}><ChkI c="white"/></span>
                <div style={{flex:1}}><span style={{fontFamily:FB,fontSize:17,fontWeight:500,display:"block"}}>{indObj?.label}</span><span style={{fontFamily:FB,fontSize:13,color:"hsl(0 0% 45%)"}}>{indObj?.sub}</span></div>
                <button onClick={()=>setShowCatList(true)} style={{fontFamily:FB,padding:"4px 12px",borderRadius:9999,border:"1px solid hsl(0 0% 85%)",backgroundColor:"transparent",color:"hsl(0 0% 45%)",fontSize:13,cursor:"pointer"}}>Change</button>
              </div>):(<List>{INDUSTRIES.map(i=><Crd key={i.id} sel={industry===i.id} onClick={()=>{setIndustry(i.id);setShowCatList(false);}} label={i.label} sub={i.sub}/>)}</List>)}
            </div>
            <div><Lbl>Entity Type</Lbl>
              <div style={{display:"flex",gap:10}}>
                {[{id:"individual",label:"Individual",icon:IC.person},{id:"company",label:"Company / LLC",icon:IC.building}].map(e=>(
                  <label key={e.id} onClick={()=>{setEntityType(e.id);if(e.id==="individual"){setEin("");setCompanyContact("");}}} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:8,padding:16,borderRadius:12,border:`2px solid ${entityType===e.id?P:"hsl(0 0% 90%)"}`,backgroundColor:entityType===e.id?P:"hsl(0 0% 98%)",color:entityType===e.id?"#fff":"hsl(0 0% 8.5%)",cursor:"pointer",transition:"all .2s",textAlign:"center"}}>
                    <span style={{display:"flex",alignItems:"center",justifyContent:"center",color:entityType===e.id?"#fff":"hsl(0 0% 45%)"}}>{e.icon}</span>
                    <span style={{fontFamily:FB,fontSize:15,fontWeight:600}}>{e.label}</span>
                  </label>))}
              </div>
            </div>
            {isCo&&(<div className="tf-fi"><Col gap={16}>
              <div><Lbl>Company Contact Name</Lbl><input style={inp} placeholder="Full name of company contact" value={companyContact} onChange={e=>setCompanyContact(e.target.value)} onFocus={focH} onBlur={blurH}/></div>
              <div><Lbl>EIN (Tax ID)</Lbl><input style={inp} inputMode="numeric" placeholder="XX-XXXXXXX" maxLength={10} value={ein} onChange={fmtEin} onFocus={focH} onBlur={blurH}/>{ein&&!einOk(ein)&&<p style={{fontFamily:FB,fontSize:13,color:"#c53030",marginTop:6}}>Please enter a valid EIN (XX-XXXXXXX)</p>}</div>
            </Col></div>)}
            <div style={{display:"flex",alignItems:"center",gap:14,padding:16,borderRadius:12,border:"2px solid hsl(140 30% 80%)",backgroundColor:"hsl(140 30% 94%)"}}>
              <div style={{flexShrink:0,width:48,height:48,borderRadius:12,backgroundColor:P,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontFamily:FB,fontSize:18,fontWeight:700,color:"#fff"}}>{commRate}%</span></div>
              <div><div style={{fontFamily:FB,fontSize:15,fontWeight:600,color:"hsl(0 0% 8.5%)",lineHeight:1.3}}>Your commission rate</div><div style={{fontFamily:FB,fontSize:13,color:"hsl(0 0% 45%)",lineHeight:1.4,marginTop:2}}>{isCo?"Company partners earn 30% commission on every sale":"Individual partners earn 20% commission on every sale"}</div></div>
            </div>
          </Col>
        </Main><Ftr onClick={()=>fwd(5)} disabled={!s4Ok}/></Shell>)}

        {dStep===5&&(<Shell><Hdr pct={pct} showBack onBack={()=>bwd(4)}/><Main>
          <Title t="Your social presence" s="Tell us where your audience lives"/>
          <Col gap={24}>
            <div><Lbl>Instagram</Lbl><Col gap={12}>
              <div style={{position:"relative"}}>
                <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",fontFamily:FB,fontSize:18,fontWeight:500,color:"hsl(0 0% 55%)",pointerEvents:"none"}}>@</span>
                <input style={{...inp,paddingLeft:36}} placeholder="username" value={igUser} onChange={e=>setIgUser(e.target.value.replace(/^@/,""))} onFocus={focH} onBlur={blurH}/>
              </div>
              <input style={inp} inputMode="numeric" placeholder="Follower count" value={igCount} onChange={e=>setIgCount(fmtNC(e.target.value))} onFocus={focH} onBlur={blurH}/>
            </Col></div>
            <div><Lbl>Other channels (optional)</Lbl>
              <p style={{fontFamily:FB,fontSize:14,color:"hsl(0 0% 55%)",marginBottom:12}}>Select all that apply</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16}}>
                {OTHER_CHANNELS.map(ch=>{const sel=selCh.has(ch.id);return(
                  <button key={ch.id} onClick={()=>toggleCh(ch.id)} style={{fontFamily:FB,fontSize:14,fontWeight:500,padding:"8px 16px",borderRadius:9999,border:`2px solid ${sel?P:"hsl(0 0% 90%)"}`,backgroundColor:sel?P:"hsl(0 0% 98%)",color:sel?"#fff":"hsl(0 0% 35%)",cursor:"pointer",transition:"all .2s",display:"flex",alignItems:"center",gap:6}}>
                    {sel&&<ChkI c="#fff"/>}{ch.label}
                  </button>);})}
              </div>
              {selCh.size>0&&(<div className="tf-fi"><Col gap={12}>
                {OTHER_CHANNELS.filter(ch=>selCh.has(ch.id)).map(ch=>{const d=chData[ch.id]||{};const isEm=ch.id==="emails";return(
                  <div key={ch.id} style={{padding:14,borderRadius:12,border:"1px solid hsl(0 0% 90%)",backgroundColor:"hsl(0 0% 98%)"}}>
                    <span style={{fontFamily:FB,fontSize:14,fontWeight:600,color:P,display:"block",marginBottom:10}}>{ch.label}</span>
                    <Col gap={8}>
                      <input style={inpSm} placeholder={isEm?"List name or platform":"Username"} value={d.username||""} onChange={e=>setChF(ch.id,"username",e.target.value)} onFocus={focH} onBlur={blurH}/>
                      <input style={inpSm} inputMode="numeric" placeholder={isEm?"Subscriber count":"Follower count"} value={d.followers||""} onChange={e=>setChF(ch.id,"followers",fmtNC(e.target.value))} onFocus={focH} onBlur={blurH}/>
                    </Col>
                  </div>);})}
              </Col></div>)}
            </div>
          </Col>
        </Main><Ftr onClick={()=>fwd(6)} disabled={!s5Ok}/></Shell>)}

        {dStep===6&&(<Shell><Hdr pct={pct} showBack onBack={()=>bwd(5)}/><Main>
          <Title t="How would you like to get paid?" s="Select your preferred payment type and enter your details"/>
          <Col gap={24}>
            <div><Lbl>Payment Type</Lbl><List>{PAY_TYPES.map(m=><Crd key={m.id} sel={payType===m.id} onClick={()=>{setPayType(m.id);setPayMethod("");}} label={m.label} icon={m.icon}/>)}</List></div>
            {payType&&(<div className="tf-fi"><Lbl>Payment Details</Lbl><input style={inp} placeholder={PAY_PH[payType]||"Enter payment details"} value={payMethod} onChange={e=>setPayMethod(e.target.value)} onFocus={focH} onBlur={blurH}/><p style={{fontFamily:FB,fontSize:13,color:"hsl(0 0% 55%)",marginTop:8}}>We'll use this to send your commission payouts</p></div>)}
          </Col>
        </Main><Ftr onClick={()=>fwd(7)} disabled={!payType||!payMethod.trim()}/></Shell>)}

        {dStep===7&&(<Shell><Hdr pct={pct} showBack onBack={()=>bwd(6)}/><Main>
          <Title t="Create your promo code" s="This is where you setup the code your customers will use for 10% off and track your earnings."/>
          <div><Lbl>Promo Code</Lbl><input style={inp} placeholder="e.g. FITJANE10" value={promo} onChange={e=>setPromo(e.target.value.toUpperCase())} onFocus={focH} onBlur={blurH}/></div>
          <div style={{marginTop:32,display:"flex",flexDirection:"column",gap:16}}>
            {[{icon:IC.tag,title:"10% off for your customers",desc:"Anyone who uses your code gets 10% off their order"},{icon:IC.dollar,title:"Track your earnings",desc:"Every purchase made with your code is tracked to your account"},{icon:IC.megaphone,title:"Share it everywhere",desc:"Use it on social media, in your gym, or with your clients"}].map((b,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 0"}}>
                <div style={{flexShrink:0,width:40,height:40,borderRadius:10,backgroundColor:"hsl(140 30% 94%)",display:"flex",alignItems:"center",justifyContent:"center",color:P}}>{b.icon}</div>
                <div><div style={{fontFamily:FB,fontSize:15,fontWeight:600,lineHeight:1.3}}>{b.title}</div><div style={{fontFamily:FB,fontSize:14,color:"hsl(0 0% 55%)",lineHeight:1.4,marginTop:1}}>{b.desc}</div></div>
              </div>))}
          </div>
        </Main><Ftr onClick={()=>fwd(8)} disabled={!promo.trim()}/></Shell>)}

        {dStep===8&&(<Shell><Hdr pct={pct} showBack onBack={()=>bwd(7)}/><Main>
          <Title t="Review & submit" s="Verify your details and agree to all required documents"/>
          <div style={{borderRadius:12,border:"1px solid hsl(0 0% 90%)",padding:"4px 16px",backgroundColor:"hsl(0 0% 98%)",marginBottom:24}}>
            <Row l="Partner Name" v={name}/><Row l="Phone" v={phone}/><Row l="Email" v={email}/><Row l="State" v={stName}/>
            <Row l="Category" v={indObj?.label}/><Row l="Entity Type" v={isCo?"Company / LLC":"Individual"}/>
            {isCo&&<Row l="Company Contact" v={companyContact}/>}{isCo&&<Row l="EIN" v={ein}/>}
            <Row l="Commission" v={`${commRate}%`}/>
            <Row l="Instagram" v={igUser?`@${igUser}`:""}/><Row l="IG Followers" v={igCount}/>
            {ocSummary&&<Row l="Other Channels" v={ocSummary}/>}
            <Row l="Payment Type" v={PAY_TYPES.find(m=>m.id===payType)?.label}/><Row l="Payment Details" v={payMethod}/><Row l="Promo Code" v={promo}/>
          </div>

          {stLegal.flatFee&&(<div style={{display:"flex",alignItems:"flex-start",gap:12,padding:16,borderRadius:12,border:"2px solid hsl(45 90% 70%)",backgroundColor:"hsl(45 100% 96%)",marginBottom:24}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(30 80% 40%)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:2}}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><div style={{fontFamily:FB,fontSize:15,fontWeight:600,color:"hsl(30 80% 30%)",lineHeight:1.3}}>Flat fee compensation</div><div style={{fontFamily:FB,fontSize:14,color:"hsl(30 50% 40%)",lineHeight:1.5,marginTop:4}}>Based on your state, compensation is a flat fee (\\$37 Individual / \\$55 Partner) instead of percentage-based.</div></div>
          </div>)}

          <div style={{marginBottom:24}}>
            <Lbl>Required Agreements ({agreedDocs.size}/{stLegal.docs.length})</Lbl>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {stLegal.docs.map((doc)=>{const opened=openedDocs.has(doc.url),agreed=agreedDocs.has(doc.url);const bTxt=doc.stateSpecific?`${selState} specific`:doc.badge;const bClr=doc.stateSpecific?"amber":(doc.badgeColor||"blue");return(
                <div key={doc.url} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:12,border:`2px solid ${agreed?P:opened?"hsl(0 0% 80%)":"hsl(0 0% 90%)"}`,backgroundColor:agreed?"hsl(140 30% 94%)":"hsl(0 0% 98%)",transition:"all .2s"}}>
                  <span onClick={()=>toggleAgree(doc.url)} style={{flexShrink:0,width:22,height:22,borderRadius:6,border:`2px solid ${agreed?P:opened?"hsl(0 0% 70%)":"hsl(0 0% 85%)"}`,backgroundColor:agreed?P:"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:opened?"pointer":"not-allowed",opacity:opened?1:.5,transition:"all .2s"}}>{agreed&&<ChkI c="white"/>}</span>
                  <div style={{flex:1,display:"flex",flexDirection:"column",gap:4}}>
                    <span style={{fontFamily:FB,fontSize:14,fontWeight:500,color:agreed?"hsl(0 0% 8.5%)":"hsl(0 0% 35%)"}}>{doc.label}</span>
                    {bTxt&&<DocBadge text={bTxt} color={bClr}/>}
                  </div>
                  <button onClick={()=>openDoc(doc)} style={{flexShrink:0,fontFamily:FB,fontSize:13,fontWeight:600,padding:"6px 14px",borderRadius:9999,border:"none",backgroundColor:opened?(agreed?P:"hsl(0 0% 85%)"):"hsl(140 30% 94%)",color:opened?(agreed?"#fff":"hsl(0 0% 35%)"):P,cursor:"pointer",transition:"all .2s"}}>{opened?(agreed?"✓ Read":"Read again"):"Read"}</button>
                </div>);})}
            </div>
            {!allAgreed&&<p style={{fontFamily:FB,fontSize:13,color:"hsl(0 0% 55%)",marginTop:10}}>You must open and agree to each document before submitting</p>}
          </div>
        </Main>
        <footer className="tf-fa" style={{position:"sticky",bottom:0,maxWidth:520,width:"100%",margin:"auto auto 0",padding:"16px 20px",backgroundColor:"#fff",borderTop:"1px solid hsl(0 0% 90%)"}}>
          <button onClick={handleSubmit} disabled={!allAgreed||pending} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8,fontFamily:FB,fontSize:16,fontWeight:500,padding:16,borderRadius:12,border:"none",backgroundColor:allAgreed&&!pending?P:"hsl(0 0% 96.5%)",color:allAgreed&&!pending?"#fff":"hsl(0 0% 55%)",cursor:allAgreed&&!pending?"pointer":"not-allowed",transition:"background-color .3s, color .3s"}}>{pending?"Submitting...":"Become a Partner"}{!pending&&<Arrow d="fwd"/>}</button>
        </footer></Shell>)}

      </div>
    </div>
  );
}