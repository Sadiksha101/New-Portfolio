import React from "react";
import { SKILLS_DEV, SKILLS_DESIGN } from "./Data";

interface SkillsSectionProps {
  skillsRef: (node: HTMLElement | null) => void;
  skillsIn: boolean;
}

export default function Skills({ skillsRef, skillsIn }: SkillsSectionProps) {
  return (
    <section id="skills" ref={skillsRef} style={{ borderBottom: "2px solid #1a1a1a" }}>
      {/* Section header */}
      <div style={{
        borderBottom: "2px solid #1a1a1a", padding: "1rem 2.5rem",
        display: "flex", alignItems: "center", gap: "1.5rem",
      }}>
        <span style={{ fontSize: "0.95rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700 }}>03</span>
        <span style={{ fontSize: "0.95rem", letterSpacing: "0.2em", fontWeight: 700 }}>SKILLS</span>
        <div style={{ flex: 1, height: 1, background: "#e0d8d0" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", minHeight: "400px" }}>
        {/* Development */}
        <div style={{
          padding: "3rem 2.5rem", borderRight: "2px solid #1a1a1a",
          opacity: skillsIn ? 1 : 0, transform: skillsIn ? "none" : "translateY(24px)",
          transition: "all 0.7s ease",
        }}>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase" }}>Development</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {SKILLS_DEV.map((s) => (
              <div key={s} style={{
                padding: "0.7rem 0", borderBottom: "1px solid #e0d8d0",
                fontSize: "0.78rem", fontWeight: 500,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                transition: "all 0.15s", cursor: "default",
              }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.paddingLeft = "0.5rem";
                  e.currentTarget.style.color = "#D4522A";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
              >
                <span>{s}</span>
                <span style={{ fontSize: "0.55rem", color: "#ccc", letterSpacing: "0.1em" }}>
                  {"●".repeat(Math.floor(Math.random() * 2) + 4)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Design */}
        <div style={{
          padding: "3rem 2.5rem", borderRight: "2px solid #1a1a1a",
          opacity: skillsIn ? 1 : 0, transform: skillsIn ? "none" : "translateY(24px)",
          transition: "all 0.7s 0.1s ease",
        }}>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase" }}>Design</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {SKILLS_DESIGN.map((s) => (
              <div key={s} style={{
                padding: "0.7rem 0", borderBottom: "1px solid #e0d8d0",
                fontSize: "0.78rem", fontWeight: 500,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                transition: "all 0.15s", cursor: "default",
              }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.paddingLeft = "0.5rem";
                  e.currentTarget.style.color = "#D4522A";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
              >
                <span>{s}</span>
                <span style={{ fontSize: "0.55rem", color: "#ccc", letterSpacing: "0.1em" }}>
                  {"●".repeat(Math.floor(Math.random() * 2) + 4)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Other */}
        <div style={{
          padding: "3rem 2.5rem",
          opacity: skillsIn ? 1 : 0, transform: skillsIn ? "none" : "translateY(24px)",
          transition: "all 0.7s 0.2s ease",
        }}>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase" }}>Tools & Other Skills</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["MySQL", "Git", "Microsoft Office Suite", "Documentation & Presentation"].map(t => (
              <span key={t} style={{
                padding: "0.35rem 0.75rem", border: "1.5px solid #1a1a1a",
                fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.06em",
                transition: "all 0.15s", cursor: "default",
              }}
                onMouseEnter={(e: React.MouseEvent<HTMLSpanElement>) => {
                  e.currentTarget.style.background = "#1a1a1a";
                  e.currentTarget.style.color = "#FFF8F0";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLSpanElement>) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
              >{t}</span>
            ))}
          </div>
          <div style={{ marginTop: "3rem", padding: "1.5rem", background: "#D4522A", color: "#FFF8F0" }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", opacity: 0.7, marginBottom: "0.5rem" }}>CURRENTLY LEARNING</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic" }}>R Programming Language</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic" }}>for data analysis</div>
          </div>
        </div>
      </div>
    </section>
  );
}