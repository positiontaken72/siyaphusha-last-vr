import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Download, Loader2 } from "lucide-react";

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
        width: letterheadRef.current.offsetWidth,
        height: letterheadRef.current.offsetHeight,
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
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Page Title */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p
          style={{
            color: "#c9a84c",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Corporate Identity
        </p>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Official Letterhead
        </h1>
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "linear-gradient(90deg, #c9a84c, #f5d98a, #c9a84c)",
            margin: "16px auto 0",
          }}
        />
      </div>

      {/* Preview wrapper — paper shadow */}
      <div
        style={{
          background: "#f4f1ec",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.5)",
          borderRadius: "2px",
          padding: "0",
          maxWidth: "900px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* THE ACTUAL LETTERHEAD — captured by html2canvas */}
        <div
          ref={letterheadRef}
          style={{
            background: "#ffffff",
            width: "100%",
            fontFamily: "'Inter', Arial, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* ── GOLD TOP STRIPE ── */}
          <div
            style={{
              height: "5px",
              background: "linear-gradient(90deg, #b8860b 0%, #f5d98a 40%, #c9a84c 70%, #b8860b 100%)",
              width: "100%",
            }}
          />

          {/* ── MAIN HEADER ── */}
          <div
            style={{
              background: "#0a0a0a",
              padding: "36px 48px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "32px",
              position: "relative",
            }}
          >
            {/* subtle grid texture overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.025) 39px, rgba(255,255,255,0.025) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.025) 39px, rgba(255,255,255,0.025) 40px)",
                pointerEvents: "none",
              }}
            />

            {/* LEFT — Logo + tagline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", zIndex: 1 }}>
              <img
                src="/siyaphusha-logo-white.png"
                alt="Siyaphusha Consortium"
                style={{ height: "68px", width: "auto", display: "block" }}
                crossOrigin="anonymous"
              />
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "1px",
                    background: "linear-gradient(90deg, #c9a84c, transparent)",
                  }}
                />
                <p
                  style={{
                    color: "#c9a84c",
                    fontSize: "8.5px",
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Powering Progress, Responsibly
                </p>
              </div>
            </div>

            {/* VERTICAL DIVIDER */}
            <div
              style={{
                width: "1px",
                height: "80px",
                background: "linear-gradient(180deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
                flexShrink: 0,
                zIndex: 1,
              }}
            />

            {/* RIGHT — Company details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "6px",
                zIndex: 1,
                minWidth: 0,
              }}
            >
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 900,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: 0,
                  lineHeight: 1.1,
                  textAlign: "right",
                }}
              >
                Siyaphusha Consortium (Pty) Ltd
              </h2>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #c9a84c)",
                  margin: "4px 0",
                }}
              />

              {/* Registration badges */}
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      color: "#9a9a9a",
                      fontSize: "7.5px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      margin: "0 0 2px 0",
                    }}
                  >
                    Reg No
                  </p>
                  <p
                    style={{
                      color: "#ffffff",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      margin: 0,
                    }}
                  >
                    2020/048856/07
                  </p>
                </div>
                <div
                  style={{
                    width: "1px",
                    height: "24px",
                    background: "rgba(201,168,76,0.4)",
                  }}
                />
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      color: "#9a9a9a",
                      fontSize: "7.5px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      margin: "0 0 2px 0",
                    }}
                  >
                    Tax Ref
                  </p>
                  <p
                    style={{
                      color: "#ffffff",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      margin: 0,
                    }}
                  >
                    9862338176
                  </p>
                </div>
              </div>

              {/* Contact rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "6px", alignItems: "flex-end" }}>
                <ContactRow icon="📍" text="1855 Finca Street, Phola Ogies, eMalahleni 2233, Mpumalanga" />
                <ContactRow icon="✉" text="info@siyaphushaconsortium.co.za" />
                <ContactRow icon="🌐" text="www.siyaphushaconsortium.co.za" />
                <ContactRow icon="📞" text="073 256 7948  /  073 064 1347" />
              </div>
            </div>
          </div>

          {/* ── BOTTOM ACCENT BAR ── */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #0a0a0a 0%, #c9a84c 30%, #f5d98a 50%, #c9a84c 70%, #0a0a0a 100%)",
              width: "100%",
            }}
          />

          {/* ── WHITE FOOTER STRIP with subtle info ── */}
          <div
            style={{
              background: "#ffffff",
              padding: "10px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                color: "#c0c0c0",
                fontSize: "7px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              B-BBEE Level 1 Contributor · CIDB Grade 4CE · Registered & Compliant
            </p>
            <p
              style={{
                color: "#c9a84c",
                fontSize: "7px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Zero Harm · Zero Defects · Zero Waste
            </p>
          </div>
        </div>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <button
          onClick={handleDownload}
          disabled={downloading}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: downloading
              ? "rgba(201,168,76,0.5)"
              : "linear-gradient(135deg, #c9a84c 0%, #f5d98a 50%, #c9a84c 100%)",
            color: "#0a0a0a",
            border: "none",
            padding: "16px 40px",
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            cursor: downloading ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            boxShadow: downloading
              ? "none"
              : "0 8px 32px rgba(201,168,76,0.4), 0 2px 8px rgba(0,0,0,0.3)",
            borderRadius: "1px",
          }}
        >
          {downloading ? (
            <Loader2 style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} />
          ) : (
            <Download style={{ width: "16px", height: "16px" }} />
          )}
          {downloading ? "Generating High-Res Image..." : "Download Letterhead · PNG (4× Quality)"}
        </button>
        <p
          style={{
            color: "#555",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Exports at 4× resolution for print-ready quality
        </p>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

function ContactRow({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
      <span style={{ fontSize: "9px", lineHeight: 1 }}>{icon}</span>
      <p
        style={{
          color: "#d0d0d0",
          fontSize: "9px",
          fontWeight: 500,
          letterSpacing: "0.03em",
          margin: 0,
          textAlign: "right",
        }}
      >
        {text}
      </p>
    </div>
  );
}
