import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CursorGlow from "@/components/common/CursorGlow";
import GalaxyBackground from "@/components/common/GalaxyBackground";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import AboutSection from "@/components/sections/AboutSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TerminalSection from "@/components/sections/TerminalSection";
import ChessSection from "@/components/sections/ChessSection";
import AskAI from "@/components/common/AskAI";
import { Ambience, Marquee } from "@/components/common/Ambience";
import useGsapReveal from "@/hooks/useGsapReveal";

const HomePage = () => {
  const location = useLocation();

  useGsapReveal();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.slice(1);
    const target = document.getElementById(id);

    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <div className="relative overflow-hidden">
      <ScrollProgress />
      <GalaxyBackground />
      <CursorGlow />
      <AskAI />
      <Ambience />
      <div className="relative z-20">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <AchievementsSection />
          <Marquee />
          <TerminalSection />
          <ChessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
