import React from "react";
import Ticker from "./Ticker";
export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "100px 3rem 4rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Large coral gradient circle */}
      <div style={{
        position: "absolute", right: "5%", top: "10%",
        width: "42vw", height: "42vw", borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, rgba(212,82,42,0.18), rgba(212,82,42,0.05) 60%, transparent 80%)",
        border: "1px solid rgba(212,82,42,0.12)",
        animation: "floatSlow 7s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      {/* Small navy circle */}
      <div style={{
        position: "absolute", right: "22%", top: "55%",
        width: "14vw", height: "14vw", borderRadius: "50%",
        border: "1px solid rgba(26,26,26,0.1)",
        background: "rgba(26,26,26,0.03)",
        animation: "floatSlow 5s 1s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      {/* Figma-style frame */}
      <div style={{
        position: "absolute", right: "8%", top: "18%",
        width: "38vw", height: "55vh",
        border: "1px solid rgba(212,82,42,0.15)",
        borderRadius: 16,
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute", top: -22, left: 0,
          fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem",
          color: "#D4522A", opacity: 0.5, letterSpacing: "0.08em",
        }}>hero_frame</div>
        {[["top", "left"], ["top", "right"], ["bottom", "left"], ["bottom", "right"]].map(([v, h], i) => (
          <div key={i} style={{
            position: "absolute",
            [v]: "-4px", [h]: "-4px",
            width: 8, height: 8, borderRadius: "50%",
            background: "#D4522A", opacity: 0.4,
          }} />
        ))}
      </div>

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(200,184,168,0.55) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse at 70% 50%, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 70% 50%, black 30%, transparent 70%)",
      }} />

      {/* Hero content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", borderRadius: 100, overflow: "hidden",
          border: "1px solid rgba(26,26,26,0.12)", marginBottom: "2.5rem",
          opacity: 0, animation: "fadeIn 0.7s 0.1s forwards",
        }}>
          <span style={{
            padding: "0.4rem 1.1rem", background: "rgba(212,82,42,0.1)",
            color: "#D4522A", fontFamily: "'Playfair Display', serif",
            fontSize: "0.95rem", fontStyle: "italic", fontWeight: 700,
          }}>Designer</span>
          <span style={{ padding: "0.4rem 0.5rem", color: "#999", display: "flex", alignItems: "center", fontSize: "0.7rem" }}>×</span>
          <span style={{
            padding: "0.4rem 1.1rem", background: "rgba(26,26,26,0.05)",
            color: "#1a1a1a", fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.72rem", letterSpacing: "0.08em",
          }}>Developer</span>
        </div>

        {/* Headline */}
        <h1 style={{ marginBottom: "2rem", opacity: 0, animation: "fadeIn 0.8s 0.2s forwards" }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(4.5rem, 9vw, 8.5rem)",
            fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.02em", color: "#1a1a1a",
          }}>
            Sadiksha<br />
            <span style={{ color: "#D4522A", fontStyle: "italic" }}>Pradhan</span>
          </div>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
            fontWeight: 400, color: "#1a1a1a",
            letterSpacing: "-0.02em", lineHeight: 1.2,
            marginTop: "1.5rem", opacity: 0.5,
          }}>
            {"<"}Creating beautiful<br />interfaces that work{"/>"}
          </div>
        </h1>

        {/* CTA row */}
        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center",
          opacity: 0, animation: "fadeIn 0.8s 0.5s forwards",
        }}>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.9rem 2rem", background: "#1a1a1a", color: "#FFF8F0",
            fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
            border: "2px solid #1a1a1a", borderRadius: 10, transition: "all 0.2s ease",
          }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "#D4522A";
              e.currentTarget.style.borderColor = "#D4522A";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "#1a1a1a";
              e.currentTarget.style.borderColor = "#1a1a1a";
              e.currentTarget.style.transform = "none";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>

          <a href="https://github.com/Sadiksha101" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.9rem 2rem", background: "transparent", color: "#1a1a1a",
            fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
            border: "2px solid rgba(26,26,26,0.25)", borderRadius: 10, transition: "all 0.2s ease",
          }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.borderColor = "#1a1a1a";
              e.currentTarget.style.background = "rgba(26,26,26,0.06)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.borderColor = "rgba(26,26,26,0.25)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "none";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* Social links */}
         
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        opacity: 0, animation: "fadeIn 1s 1.2s forwards",
      }}>
        <div style={{
          width: 28, height: 44, border: "1.5px solid rgba(26,26,26,0.2)", borderRadius: 14,
          display: "flex", justifyContent: "center", paddingTop: "6px",
        }}>
          <div style={{
            width: 4, height: 8, background: "#D4522A", borderRadius: 4,
            animation: "scrollBob 1.8s ease-in-out infinite",
          }} />
        </div>
      </div>

      {/* Ticker */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Ticker />
      </div>
    </section>
  );
}