import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "Lyra",
    label: "Music Dashboard",
    year: "2024",
    role: "UI/UX + Dev",
    desc: "Real-time audio visualization, AI playlisting, 200-component design system. 80k MAU.",
    tags: ["React", "D3.js", "Node.js", "Figma"],
    num: "01",
    wide: true,
  },
  {
    title: "Arcane",
    label: "AR Commerce",
    year: "2024",
    role: "UX Design",
    desc: "End-to-end AR shopping UX. 40+ interviews, WCAG AA, 500k users.",
    tags: ["Figma", "AR/VR", "Research"],
    num: "02",
    wide: false,
  },
  {
    title: "Forge",
    label: "Dev Toolkit",
    year: "2023",
    role: "Full Stack",
    desc: "Open-source CLI + web app. Scaffolds React/TS with CI/CD & Figma token sync.",
    tags: ["TypeScript", "Next.js", "CLI"],
    num: "03",
    wide: false,
  },
  {
    title: "Pulse",
    label: "Health Tracker",
    year: "2023",
    role: "UI/UX + Dev",
    desc: "Biometric sync, AI health summaries, WCAG AAA adaptive dark UI.",
    tags: ["React Native", "AI/ML", "iOS"],
    num: "04",
    wide: true,
  },
];

const SKILLS_DEV = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "GraphQL", "Docker", "AWS"];
const SKILLS_DESIGN = ["Figma", "Design Systems", "Prototyping", "User Research", "Motion Design", "Accessibility", "Wireframing", "Adobe XD"];

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



export default function Portfolio() {
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
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "0.8rem", color: "#FFF8F0", fontStyle: "italic" }}>A</span>
          </div>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>ALEX MERCER</span>
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
      <section style={{ paddingTop: "56px", minHeight: "100vh", borderBottom: "2px solid #1a1a1a", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "2px solid #1a1a1a", flex: 1 }}>
          <div style={{ padding: "4rem 3rem", borderRight: "2px solid #1a1a1a", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#999", marginBottom: "2.5rem", opacity: 0, animation: "fadeIn 0.6s 0.1s forwards" }}>
                PORTFOLIO — 2025
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(4rem, 8vw, 7.5rem)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.02em", marginBottom: "2rem", opacity: 0, animation: "fadeIn 0.7s 0.2s forwards" }}>
                Alex<br />
                <span style={{ color: "#D4522A", fontStyle: "italic" }}>Mercer</span>
              </h1>
              <p style={{ fontSize: "0.78rem", lineHeight: 1.9, color: "#555", maxWidth: "380px", opacity: 0, animation: "fadeIn 0.7s 0.35s forwards" }}>
                Full-stack developer & UI/UX designer building things that work beautifully. Five years of shipping products at the intersection of code and craft.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0", marginTop: "3rem", opacity: 0, animation: "fadeIn 0.7s 0.5s forwards" }}>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                padding: "0.85rem 1.8rem", background: "#1a1a1a", color: "#FFF8F0",
                fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
                border: "2px solid #1a1a1a", transition: "all 0.15s",
              }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.background = "#D4522A";
                  e.currentTarget.style.borderColor = "#D4522A";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.background = "#1a1a1a";
                  e.currentTarget.style.borderColor = "#1a1a1a";
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                padding: "0.85rem 1.8rem", background: "#FFF8F0", color: "#1a1a1a",
                fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
                border: "2px solid #1a1a1a", borderLeft: "none", transition: "all 0.15s",
              }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.background = "#1a1a1a";
                  e.currentTarget.style.color = "#FFF8F0";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.background = "#FFF8F0";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
            <div style={{ borderBottom: "2px solid #1a1a1a", borderRight: "2px solid #1a1a1a", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: 0, animation: "fadeIn 0.6s 0.3s forwards" }}>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase" }}>Role</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, fontStyle: "italic", marginBottom: "0.3rem" }}>Developer</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, fontStyle: "italic", color: "#D4522A" }}>+ Designer</div>
              </div>
            </div>
            <div style={{ borderBottom: "2px solid #1a1a1a", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1a1a1a", color: "#FFF8F0", opacity: 0, animation: "fadeIn 0.6s 0.4s forwards" }}>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#888", textTransform: "uppercase" }}>Status</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "breathe 2s ease-in-out infinite" }} />
                  <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>Available</span>
                </div>
                <div style={{ fontSize: "0.62rem", color: "#888", letterSpacing: "0.08em" }}>OPEN TO ROLES</div>
              </div>
            </div>
            <div style={{ borderRight: "2px solid #1a1a1a", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: 0, animation: "fadeIn 0.6s 0.5s forwards" }}>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase" }}>Base</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 900 }}>SFO</div>
                <div style={{ fontSize: "0.62rem", color: "#999", letterSpacing: "0.08em" }}>SAN FRANCISCO, CA</div>
              </div>
            </div>
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#D4522A", color: "#FFF8F0", opacity: 0, animation: "fadeIn 0.6s 0.6s forwards" }}>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(255,248,240,0.6)", textTransform: "uppercase" }}>Experience</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>5+</div>
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.08em", opacity: 0.7 }}>YEARS SHIPPING</div>
              </div>
            </div>
          </div>
        </div>

        <Ticker />
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
                I'm a hybrid designer-developer who's allergic to handoff friction. For 5+ years I've shipped consumer apps and SaaS products owning the full arc — from discovery workshops to production deploy.
              </p>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.9, color: "#555" }}>
                My sweet spot is building design systems that engineering teams actually love using — component libraries that are simultaneously pixel-perfect and developer-friendly.
              </p>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.9, color: "#555" }}>
                Previously at Stripe (Sr. Product Designer) and Linear (Frontend Engineer). Stanford CS & HCI grad. Currently open to senior IC and founding-team opportunities.
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
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#D4522A", fontWeight: 700, marginBottom: "2rem", textTransform: "uppercase" }}>Stack & Tools</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Vercel", "Storybook", "Playwright", "Prisma", "Redis", "Framer", "WebGL", "Three.js", "Lottie", "Jest", "Swift", "Kotlin"].map(t => (
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
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic" }}>Rust & WASM</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic" }}>AI / ML Pipelines</div>
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
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #FFF8F0; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb:hover { background: #D4522A; }
        ::selection { background: #D4522A; color: #FFF8F0; }
      `}</style>
    </div>
  );
}