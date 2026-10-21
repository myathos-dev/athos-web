import { useState, useCallback } from "react";

const STATES = [
  { name: "Alabama", abbr: "AL", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Alabama.svg" },
  { name: "Alaska", abbr: "AK", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Alaska.svg" },
  { name: "Arizona", abbr: "AZ", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Arizona.svg" },
  { name: "Arkansas", abbr: "AR", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Arkansas.svg" },
  { name: "California", abbr: "CA", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_California.svg" },
  { name: "Colorado", abbr: "CO", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Colorado.svg" },
  { name: "Connecticut", abbr: "CT", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Connecticut.svg" },
  { name: "Delaware", abbr: "DE", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Delaware.svg" },
  { name: "Florida", abbr: "FL", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Florida.svg" },
  { name: "Georgia", abbr: "GA", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_State_of_Georgia.svg" },
  { name: "Hawaii", abbr: "HI", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Hawaii.svg" },
  { name: "Idaho", abbr: "ID", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Idaho.svg" },
  { name: "Illinois", abbr: "IL", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Illinois.svg" },
  { name: "Indiana", abbr: "IN", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Indiana.svg" },
  { name: "Iowa", abbr: "IA", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Iowa.svg" },
  { name: "Kansas", abbr: "KS", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kansas.svg" },
  { name: "Kentucky", abbr: "KY", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Kentucky.svg" },
  { name: "Louisiana", abbr: "LA", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Louisiana.svg" },
  { name: "Maine", abbr: "ME", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Maine.svg" },
  { name: "Maryland", abbr: "MD", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Maryland.svg" },
  { name: "Massachusetts", abbr: "MA", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Massachusetts.svg" },
  { name: "Michigan", abbr: "MI", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Michigan.svg" },
  { name: "Minnesota", abbr: "MN", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Minnesota.svg" },
  { name: "Mississippi", abbr: "MS", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Mississippi.svg" },
  { name: "Missouri", abbr: "MO", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Missouri.svg" },
  { name: "Montana", abbr: "MT", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Montana.svg" },
  { name: "Nebraska", abbr: "NE", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Nebraska.svg" },
  { name: "Nevada", abbr: "NV", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Nevada.svg" },
  { name: "New Hampshire", abbr: "NH", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_Hampshire.svg" },
  { name: "New Jersey", abbr: "NJ", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_Jersey.svg" },
  { name: "New Mexico", abbr: "NM", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_Mexico.svg" },
  { name: "New York", abbr: "NY", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_New_York.svg" },
  { name: "North Carolina", abbr: "NC", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_North_Carolina.svg" },
  { name: "North Dakota", abbr: "ND", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_North_Dakota.svg" },
  { name: "Ohio", abbr: "OH", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Ohio.svg" },
  { name: "Oklahoma", abbr: "OK", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Oklahoma.svg" },
  { name: "Oregon", abbr: "OR", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Oregon.svg" },
  { name: "Pennsylvania", abbr: "PA", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Pennsylvania.svg" },
  { name: "Rhode Island", abbr: "RI", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Rhode_Island.svg" },
  { name: "South Carolina", abbr: "SC", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Carolina.svg" },
  { name: "South Dakota", abbr: "SD", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_South_Dakota.svg" },
  { name: "Tennessee", abbr: "TN", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Tennessee.svg" },
  { name: "Texas", abbr: "TX", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Texas.svg" },
  { name: "Utah", abbr: "UT", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Utah.svg" },
  { name: "Vermont", abbr: "VT", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Vermont.svg" },
  { name: "Virginia", abbr: "VA", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Virginia.svg" },
  { name: "Washington", abbr: "WA", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Washington.svg" },
  { name: "West Virginia", abbr: "WV", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_West_Virginia.svg" },
  { name: "Wisconsin", abbr: "WI", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Wisconsin.svg" },
  { name: "Wyoming", abbr: "WY", flag: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Wyoming.svg" },
];

const TELEHEALTH_REQUIRED_STATES = ["MS", "AK", "AL", "AR", "NJ"];
const PRIMARY = "rgb(36, 92, 58)";
const BRAND = "Athos";
const TOTAL_STEPS = 8;

const FONT_HEADING = "'DM Serif Display', 'Noe Display', 'Saol Display', Georgia, serif";
const FONT_BODY = "'DM Sans', system-ui, sans-serif";

export default function TeleformRecoveryIntake() {
  const [step, setStep] = useState(1);
  const [displayedStep, setDisplayedStep] = useState(1);
  const [animState, setAnimState] = useState("idle");
  const [direction, setDirection] = useState("forward");

  const [selectedState, setSelectedState] = useState(null);
  const [stateSearch, setStateSearch] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigateTo = useCallback((newStep, dir) => {
    if (animState !== "idle") return;
    setDirection(dir);
    setAnimState("exit");
    setTimeout(() => {
      setDisplayedStep(newStep);
      setStep(newStep);
      setTimeout(() => {
        setAnimState("enter");
        setTimeout(() => setAnimState("idle"), 400);
      }, 50);
    }, 300);
  }, [animState]);

  const goForward = (s) => navigateTo(s, "forward");
  const goBackward = (s) => navigateTo(s, "backward");

  const getTransitionClass = () => {
    if (animState === "enter") return direction === "forward" ? "tf-enter-fwd" : "tf-enter-bwd";
    if (animState === "exit") return direction === "forward" ? "tf-exit-fwd" : "tf-exit-bwd";
    return "tf-idle";
  };

  const progressPercent = Math.round((step / TOTAL_STEPS) * 100);

  const filteredStates = STATES.filter((s) =>
    s.name.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const selectedStateObj = STATES.find((s) => s.abbr === selectedState);

  const isDobValid = () => {
    if (!dateOfBirth || dateOfBirth.length !== 10) return false;
    const [mm, dd, yyyy] = dateOfBirth.split("-");
    const month = parseInt(mm, 10);
    const day = parseInt(dd, 10);
    const year = parseInt(yyyy, 10);
    if (!month || !day || !year || month > 12 || day > 31 || year < 1900) return false;
    const birth = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const md = today.getMonth() - birth.getMonth();
    if (md < 0 || (md === 0 && today.getDate() < birth.getDate())) age--;
    return age >= 18;
  };

  const handleDobChange = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 8) val = val.slice(0, 8);
    if (val.length >= 5) val = val.slice(0, 2) + "-" + val.slice(2, 4) + "-" + val.slice(4);
    else if (val.length >= 3) val = val.slice(0, 2) + "-" + val.slice(2);
    setDateOfBirth(val);
  };

  const LightHeader = ({ showBack, onBack }) => (
    <header style={{ position: "sticky", top: 0, zIndex: 10, maxWidth: 520, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", backgroundColor: "#fff", borderBottom: "1px solid hsl(0 0% 90%)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px", position: "relative" }}>
        {showBack && (
          <button onClick={onBack} style={{ position: "absolute", left: 20, display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9999, border: "1px solid hsl(0 0% 90%)", backgroundColor: "transparent", color: "hsl(0 0% 8.5%)", fontSize: 14, fontWeight: 400, cursor: "pointer", lineHeight: 1, fontFamily: FONT_BODY }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
        )}
        <span style={{ fontSize: 28, fontWeight: 600, color: PRIMARY, letterSpacing: "-0.01em", fontFamily: FONT_HEADING }}>{BRAND}</span>
      </div>
      <div style={{ padding: "0 20px 16px" }}>
        <div style={{ width: "100%", height: 12, borderRadius: 9999, backgroundColor: "hsl(0 0% 96.5%)", overflow: "hidden" }}>
          <div style={{ width: `${progressPercent}%`, height: "100%", borderRadius: 9999, backgroundColor: PRIMARY, transition: "width 0.4s ease" }} />
        </div>
      </div>
    </header>
  );

  const LightFooter = ({ onClick, disabled }) => (
    <footer className="tf-footer-appear" style={{ position: "sticky", bottom: 0, maxWidth: 520, width: "100%", margin: "auto auto 0", padding: "16px 20px", backgroundColor: "#fff", borderTop: "1px solid hsl(0 0% 90%)" }}>
      <button onClick={onClick} disabled={disabled} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: FONT_BODY, fontSize: 16, fontWeight: 500, lineHeight: "24px", padding: 16, borderRadius: 12, border: "none", backgroundColor: !disabled ? PRIMARY : "hsl(0 0% 96.5%)", color: !disabled ? "#fff" : "hsl(0 0% 55%)", cursor: !disabled ? "pointer" : "not-allowed", transition: "background-color 0.3s, color 0.3s" }}>
        Continue
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </footer>
  );

  return (
    <div style={{ overflow: "hidden", position: "relative", fontFamily: FONT_BODY, backgroundColor: "#fff", color: "hsl(0 0% 8.5%)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
        @keyframes tfSlideInR { from { opacity:0; transform:translateX(60px); } to { opacity:1; transform:translateX(0); } }
        @keyframes tfSlideOutL { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-60px); } }
        @keyframes tfSlideInL { from { opacity:0; transform:translateX(-60px); } to { opacity:1; transform:translateX(0); } }
        @keyframes tfSlideOutR { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(60px); } }
        .tf-enter-fwd { animation: tfSlideInR 0.4s cubic-bezier(0.16,1,0.3,1) forwards; }
        .tf-exit-fwd { animation: tfSlideOutL 0.3s cubic-bezier(0.7,0,0.84,0) forwards; }
        .tf-enter-bwd { animation: tfSlideInL 0.4s cubic-bezier(0.16,1,0.3,1) forwards; }
        .tf-exit-bwd { animation: tfSlideOutR 0.3s cubic-bezier(0.7,0,0.84,0) forwards; }
        .tf-idle { opacity:1; transform:translateX(0); }
        @keyframes tfFadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .tf-fade-in { animation: tfFadeIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes tfFooterIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .tf-footer-appear { animation: tfFooterIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>

      <div className={getTransitionClass()} style={{ width: "100%", minHeight: "100vh" }}>

        {/* ═══ STEP 1: State ═══ */}
        {displayedStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LightHeader />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FONT_HEADING, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", marginBottom: 6 }}>What state do you live in?</h1>
              <p style={{ fontFamily: FONT_BODY, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 24 }}>We need to verify our services are available in your location</p>

              {!selectedState && (
                <input
                  type="text"
                  placeholder="Search states..."
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  style={{ width: "100%", fontFamily: FONT_BODY, fontSize: 16, fontWeight: 400, padding: "14px 16px", borderRadius: 12, border: "2px solid hsl(0 0% 90%)", backgroundColor: "#fff", color: "hsl(0 0% 8.5%)", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box", marginBottom: 16 }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                  onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 90%)")}
                />
              )}

              {selectedState && selectedStateObj ? (
                <div className="tf-fade-in">
                  <label style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 12, border: `2px solid ${PRIMARY}`, backgroundColor: "hsl(140 30% 94%)", cursor: "default", transition: "all 0.3s" }}>
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${PRIMARY}`, backgroundColor: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <img src={selectedStateObj.flag} alt="" style={{ width: 32, height: 22, objectFit: "cover", borderRadius: 3, border: "1px solid hsl(0 0% 90%)" }} />
                    <span style={{ fontFamily: FONT_BODY, fontSize: 17, fontWeight: 500, lineHeight: 1.4, flex: 1 }}>{selectedStateObj.name}</span>
                    <button onClick={() => { setSelectedState(null); setStateSearch(""); }} style={{ fontFamily: FONT_BODY, padding: "4px 12px", borderRadius: 9999, border: "1px solid hsl(0 0% 85%)", backgroundColor: "transparent", color: "hsl(0 0% 45%)", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Change</button>
                  </label>
                </div>
              ) : (
                <ul style={{ display: "flex", flexDirection: "column", gap: 8, listStyle: "none", padding: 0, margin: 0, paddingBottom: 24 }}>
                  {filteredStates.map((s) => (
                    <li key={s.abbr}>
                      <label onClick={() => { setSelectedState(s.abbr); setStateSearch(""); }} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 12, border: "2px solid hsl(0 0% 90%)", backgroundColor: "hsl(0 0% 98%)", cursor: "pointer", transition: "all 0.2s" }}>
                        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: "2px solid hsl(0 0% 85%)", backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }} />
                        <img src={s.flag} alt="" style={{ width: 32, height: 22, objectFit: "cover", borderRadius: 3, border: "1px solid hsl(0 0% 90%)" }} />
                        <span style={{ fontFamily: FONT_BODY, fontSize: 17, fontWeight: 500, lineHeight: 1.4 }}>{s.name}</span>
                      </label>
                    </li>
                  ))}
                  {filteredStates.length === 0 && (
                    <li style={{ fontFamily: FONT_BODY, padding: 24, textAlign: "center", color: "hsl(0 0% 55%)", fontSize: 15 }}>No states match your search</li>
                  )}
                </ul>
              )}
            </main>
            {selectedState && <LightFooter onClick={() => goForward(2)} disabled={false} />}
          </div>
        )}

        {/* ═══ STEP 2: Date of Birth ═══ */}
        {displayedStep === 2 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LightHeader showBack onBack={() => goBackward(1)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FONT_HEADING, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", marginBottom: 6 }}>What's your date of birth?</h1>
              <p style={{ fontFamily: FONT_BODY, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 32 }}>We need to verify you're at least 18 years old</p>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "hsl(0 0% 65%)", display: "flex", alignItems: "center" }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM-DD-YYYY"
                  value={dateOfBirth}
                  onChange={handleDobChange}
                  maxLength={10}
                  style={{ width: "100%", fontFamily: FONT_BODY, fontSize: 18, fontWeight: 500, padding: "16px 16px 16px 48px", borderRadius: 12, border: "2px solid hsl(0 0% 90%)", backgroundColor: "#fff", color: "hsl(0 0% 8.5%)", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                  onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 90%)")}
                />
              </div>
              {dateOfBirth.length === 10 && !isDobValid() && (
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 400, color: "#c53030", marginTop: 8 }}>You must be at least 18 years old</p>
              )}
            </main>
            <LightFooter onClick={() => goForward(3)} disabled={!isDobValid()} />
          </div>
        )}

        {/* ═══ STEP 3: Gender ═══ */}
        {displayedStep === 3 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LightHeader showBack onBack={() => goBackward(2)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FONT_HEADING, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", marginBottom: 6 }}>What's your gender at birth?</h1>
              <p style={{ fontFamily: FONT_BODY, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 24 }}>This helps us provide personalized care</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
                {[{ id: "male", label: "Male" }, { id: "female", label: "Female" }].map((g) => {
                  const sel = gender === g.id;
                  return (
                    <li key={g.id}>
                      <label onClick={() => setGender(g.id)} style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: `2px solid ${sel ? PRIMARY : "hsl(0 0% 90%)"}`, backgroundColor: sel ? PRIMARY : "hsl(0 0% 98%)", color: sel ? "#fff" : "hsl(0 0% 8.5%)", cursor: "pointer", transition: "all 0.2s" }}>
                        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", border: `2px solid ${sel ? "#fff" : "hsl(0 0% 85%)"}`, backgroundColor: sel ? "#fff" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                          {sel && <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                        </span>
                        <span style={{ fontFamily: FONT_BODY, fontSize: 17, fontWeight: 500, lineHeight: 1.4 }}>{g.label}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </main>
            <LightFooter onClick={() => goForward(4)} disabled={!gender} />
          </div>
        )}

        {/* ═══ STEP 4: Name ═══ */}
        {displayedStep === 4 && (
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <LightHeader showBack onBack={() => goBackward(3)} />
            <main style={{ maxWidth: 520, width: "100%", margin: "0 auto", flex: 1, padding: "24px 20px 0" }}>
              <h1 style={{ fontFamily: FONT_HEADING, fontSize: 24, fontWeight: 600, lineHeight: "30px", letterSpacing: "-0.01em", marginBottom: 6 }}>What's your name?</h1>
              <p style={{ fontFamily: FONT_BODY, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "hsl(0 0% 45%)", marginBottom: 32 }}>We'll use this to personalize your experience</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "block" }}>First name</label>
                  <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: "100%", fontFamily: FONT_BODY, fontSize: 18, fontWeight: 500, padding: 16, borderRadius: 12, border: "2px solid hsl(0 0% 90%)", backgroundColor: "#fff", color: "hsl(0 0% 8.5%)", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" }} onFocus={(e) => (e.target.style.borderColor = PRIMARY)} onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 90%)")} />
                </div>
                <div>
                  <label style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 500, color: "hsl(0 0% 45%)", marginBottom: 8, display: "block" }}>Last name</label>
                  <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: "100%", fontFamily: FONT_BODY, fontSize: 18, fontWeight: 500, padding: 16, borderRadius: 12, border: "2px solid hsl(0 0% 90%)", backgroundColor: "#fff", color: "hsl(0 0% 8.5%)", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" }} onFocus={(e) => (e.target.style.borderColor = PRIMARY)} onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 90%)")} />
                </div>
              </div>
              <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, title: "Save your progress", desc: "Pick up right where you left off" },
                  { icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.5}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>, title: "Secure & private", desc: "Your data is encrypted and protected" },
                  { icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "Personalized experience", desc: "Get tailored recommendations" },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0" }}>
                    <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, backgroundColor: "hsl(140 30% 94%)", display: "flex", alignItems: "center", justifyContent: "center" }}>{b.icon}</div>
                    <div>
                      <div style={{ fontFamily: FONT_BODY, fontSize: 15, fontWeight: 600, color: "hsl(0 0% 8.5%)", lineHeight: 1.3 }}>{b.title}</div>
                      <div style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 400, color: "hsl(0 0% 55%)", lineHeight: 1.4, marginTop: 1 }}>{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
            <LightFooter
              onClick={() => {
                sessionStorage.setItem("tf_intake", JSON.stringify({
                  state: selectedState,
                  telehealthRequired: TELEHEALTH_REQUIRED_STATES.includes(selectedState),
                  dateOfBirth,
                  gender,
                  firstName,
                  lastName,
                }));
                window.location.href = "/getpeptides/recovery/profile";
              }}
              disabled={!firstName.trim() || !lastName.trim()}
            />
          </div>
        )}

      </div>
    </div>
  );
}