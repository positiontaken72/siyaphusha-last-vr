import { useRef, useState, type CSSProperties } from "react";
import html2canvas from "html2canvas";
import { Download, Loader2 } from "lucide-react";

/* ─── Inline SVG Icons — matching original letterhead style ──── */
const ICON_STYLE: CSSProperties = { flexShrink: 0, display: "block" };

function IconPin() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5a5a5a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={ICON_STYLE}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5a5a5a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={ICON_STYLE}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5a5a5a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={ICON_STYLE}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5a5a5a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={ICON_STYLE}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.51a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

/* ─── Single contact row — original style ─────────────────────── */
function InfoRow({
  icon,
  text,
  bold = false,
}: {
  icon: React.ReactNode;
  text: string;
  bold?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
      {icon}
      <span
        style={{
          fontSize: "10px",
          color: "#5a5a5a",
          letterSpacing: "0.03em",
          lineHeight: 1.4,
          fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
          fontWeight: bold ? 700 : 400,
          textTransform: "uppercase",
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ─── The letterhead header component ─────────────────────────── */
function LetterheadHeader() {
  return (
    <div
      style={{
        background: "#ffffff",
        width: "100%",
        fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
        position: "relative",
      }}
    >
      {/* TOP RULE — thin double line */}
      <div style={{ height: "4px", background: "#1a1a1a", width: "100%" }} />
      <div style={{ height: "2px", background: "#b09a50", width: "100%" }} />

      {/* MAIN BODY */}
      <div
        style={{
          padding: "28px 44px 24px",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          gap: "0",
          minHeight: "130px",
        }}
      >
        {/* ── LEFT: Logo block ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "8px",
            minWidth: "190px",
            maxWidth: "220px",
          }}
        >
          <img
            src="/siyaphusha-logo-main.png"
            alt="Siyaphusha Consortium"
            style={{
              height: "90px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
            crossOrigin="anonymous"
          />
          <p
            style={{
              fontSize: "7.5px",
              color: "#888",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 600,
              margin: 0,
              paddingLeft: "2px",
            }}
          >
            Consortium (Pty) Ltd
          </p>
        </div>

        {/* ── VERTICAL DIVIDER ── */}
        <div
          style={{
            width: "1px",
            background: "#d0d0d0",
            margin: "0 36px",
            flexShrink: 0,
            alignSelf: "stretch",
          }}
        />

        {/* ── RIGHT: Company details ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "5px",
            flex: 1,
          }}
        >
          {/* Company name */}
          <h1
            style={{
              fontSize: "15.5px",
              fontWeight: 900,
              color: "#111111",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 6px 0",
              lineHeight: 1.1,
              textAlign: "right",
            }}
          >
            Siyaphusha Consortium (Pty) Ltd
          </h1>

          {/* REG + TAX row */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              marginBottom: "2px",
            }}
          >
            <span style={{ fontSize: "8.5px", color: "#444", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <strong style={{ color: "#111", fontWeight: 700 }}>Reg No:&nbsp;</strong>
              2020/048856/07
            </span>
            <span style={{ color: "#ccc", fontSize: "11px" }}>|</span>
            <span style={{ fontSize: "8.5px", color: "#444", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <strong style={{ color: "#111", fontWeight: 700 }}>Tax Ref:&nbsp;</strong>
              9862338176
            </span>
            <span style={{ color: "#ccc", fontSize: "11px" }}>|</span>
            <span style={{ fontSize: "8.5px", color: "#444", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <strong style={{ color: "#111", fontWeight: 700 }}>CIDB:&nbsp;</strong>
              4CE
            </span>
          </div>

          {/* Thin rule under reg info */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#e0e0e0",
              margin: "5px 0",
            }}
          />

          {/* Contact details — aligned right */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "5px",
            }}
          >
            <InfoRow icon={<IconPin />} text="1855 Finca Street, Phola Ogies, Emalahleni 2233 Mpumalanga" />
            <InfoRow icon={<IconMail />} text="info@siyaphushaconsortium.co.za" />
            <InfoRow icon={<IconGlobe />} text="www.siyaphushaconsortium.co.za" bold />
            <InfoRow icon={<IconPhone />} text="073 256 7948  /  073 064 1347" />
          </div>
        </div>
      </div>

      {/* BOTTOM RULE */}
      <div style={{ height: "2px", background: "#b09a50", width: "100%" }} />
      <div style={{ height: "4px", background: "#1a1a1a", width: "100%" }} />
    </div>
  );
}

/* ─── Page wrapper ─────────────────────────────────────────────── */
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
        background: "#e8e8e8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* PAGE LABEL */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <p
          style={{
            color: "#888",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            margin: "0 0 8px",
          }}
        >
          Corporate Identity
        </p>
        <h1
          style={{
            color: "#111",
            fontSize: "clamp(22px, 3vw, 36px)",
            fontWeight: 900,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Official Letterhead
        </h1>
        <div style={{ width: "48px", height: "2px", background: "#b09a50", margin: "12px auto 0" }} />
      </div>

      {/* PAPER PREVIEW */}
      <div
        style={{
          background: "#ffffff",
          boxShadow: "0 4px 6px rgba(0,0,0,0.07), 0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
          maxWidth: "920px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div ref={letterheadRef}>
          <LetterheadHeader />
        </div>

        {/* Faint page body hint */}
        <div
          style={{
            padding: "40px 44px 60px",
            borderTop: "none",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[100, 80, 90, 70, 85].map((w, i) => (
              <div
                key={i}
                style={{
                  height: "1px",
                  background: "#f0f0f0",
                  width: `${w}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <button
          onClick={handleDownload}
          disabled={downloading}
          data-testid="button-download-letterhead"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: downloading ? "#ccc" : "#111111",
            color: "#ffffff",
            border: "none",
            padding: "14px 36px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            cursor: downloading ? "not-allowed" : "pointer",
            boxShadow: downloading ? "none" : "0 4px 20px rgba(0,0,0,0.25)",
          }}
        >
          {downloading ? (
            <Loader2 style={{ width: "14px", height: "14px", animation: "spin 1s linear infinite" }} />
          ) : (
            <Download style={{ width: "14px", height: "14px" }} />
          )}
          {downloading ? "Generating Image..." : "Download Letterhead — PNG"}
        </button>
        <p
          style={{
            color: "#999",
            fontSize: "9px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Exported at 4× resolution · Print-Ready Quality
        </p>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
