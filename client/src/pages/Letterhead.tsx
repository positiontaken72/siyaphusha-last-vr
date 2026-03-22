import { useRef, useState, type CSSProperties } from "react";
import html2canvas from "html2canvas";
import { Download, Loader2 } from "lucide-react";

/* ── Icons ───────────────────────────────────────────────────────── */
const iconProps = (color = "#6b6b6b") => ({
  width: 12, height: 12,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "1.8",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  style: { flexShrink: 0, display: "block" } as CSSProperties,
});

function IconPin()  { return <svg {...iconProps()}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
function IconMail() { return <svg {...iconProps()}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>; }
function IconGlobe(){ return <svg {...iconProps()}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>; }
function IconPhone(){ return <svg {...iconProps()}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.51a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>; }

/* ── Contact row ─────────────────────────────────────────────────── */
function ContactRow({ icon, text, bold }: { icon: React.ReactNode; text: string; bold?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
      {icon}
      <span style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "9.5px",
        color: "#5c5c5c",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        fontWeight: bold ? 700 : 400,
        lineHeight: 1,
      }}>{text}</span>
    </div>
  );
}

/* ── Letterhead header ───────────────────────────────────────────── */
function LetterheadHeader() {
  return (
    <div style={{ background: "#ffffff", width: "100%", fontFamily: "Arial, Helvetica, sans-serif" }}>

      {/* ── Thin top rule ── */}
      <div style={{ height: "3px", background: "#111111" }} />

      {/* ── Main content ── */}
      <div style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        padding: "30px 40px 0px 36px",
        gap: "24px",
      }}>

        {/* LEFT — Logo */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          paddingBottom: "30px",
        }}>
          <img
            src="/siyaphusha-logo-main.png"
            alt="Siyaphusha Consortium"
            crossOrigin="anonymous"
            style={{ height: "85px", width: "auto", display: "block", objectFit: "contain" }}
          />
        </div>

        {/* RIGHT — Company block with left accent border */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          borderLeft: "2px solid #111111",
          paddingLeft: "28px",
          paddingBottom: "22px",
          gap: "0",
        }}>

          {/* Company name */}
          <h1 style={{
            fontSize: "17px",
            fontWeight: 900,
            color: "#111111",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            margin: "0 0 10px 0",
            lineHeight: 1.1,
            textAlign: "right",
          }}>
            Siyaphusha Consortium (Pty) Ltd
          </h1>

          {/* Thin accent rule under company name */}
          <div style={{ width: "100%", height: "1px", background: "#111111", marginBottom: "10px" }} />

          {/* Registration block */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", marginBottom: "12px" }}>
            <span style={{ fontSize: "9.5px", color: "#5c5c5c", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Reg No:&nbsp;<strong style={{ color: "#2a2a2a", fontWeight: 700 }}>2020/048856/07</strong>
            </span>
            <span style={{ fontSize: "9.5px", color: "#5c5c5c", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Tax Reference No:&nbsp;<strong style={{ color: "#2a2a2a", fontWeight: 700 }}>9862338176</strong>
            </span>
          </div>

          {/* Thin separator between registration and contact */}
          <div style={{ width: "100%", height: "1px", background: "#e0e0e0", marginBottom: "10px" }} />

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
            <ContactRow icon={<IconPin />}   text="1855 Finca Street, Phola Ogies, Emalahleni 2233 Mpumalanga" />
            <ContactRow icon={<IconMail />}  text="info@siyaphushaconsortium.co.za" />
            <ContactRow icon={<IconGlobe />} text="www.siyaphushaconsortium.co.za" bold />
            <ContactRow icon={<IconPhone />} text="073 256 7948  /  073 064 1347" />
          </div>

        </div>
      </div>

      {/* ── Bottom rule ── */}
      <div style={{ height: "1px", background: "#cccccc", margin: "0 36px" }} />
      <div style={{ height: "3px", background: "#111111", margin: "3px 36px 0" }} />
      <div style={{ height: "20px" }} />
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
      background: "#d8d8d8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "52px 24px",
      fontFamily: "Arial, sans-serif",
    }}>

      {/* Page title */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <p style={{ color: "#888", fontSize: "10px", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", margin: "0 0 8px" }}>
          Corporate Identity
        </p>
        <h1 style={{ color: "#111", fontSize: "30px", fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 12px" }}>
          Official Letterhead
        </h1>
        <div style={{ width: "40px", height: "3px", background: "#111", margin: "0 auto" }} />
      </div>

      {/* Paper */}
      <div style={{
        background: "#ffffff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
        maxWidth: "960px",
        width: "100%",
        overflow: "hidden",
      }}>
        <div ref={letterheadRef}>
          <LetterheadHeader />
        </div>

        {/* Simulated body */}
        <div style={{ padding: "36px 40px 80px" }}>
          {[90, 75, 82, 60, 78, 88, 55].map((w, i) => (
            <div key={i} style={{ height: "1px", background: "#f0f0f0", width: `${w}%`, marginBottom: "16px" }} />
          ))}
        </div>
      </div>

      {/* Download */}
      <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <button
          onClick={handleDownload}
          disabled={downloading}
          data-testid="button-download-letterhead"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: downloading ? "#888" : "#111",
            color: "#fff",
            border: "none",
            padding: "15px 40px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            cursor: downloading ? "not-allowed" : "pointer",
            boxShadow: downloading ? "none" : "0 4px 24px rgba(0,0,0,0.22)",
          }}
        >
          {downloading
            ? <Loader2 style={{ width: "14px", height: "14px", animation: "spin 1s linear infinite" }} />
            : <Download style={{ width: "14px", height: "14px" }} />}
          {downloading ? "Generating..." : "Download Letterhead — PNG"}
        </button>
        <p style={{ color: "#999", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", margin: 0 }}>
          4× resolution · print-ready
        </p>
      </div>

      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </div>
  );
}
