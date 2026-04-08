import { useState, useEffect } from "react";
import { useInView } from "./Hooks";
import GlobalStyles from "./Globalstyles";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import AboutSection from "./About";
import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";
import ContactSection from "./Contact";
import Footer from "./Footer";

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

  return (
    <div style={{ background: "#FFF8F0", color: "#1a1a1a", minHeight: "100vh", fontFamily: "'IBM Plex Mono', monospace" }}>
      <GlobalStyles />

      <Navbar
        scrollY={scrollY}
        tick={tick}
        timeStr={timeStr}
        scrollTo={scrollTo}
      />

      <HeroSection />

      <AboutSection
        aboutRef={aboutRef}
        aboutIn={aboutIn}
      />

      <SkillsSection
        skillsRef={skillsRef}
        skillsIn={skillsIn}
      />

      <ProjectsSection
        projRef={projRef}
        projIn={projIn}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
      />

      <ContactSection
        ctaRef={ctaRef}
        ctaIn={ctaIn}
      />

      <Footer />
    </div>
  );
}