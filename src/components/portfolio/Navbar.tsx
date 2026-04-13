import React from "react";

interface NavbarProps {
  scrollY: number;
  tick: number;
  timeStr: string;
  scrollTo: (id: string) => void;
}

export default function Navbar({ scrollY, tick, timeStr, scrollTo }: NavbarProps) {
  const navScrolled = scrollY > 60;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: navScrolled ? "rgba(255,248,240,0.95)" : "#FFF8F0",
      backdropFilter: navScrolled ? "blur(12px)" : "none",
      borderBottom: "2px solid #1a1a1a",
      padding: "0 2.5rem",
      display: "flex", alignItems: "stretch", justifyContent: "space-between",
      transition: "background 0.3s",
      height: "56px",
    }}>
      {/* Logo */}
      <div style={{
        display: "flex", alignItems: "center",
        borderRight: "2px solid #1a1a1a", paddingRight: "2rem", gap: "0.75rem",
      }}>
        <div style={{
          width: 28, height: 28, background: "#D4522A",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 900,
            fontSize: "0.8rem", color: "#FFF8F0", fontStyle: "italic",
          }}>S</span>
        </div>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
          SADIKSHA PRADHAN
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {["About", "Skills", "Projects"].map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l.toLowerCase())}
            style={{
              background: "none", border: "none",
              borderRight: "2px solid #1a1a1a",
              color: "#1a1a1a", cursor: "pointer",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              padding: "0 1.5rem", transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = "#1a1a1a";
              e.currentTarget.style.color = "#FFF8F0";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.color = "#1a1a1a";
            }}
          >{l}</button>
        ))}
      </div>

   
    </nav>
  );
}