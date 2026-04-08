import React from "react";

interface ContactSectionProps {
  ctaRef: (node: HTMLElement | null) => void;
  ctaIn: boolean;
}

export default function Contact({ ctaRef, ctaIn }: ContactSectionProps) {
  return (
    <section ref={ctaRef} style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      minHeight: "320px", borderBottom: "2px solid #1a1a1a",
    }}>
      {/* Left: CTA */}
      <div style={{
        padding: "5rem 3rem", borderRight: "2px solid #1a1a1a",
        opacity: ctaIn ? 1 : 0, transform: ctaIn ? "none" : "translateY(24px)",
        transition: "all 0.7s ease",
      }}>
        <div style={{ fontSize: "0.95rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "1.5rem" }}>
          05 — CONTACT
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900,
          lineHeight: 1.15, marginBottom: "2rem",
        }}>
          Let's build something<br />
          <span style={{ fontStyle: "italic", color: "#D4522A" }}>worth remembering.</span>
        </h2>
        <div style={{ display: "flex", gap: "0" }}>
          <a href="mailto:alex@mercer.dev" style={{
            padding: "0.85rem 2rem", background: "#D4522A", color: "#FFF8F0",
            fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.12em", textDecoration: "none",
            border: "2px solid #D4522A", transition: "all 0.15s",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
          }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "#1a1a1a";
              e.currentTarget.style.borderColor = "#1a1a1a";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "#D4522A";
              e.currentTarget.style.borderColor = "#D4522A";
            }}
          >Say Hello →</a>
        </div>
      </div>

      {/* Right: Social links */}
      <div style={{
        background: "#1a1a1a", padding: "5rem 3rem", color: "#FFF8F0",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        opacity: ctaIn ? 1 : 0, transform: ctaIn ? "none" : "translateY(24px)",
        transition: "all 0.7s 0.15s ease",
      }}>
        <div>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#888", marginBottom: "2rem" }}>FIND ME ONLINE</div>
          {[
            ["GitHub", "github.com/Sadiksha101"],
            ["LinkedIn", "linkedin.com/in/sadiksha-pradhan-/"],
          ].map(([platform, handle]) => (
            <div key={platform} style={{
              display: "flex", justifyContent: "space-between",
              padding: "0.8rem 0", borderBottom: "1px solid #333",
              cursor: "pointer", transition: "all 0.15s",
            }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.paddingLeft = "0.5rem";
                const label = e.currentTarget.querySelector<HTMLSpanElement>(".link-label");
                if (label) label.style.color = "#D4522A";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.paddingLeft = "0";
                const label = e.currentTarget.querySelector<HTMLSpanElement>(".link-label");
                if (label) label.style.color = "#FFF8F0";
              }}
            >
              <span className="link-label" style={{ fontSize: "0.78rem", fontWeight: 600, transition: "color 0.15s" }}>{platform}</span>
              <span style={{ fontSize: "0.65rem", color: "#666", letterSpacing: "0.05em" }}>{handle}</span>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem", fontStyle: "italic", color: "#666" }}>
          "Good design is as little design as possible." — Dieter Rams
        </div>
      </div>
    </section>
  );
}
