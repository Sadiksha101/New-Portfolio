import about from "../../assets/About.png"
interface AboutSectionProps {
  aboutRef: (node: HTMLElement | null) => void;
  aboutIn: boolean;
}

export default function About({ aboutRef, aboutIn }: AboutSectionProps) {
  return (
    <section id="about" ref={aboutRef} style={{ borderBottom: "2px solid #1a1a1a" }}>
      {/* Section header */}
      <div style={{
        borderBottom: "2px solid #1a1a1a", padding: "1rem 2.5rem",
        display: "flex", alignItems: "center", gap: "1.5rem",
      }}>
        <span style={{ fontSize: "0.95rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700 }}>02</span>
        <span style={{ fontSize: "0.95rem", letterSpacing: "0.2em", fontWeight: 700 }}>ABOUT</span>
        <div style={{ flex: 1, height: 1, background: "#e0d8d0" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", minHeight: "520px" }}>
        {/* Text content */}
        <div style={{
          padding: "4rem 3rem", borderRight: "2px solid #1a1a1a",
          opacity: aboutIn ? 1 : 0,
          transform: aboutIn ? "none" : "translateY(24px)",
          transition: "all 0.7s ease",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900,
            lineHeight: 1.1, marginBottom: "2.5rem", letterSpacing: "-0.02em",
          }}>
            I think in systems,<br />design in <span style={{ color: "#D4522A", fontStyle: "italic" }}>moments.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem 3rem" }}>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.9, color: "#555", gridColumn: "1 / -1", marginBottom: "0.5rem" }}>
              I'm a hybrid designer-developer with a strong knack for creating intuitive and visually appealing user interfaces.
            </p>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.9, color: "#555" }}>
              With a deep interest in both front-end development and UI/UX design, I focus on crafting digital solutions that are not only functional but also user-friendly and aesthetically pleasing. I love learning and exploring new technologies.
            </p>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.9, color: "#555" }}>
              Over the years, I have honed my skills in front-end technologies with frameworks such as React.js and UI/UX design, using tools like Figma. When I'm not designing or coding, I enjoy reading literature and fiction, exploring the vibrant worlds of webtoons and manga, and unwinding with movies and TV shows that spark my imagination.
            </p>
          </div>
        </div>
{/* Image column */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FFF8F0",
    padding: "2rem",
    opacity: aboutIn ? 1 : 0,
    transform: aboutIn ? "none" : "translateX(24px)",
    transition: "all 0.7s ease",
  }}
>
  <img
    src={about}
    alt="About"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      border: "2px solid #1a1a1a",
    }}
  />
</div>
      </div>
    </section>
  );
}