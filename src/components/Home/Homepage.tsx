import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "RUGShare",
    label: "Rug Sharing Platform",
    year: "2025/2026",
     role: "UI/UX + Dev",
    desc: "A platform that enables users to generate and share rug designs across digital and print media through customizable links and social-ready content.",
    tags: ["ReactJS", "Figma", "Typescript", "Tailwind"],
    num: "01",
    wide: false,
  },
  {
   title: "My Mosaic",
    label: "Image to Mosaic Tool",
    year: "2024/2025",
    role: "UI/UX + Dev",
    desc: "An interactive platform that reimagines images as detailed mosaics, where each fragment is recreated using unique rug and carpet designs to form a cohesive artwork.",
    tags: ["ReactJS", "Figma", "Typescript", "Tailwind"],
    num: "02",
    wide: true,
  },
  {
    title: "Only1DollarDesigns",
    label: "Design Asset Platform",
    year: "2024",
    role: "UI/UX",
    desc: "Only1DollarDesign offers affordable, customizable and royalty-free designs for rugs and textile use. UI/UX crafted for clear navigation and effortless browsing.",
    tags: ["Figma"],
    num: "03",
    wide: false,
  },
  {
    title: "QaRt",
    label: "Custom QR Experience",
    year: "2024",
    role: "UI/UX",
    desc: "QaRt is a QR code generator that blends functionality with design. UI/UX crafted to make customization intuitive and visually engaging. ",
    tags: ["Figma"],
    num: "04",
    wide: true,
  },
   {
    title: "Ramro Designs",
    label: "Design Asset Platform",
    year: "2024",
    role: "UI/UX + Dev",
    desc: "Ramro Designs is a platform offering curated design collections for rugs, textiles, and interiors, complete with color-separated artwork and usage rights.",
    tags: ["ReactJS", "Figma", "JavaScript", "Tailwind"],
    num: "05",
    wide: false,
  },
];

const SKILLS_DEV = ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "ReactJS",];
const SKILLS_DESIGN = ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing", "Galaincha"];

function useInView(threshold = 0.1): [(node: HTMLElement | null) => void, boolean] {
  const [inView, setInView] = useState(false);
  const obsRef = useRef<IntersectionObserver | null>(null);
  const ref = (node: HTMLElement | null) => {
    if (obsRef.current) obsRef.current.disconnect();
    if (!node) return;
    obsRef.current = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obsRef.current.observe(node);
  };
  return [ref, inView];
}

