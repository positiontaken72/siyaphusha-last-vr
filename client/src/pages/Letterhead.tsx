import { useRef, useState, type CSSProperties } from "react";
import html2canvas from "html2canvas";
import { Download, Loader2 } from "lucide-react";

/* ── Icons ───────────────────────────────────────────────────────── */
const svgBase = (color = "#6b6b6b"): CSSProperties => ({ flexShrink: 0, display: "block", color });

function IconPin() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={svgBase()}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={svgBase()}>
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={svgBase()}>
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={svgBase()}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.51a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

/* ── Contact row ─────────────────────────────────────────────────── */
function ContactRow({ icon, text, bold }: { icon: React.ReactNode; text: string; bold?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
      {icon}
      <span style={{
        fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
        fontSize: "9px",
        color: "#5a5a5a",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        fontWeight: bold ? 700 : 500,
        lineHeight: 1,
      }}>{text}</span>
    </div>
  );
}

/* ── Letterhead header ───────────────────────────────────────────── */
function LetterheadHeader() {
  return (
    <div style={{ background: "#ffffff", width: "100%", fontFamily: "Arial, sans-serif" }}>

      {/* TOP: 5px solid black bar */}
      <div style={{ height: "5px", background: "#0d0d0d" }} />

      {/* MAIN CONTENT */}
      <div style={{
        display: "flex",
        alignItems: "stretch",
        padding: "28px 40px 0 36px",
        gap: "0",
      }}>

        {/* LEFT — Logo */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          paddingRight: "36px",
          paddingBottom: "26px",
          borderRight: "1px solid #d4d4d4",
        }}>
          <img
            src="/siyaphusha-logo-main.png"
            alt="Siyaphusha Consortium"
            crossOrigin="anonymous"
            style={{ height: "88px", width: "auto", display: "block", objectFit: "contain" }}
          />
        </div>

        {/* RIGHT — Company block */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          paddingLeft: "32px",
          paddingBottom: "26px",
          gap: "0",
        }}>

          {/* ── Company name — Barlow Condensed ExtraBold ── */}
          <h1 style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
            fontSize: "26px",
            fontWeight: 800,
            color: "#0d0d0d",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            margin: "0 0 4px 0",
            lineHeight: 1,
            textAlign: "right",
          }}>
            Siyaphusha Consortium (Pty) Ltd
          </h1>

          {/* Fine line under name */}
          <div style={{ width: "100%", height: "1.5px", background: "#0d0d0d", marginBottom: "10px" }} />

          {/* Registration row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "10px",
          }}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
              fontSize: "8.5px",
              color: "#888",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}>
              Reg No:&nbsp;
              <strong style={{ color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.06em" }}>2020/048856/07</strong>
            </span>
            <span style={{ width: "1px", height: "12px", background: "#d4d4d4", display: "inline-block" }} />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
              fontSize: "8.5px",
              color: "#888",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}>
              Tax Ref:&nbsp;
              <strong style={{ color: "#1a1a1a", fontWeight: 700, letterSpacing: "0.06em" }}>9862338176</strong>
            </span>
          </div>

          {/* Thin gray separator */}
          <div style={{ width: "100%", height: "1px", background: "#e8e8e8", marginBottom: "10px" }} />

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "7px" }}>
            <ContactRow icon={<IconPin />}   text="1855 Finca Street, Phola Ogies, Emalahleni 2233 Mpumalanga" />
            <ContactRow icon={<IconMail />}  text="info@siyaphushaconsortium.co.za" />
            <ContactRow icon={<IconGlobe />} text="www.siyaphushaconsortium.co.za" bold />
            <ContactRow icon={<IconPhone />} text="073 256 7948  /  073 064 1347" />
          </div>

        </div>
      </div>

      {/* BOTTOM RULES */}
      <div style={{ height: "1px", background: "#c8c8c8", margin: "0 36px" }} />
      <div style={{ height: "4px", background: "#0d0d0d" }} />
      <div style={{ height: "18px" }} />
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
export function Letterhead() {
  const letterheadRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!letterheadRef.current) return;
    setDownloading(true);
    try {
      // Wait for all fonts to be loaded before capturing
      await document.fonts.ready;
      const canvas = await html2canvas(letterheadRef.current, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
      });
      const link = document.createElement("a");
      link.download = "Siyaphusha-Consortium-Letterhead.png";
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#d4d4d4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "52px 24px",
      fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
    }}>

      {/* Page title */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
          color: "#777",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          margin: "0 0 10px",
        }}>Corporate Identity</p>
        <h1 style={{
          fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
          color: "#111",
          fontSize: "38px",
          fontWeight: 800,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: "0 0 14px",
          lineHeight: 1,
        }}>Official Letterhead</h1>
        <div style={{ width: "44px", height: "4px", background: "#111", margin: "0 auto" }} />
      </div>

      {/* Paper */}
      <div style={{
        background: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.06), 0 28px 72px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.06)",
        maxWidth: "980px",
        width: "100%",
        overflow: "hidden",
      }}>
        <div ref={letterheadRef}>
          <LetterheadHeader />
        </div>

        {/* Simulated page body */}
        <div style={{ padding: "36px 40px 100px" }}>
          {[88, 72, 80, 55, 76, 84, 50, 68].map((w, i) => (
            <div key={i} style={{ height: "1px", background: "#f0f0f0", width: `${w}%`, marginBottom: "18px" }} />
          ))}
        </div>
      </div>

      {/* Download */}
      <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <button
          onClick={handleDownload}
          disabled={downloading}
          data-testid="button-download-letterhead"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: downloading ? "#888" : "#0d0d0d",
            color: "#fff",
            border: "none",
            padding: "15px 44px",
            fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            cursor: downloading ? "not-allowed" : "pointer",
            boxShadow: downloading ? "none" : "0 4px 28px rgba(0,0,0,0.28)",
          }}
        >
          {downloading
            ? <Loader2 style={{ width: "14px", height: "14px", animation: "spin 1s linear infinite" }} />
            : <Download style={{ width: "14px", height: "14px" }} />}
          {downloading ? "Generating..." : "Download Letterhead — PNG"}
        </button>
        <p style={{ color: "#999", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
          4× resolution · print-ready
        </p>
      </div>

      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </div>
  );
}
