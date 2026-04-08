import { PROJECTS } from "./Data";

interface ProjectsSectionProps {
  projRef: (node: HTMLElement | null) => void;
  projIn: boolean;
  hoveredProject: number | null;
  setHoveredProject: (i: number | null) => void;
}

export default function Projects({ projRef, projIn, hoveredProject, setHoveredProject }: ProjectsSectionProps) {
  return (
    <section id="projects" ref={projRef} style={{ borderBottom: "2px solid #1a1a1a" }}>
      {/* Section header */}
      <div style={{
        borderBottom: "2px solid #1a1a1a", padding: "1rem 2.5rem",
        display: "flex", alignItems: "center", gap: "1.5rem",
      }}>
        <span style={{ fontSize: "0.95rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700 }}>04</span>
        <span style={{ fontSize: "0.95rem", letterSpacing: "0.2em", fontWeight: 700 }}>SELECTED WORK</span>
        <div style={{ flex: 1, height: 1, background: "#e0d8d0" }} />
        <span style={{ fontSize: "0.95rem", letterSpacing: "0.15em", color: "#999" }}>5 PROJECTS</span>
      </div>

    {PROJECTS.map((p, i) => (
  <a
    key={p.title}
    href={p.url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div
      onMouseEnter={() => setHoveredProject(i)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 200px 180px",
        borderBottom: "2px solid #1a1a1a",
        cursor: "pointer",
        background: hoveredProject === i ? "#1a1a1a" : "#FFF8F0",
        color: hoveredProject === i ? "#FFF8F0" : "#1a1a1a",
        transition: `background 0.2s ease, color 0.2s ease, opacity 0.6s ${i * 0.08}s ease, transform 0.6s ${i * 0.08}s ease`,
        opacity: projIn ? 1 : 0,
        transform: projIn ? "none" : "translateX(-20px)",
      }}
    >
          {/* Number */}
          <div style={{
            padding: "2rem 1.5rem",
            borderRight: `2px solid ${hoveredProject === i ? "#333" : "#1a1a1a"}`,
            display: "flex", alignItems: "center", transition: "border-color 0.2s",
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif", fontSize: "1.1rem",
              fontWeight: 900, fontStyle: "italic", opacity: 0.3,
            }}>{p.num}</span>
          </div>

          {/* Title + description + tags */}
          <div style={{
            padding: "2rem 2.5rem",
            borderRight: `2px solid ${hoveredProject === i ? "#333" : "#1a1a1a"}`,
            transition: "border-color 0.2s",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.6rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 900, lineHeight: 1 }}>{p.title}</h3>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", opacity: 0.5, fontStyle: "italic" }}>— {p.label}</span>
            </div>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.7, opacity: 0.6, maxWidth: "480px", marginBottom: "1rem" }}>{p.desc}</p>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontSize: "0.6rem", padding: "0.2rem 0.6rem", letterSpacing: "0.1em",
                  border: `1.5px solid ${hoveredProject === i ? "rgba(255,248,240,0.3)" : "rgba(26,26,26,0.25)"}`,
                  transition: "border-color 0.2s",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Role */}
          <div style={{
            padding: "2rem",
            borderRight: `2px solid ${hoveredProject === i ? "#333" : "#1a1a1a"}`,
            display: "flex", flexDirection: "column", justifyContent: "center",
            transition: "border-color 0.2s",
          }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.15em", opacity: 0.4, marginBottom: "0.4rem", textTransform: "uppercase" }}>Role</div>
            <div style={{ fontSize: "0.78rem", fontWeight: 600 }}>{p.role}</div>
          </div>

          {/* Year + arrow */}
          <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
            <span style={{ fontSize: "0.65rem", opacity: 0.4, letterSpacing: "0.1em" }}>{p.year}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{
              opacity: hoveredProject === i ? 1 : 0.2,
              transition: "opacity 0.2s, transform 0.2s",
              transform: hoveredProject === i ? "rotate(45deg)" : "none",
            }}>
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </div>
        </div>
        </a>
      ))}
    </section>
  );
}