function Ticker() {
  const items = ["FULL-STACK DEVELOPER", "UI/UX DESIGNER", "DESIGN SYSTEMS", "OPEN TO WORK", "SAN FRANCISCO", "5 YEARS XP", "40+ PROJECTS"];
  const repeated = [...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "2px solid #1a1a1a", borderBottom: "2px solid #1a1a1a", padding: "0.7rem 0", background: "#D4522A", position: "relative" }}>
      <div style={{ display: "flex", gap: "3rem", animation: "ticker 18s linear infinite", whiteSpace: "nowrap" }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.18em", color: "#FFF8F0", display: "inline-flex", alignItems: "center", gap: "1.5rem" }}>
            {item} <span style={{ opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}



export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [tick, setTick] = useState(0);

  const [aboutRef, aboutIn] = useInView();
  const [skillsRef, skillsIn] = useInView();
  const [projRef, projIn] = useInView();
  const [ctaRef, ctaIn] = useInView();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const navScrolled = scrollY > 60;

  return (
    <div style={{ background: "#FFF8F0", color: "#1a1a1a", minHeight: "100vh", fontFamily: "'IBM Plex Mono', monospace" }}>

      {/* NAV */}
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
        <div style={{ display: "flex", alignItems: "center", borderRight: "2px solid #1a1a1a", paddingRight: "2rem", gap: "0.75rem" }}>
          <div style={{ width: 28, height: 28, background: "#D4522A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "0.8rem", color: "#FFF8F0", fontStyle: "italic" }}>S</span>
          </div>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>SADIKSHA PRADHAN</span>
        </div>

        <div style={{ display: "flex", alignItems: "stretch" }}>
          {["About", "Skills", "Projects"].map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{
              background: "none", border: "none", borderRight: "2px solid #1a1a1a",
              color: "#1a1a1a", cursor: "pointer",
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.68rem", fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              padding: "0 1.5rem", transition: "background 0.15s, color 0.15s",
            }}
              // Fix 4: use currentTarget typed as HTMLButtonElement
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

        <div style={{ display: "flex", alignItems: "center", paddingLeft: "2rem", gap: "0.5rem", borderLeft: "2px solid #1a1a1a" }}>
          <span style={{ fontSize: "0.65rem", color: "#999", letterSpacing: "0.1em" }}>SFO</span>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" }}>{timeStr}<span style={{ opacity: tick % 2 === 0 ? 1 : 0, transition: "opacity 0.1s" }}>_</span></span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "100px 3rem 4rem", position: "relative", overflow: "hidden" }}>

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
          {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h], i) => (
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

          {/* Dual pill badge */}
          <div style={{ display: "inline-flex", borderRadius: 100, overflow: "hidden", border: "1px solid rgba(26,26,26,0.12)", marginBottom: "2.5rem", opacity: 0, animation: "fadeIn 0.7s 0.1s forwards" }}>
            <span style={{ padding: "0.4rem 1.1rem", background: "rgba(212,82,42,0.1)", color: "#D4522A", fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontStyle: "italic", fontWeight: 700 }}>Designer</span>
            <span style={{ padding: "0.4rem 0.5rem", color: "#999", display: "flex", alignItems: "center", fontSize: "0.7rem" }}>×</span>
            <span style={{ padding: "0.4rem 1.1rem", background: "rgba(26,26,26,0.05)", color: "#1a1a1a", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.08em" }}>Developer</span>
          </div>

          {/* Headline */}
          <h1 style={{ marginBottom: "2rem", opacity: 0, animation: "fadeIn 0.8s 0.2s forwards" }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(4.5rem, 9vw, 8.5rem)",
              fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.02em",
              color: "#1a1a1a",
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
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", opacity: 0, animation: "fadeIn 0.8s 0.5s forwards" }}>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              padding: "0.9rem 2rem", background: "#1a1a1a", color: "#FFF8F0",
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
              border: "2px solid #1a1a1a", borderRadius: 10,
              transition: "all 0.2s ease",
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
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              padding: "0.9rem 2rem", background: "transparent", color: "#1a1a1a",
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
              border: "2px solid rgba(26,26,26,0.25)", borderRadius: 10,
              transition: "all 0.2s ease",
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            {/* Social links */}
            <div style={{ display: "flex", gap: "0.8rem", marginLeft: "0.5rem" }}>
              {["Dribbble", "Figma", "LinkedIn"].map(s => (
                <a key={s} href="#" style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.62rem",
                  color: "#999", textDecoration: "none", letterSpacing: "0.06em",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = "#D4522A"; }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = "#999"; }}
                >{s}</a>
              ))}
            </div>
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

      {/* ABOUT */}
      <section id="about" ref={aboutRef} style={{ borderBottom: "2px solid #1a1a1a" }}>
        <div style={{ borderBottom: "2px solid #1a1a1a", padding: "1rem 2.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700 }}>02</span>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", fontWeight: 700 }}>ABOUT</span>
          <div style={{ flex: 1, height: 1, background: "#e0d8d0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", minHeight: "520px" }}>
          <div style={{ padding: "4rem 3rem", borderRight: "2px solid #1a1a1a", opacity: aboutIn ? 1 : 0, transform: aboutIn ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
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
               Over the years, I have honed my skills in front-end technologies with frameworks such as React.js and UI/UX design, using tools like Figma. When I’m not designing or coding, I enjoy reading literature and fiction, exploring the vibrant worlds of webtoons and manga, and unwinding with movies and TV shows that spark my imagination.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
            {[
              ["40+", "Projects Shipped", "#FFF8F0"],
              ["12", "Design Awards", "#1a1a1a"],
              ["∞", "Cups of Coffee", "#D4522A"],
            ].map(([num, label, bg], i) => (
              <div key={label} style={{
                padding: "2rem", borderBottom: i < 2 ? "2px solid #1a1a1a" : "none",
                background: bg, color: bg === "#1a1a1a" ? "#FFF8F0" : bg === "#D4522A" ? "#FFF8F0" : "#1a1a1a",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                opacity: aboutIn ? 1 : 0, transform: aboutIn ? "none" : "translateX(24px)",
                transition: `all 0.7s ${i * 0.1 + 0.2}s ease`,
              }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", opacity: 0.5, textTransform: "uppercase" }}>{label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1 }}>{num}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={skillsRef} style={{ borderBottom: "2px solid #1a1a1a" }}>
        <div style={{ borderBottom: "2px solid #1a1a1a", padding: "1rem 2.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700 }}>03</span>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", fontWeight: 700 }}>SKILLS</span>
          <div style={{ flex: 1, height: 1, background: "#e0d8d0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", minHeight: "400px" }}>
          <div style={{ padding: "3rem 2.5rem", borderRight: "2px solid #1a1a1a", opacity: skillsIn ? 1 : 0, transform: skillsIn ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase" }}>Development</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {SKILLS_DEV.map((s) => (
                <div key={s} style={{
                  padding: "0.7rem 0", borderBottom: "1px solid #e0d8d0",
                  fontSize: "0.78rem", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "space-between",
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
                  <span style={{ fontSize: "0.55rem", color: "#ccc", letterSpacing: "0.1em" }}>{"●".repeat(Math.floor(Math.random() * 2) + 4)}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "3rem 2.5rem", borderRight: "2px solid #1a1a1a", opacity: skillsIn ? 1 : 0, transform: skillsIn ? "none" : "translateY(24px)", transition: "all 0.7s 0.1s ease" }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase" }}>Design</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {SKILLS_DESIGN.map((s) => (
                <div key={s} style={{
                  padding: "0.7rem 0", borderBottom: "1px solid #e0d8d0",
                  fontSize: "0.78rem", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "space-between",
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
                  <span style={{ fontSize: "0.55rem", color: "#ccc", letterSpacing: "0.1em" }}>{"●".repeat(Math.floor(Math.random() * 2) + 4)}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "3rem 2.5rem", opacity: skillsIn ? 1 : 0, transform: skillsIn ? "none" : "translateY(24px)", transition: "all 0.7s 0.2s ease" }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase" }}>Tools & Other Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["MySQL", "Git", "Microsoft Office Suite", "Documentation & Presentation",].map(t => (
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

      {/* PROJECTS */}
      <section id="projects" ref={projRef} style={{ borderBottom: "2px solid #1a1a1a" }}>
        <div style={{ borderBottom: "2px solid #1a1a1a", padding: "1rem 2.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700 }}>04</span>
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", fontWeight: 700 }}>SELECTED WORK</span>
          <div style={{ flex: 1, height: 1, background: "#e0d8d0" }} />
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.15em", color: "#999" }}>4 PROJECTS</span>
        </div>

        {PROJECTS.map((p, i) => (
          <div key={p.title}
            onMouseEnter={() => setHoveredProject(i)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              display: "grid", gridTemplateColumns: "80px 1fr 200px 180px",
              borderBottom: "2px solid #1a1a1a", cursor: "pointer",
              background: hoveredProject === i ? "#1a1a1a" : "#FFF8F0",
              color: hoveredProject === i ? "#FFF8F0" : "#1a1a1a",
              // Fix 5: removed invalid `transition2` property
              transition: `background 0.2s ease, color 0.2s ease, opacity 0.6s ${i * 0.08}s ease, transform 0.6s ${i * 0.08}s ease`,
              opacity: projIn ? 1 : 0,
              transform: projIn ? "none" : "translateX(-20px)",
            }}
          >
            <div style={{ padding: "2rem 1.5rem", borderRight: `2px solid ${hoveredProject === i ? "#333" : "#1a1a1a"}`, display: "flex", alignItems: "center", transition: "border-color 0.2s" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 900, fontStyle: "italic", opacity: 0.3 }}>{p.num}</span>
            </div>
            <div style={{ padding: "2rem 2.5rem", borderRight: `2px solid ${hoveredProject === i ? "#333" : "#1a1a1a"}`, transition: "border-color 0.2s" }}>
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
            <div style={{ padding: "2rem", borderRight: `2px solid ${hoveredProject === i ? "#333" : "#1a1a1a"}`, display: "flex", flexDirection: "column", justifyContent: "center", transition: "border-color 0.2s" }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.15em", opacity: 0.4, marginBottom: "0.4rem", textTransform: "uppercase" }}>Role</div>
              <div style={{ fontSize: "0.78rem", fontWeight: 600 }}>{p.role}</div>
            </div>
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end" }}>
              <span style={{ fontSize: "0.65rem", opacity: 0.4, letterSpacing: "0.1em" }}>{p.year}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: hoveredProject === i ? 1 : 0.2, transition: "opacity 0.2s, transform 0.2s", transform: hoveredProject === i ? "rotate(45deg)" : "none" }}>
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section ref={ctaRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "320px", borderBottom: "2px solid #1a1a1a" }}>
        <div style={{ padding: "5rem 3rem", borderRight: "2px solid #1a1a1a", opacity: ctaIn ? 1 : 0, transform: ctaIn ? "none" : "translateY(24px)", transition: "all 0.7s ease" }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "1.5rem" }}>05 — CONTACT</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "2rem" }}>
            Let's build something<br /><span style={{ fontStyle: "italic", color: "#D4522A" }}>worth remembering.</span>
          </h2>
          <div style={{ display: "flex", gap: "0" }}>
            <a href="mailto:alex@mercer.dev" style={{
              padding: "0.85rem 2rem", background: "#D4522A", color: "#FFF8F0",
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", fontWeight: 600,
              letterSpacing: "0.12em", textDecoration: "none", border: "2px solid #D4522A",
              transition: "all 0.15s", display: "inline-flex", alignItems: "center", gap: "0.5rem",
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
        <div style={{ background: "#1a1a1a", padding: "5rem 3rem", color: "#FFF8F0", display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: ctaIn ? 1 : 0, transform: ctaIn ? "none" : "translateY(24px)", transition: "all 0.7s 0.15s ease" }}>
          <div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#888", marginBottom: "2rem" }}>FIND ME ONLINE</div>
            {[["GitHub", "github.com/alexmercer"], ["Dribbble", "dribbble.com/alexmercer"], ["LinkedIn", "linkedin.com/in/alexmercer"], ["Twitter", "@alexmercer"]].map(([platform, handle]) => (
              <div key={platform} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0", borderBottom: "1px solid #333", cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.paddingLeft = "0.5rem";
                  // Fix 6: querySelector result must be cast + null-checked
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

      {/* Footer */}
      <footer style={{ padding: "1.2rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.12em", color: "#999" }}>© 2025 ALEX MERCER</span>
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.12em", color: "#999" }}>DESIGNED & BUILT WITH INTENT</span>
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.12em", color: "#D4522A" }}>V3 — BRUTALIST EDITION</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(1deg); }
        }
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.4; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #FFF8F0; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb:hover { background: #D4522A; }
        ::selection { background: #D4522A; color: #FFF8F0; }
      `}</style>
    </div>
  );
}