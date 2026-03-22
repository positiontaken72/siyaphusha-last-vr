import { useRef, useState, type CSSProperties } from "react";
import html2canvas from "html2canvas";
import { Download, Loader2 } from "lucide-react";

/* ── Icons matching the original letterhead exactly ─────────────── */
function IconPin() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.51a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

/* ── The captured letterhead ─────────────────────────────────────── */
function LetterheadHeader() {
  const BASE: CSSProperties = {
    fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    background: "#ffffff",
    width: "100%",
  };

  const rowStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "7px",
  };

  const contactText = (bold?: boolean): CSSProperties => ({
    fontSize: "10.5px",
    color: "#555555",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontWeight: bold ? 700 : 400,
    margin: 0,
    lineHeight: 1,
  });

  return (
    <div style={BASE}>
      {/* ── Main header row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 36px 24px",
          gap: "16px",
        }}
      >
        {/* LEFT — new logo */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/siyaphusha-logo-main.png"
            alt="Siyaphusha Consortium"
            crossOrigin="anonymous"
            style={{
              height: "80px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        {/* RIGHT — all text, right-aligned */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "5px",
          }}
        >
          {/* Company name */}
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#1a1a1a",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              margin: "0 0 4px 0",
              lineHeight: 1.1,
            }}
          >
            SIYAPHUSHA CONSORTIUM (PTY) LTD
          </p>

          {/* Reg No */}
          <p style={contactText()}>REG NO: 2020/048856/07</p>

          {/* Tax Reference */}
          <p style={contactText()}>TAX REFERENCE NO: 9862338176</p>

          {/* Address */}
          <div style={rowStyle}>
            <IconPin />
            <p style={contactText()}>
              1855 FINCA STREET, PHOLA OGIES, EMALAHLENI 2233 MPUMALANGA
            </p>
          </div>

          {/* Email */}
          <div style={rowStyle}>
            <IconMail />
            <p style={contactText()}>INFO@SIYAPHUSHACONSORTIUM.CO.ZA</p>
          </div>

          {/* Website — bold */}
          <div style={rowStyle}>
            <IconGlobe />
            <p style={contactText(true)}>WWW.SIYAPHUSHACONSORTIUM.CO.ZA</p>
          </div>

          {/* Phone */}
          <div style={rowStyle}>
            <IconPhone />
            <p style={contactText()}>073 256 7948 / 073 064 1347</p>
          </div>
        </div>
      </div>

      {/* ── Bottom rule — single dark line like the original ── */}
      <div style={{ height: "1.5px", background: "#333333", margin: "0 36px" }} />
      <div style={{ height: "24px" }} />
    </div>
  );
}

/* ── Page wrapper ────────────────────────────────────────────────── */
export function Letterhead() {
  const letterheadRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!letterheadRef.current) return;
    setDownloading(true);
    try {
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
    <div
      style={{
        minHeight: "100vh",
        background: "#e0e0e0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Label */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <p style={{ color: "#888", fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", margin: "0 0 6px" }}>
          Corporate Identity
        </p>
        <h1 style={{ color: "#111", fontSize: "28px", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0 }}>
          Official Letterhead
        </h1>
      </div>

      {/* Paper preview */}
      <div
        style={{
          background: "#ffffff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.06), 0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
          maxWidth: "960px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div ref={letterheadRef}>
          <LetterheadHeader />
        </div>

        {/* Simulated body lines */}
        <div style={{ padding: "32px 36px 72px" }}>
          {[92, 78, 85, 65, 80].map((w, i) => (
            <div key={i} style={{ height: "1px", background: "#f2f2f2", width: `${w}%`, marginBottom: "14px" }} />
          ))}
        </div>
      </div>

      {/* Download */}
      <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <button
          onClick={handleDownload}
          disabled={downloading}
          data-testid="button-download-letterhead"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: downloading ? "#999" : "#111",
            color: "#fff",
            border: "none",
            padding: "14px 36px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: downloading ? "not-allowed" : "pointer",
            boxShadow: downloading ? "none" : "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          {downloading
            ? <Loader2 style={{ width: "14px", height: "14px", animation: "spin 1s linear infinite" }} />
            : <Download style={{ width: "14px", height: "14px" }} />
          }
          {downloading ? "Generating..." : "Download Letterhead — PNG"}
        </button>
        <p style={{ color: "#999", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", margin: 0 }}>
          4× resolution · print-ready
        </p>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
