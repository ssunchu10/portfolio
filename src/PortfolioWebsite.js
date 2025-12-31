import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Briefcase,
  Book,
  Users,
  MessageCircle,
  FolderGit,
} from "lucide-react";
import {
  ExpertiseSection,
  Header,
  ProfessionalExperienceSection,
  ContactSection,
  IntroductionSection,
  Navbar,
  AnimatedSection,
  ProjectsSection,
} from "./Components";

import "./PortfolioWebsite.css";

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open and allow Escape key to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
      window.addEventListener("keydown", onKey);
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const sections = [
    { id: "intro", title: "Introduction", icon: <Users size={20} /> },
    { id: "expertise", title: "Expert Insights", icon: <Book size={20} /> },
    {
      id: "professional",
      title: "Professional Experience",
      icon: <Briefcase size={20} />,
    },
    { id: "project", title: "Projects", icon: <FolderGit size={20} /> },
    {
      id: "connect",
      title: "Let's Connect",
      icon: <MessageCircle size={20} />,
    },
  ];

  const handleMobileNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const sectionEl = document.getElementById(sectionId);
    if (!sectionEl) return;

    if (sectionId === "intro" && window.innerWidth < 768) {
      const imageContainer = sectionEl.querySelector(".image-container");
      const imageHeight = imageContainer ? imageContainer.offsetHeight : 0;
      const sectionTop =
        sectionEl.getBoundingClientRect().top + window.pageYOffset;
      const target = sectionTop + imageHeight;
      window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      const sectionTop =
        sectionEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="portfolio-container">
        <div
          className="fixed top-0 left-0 w-full h-1 bg-[#CDFF00] z-50 transform-origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        <Navbar activeSection={activeSection} sections={sections} />

        <div className="main-content">
          <nav className="mobile-nav">
            <div className="mobile-nav-header">
              <a
                href="#intro"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("intro");
                }}
                className="flex items-start rtl:space-x-reverse flex-col"
              >
                <span className="text-xl font-semibold uppercase text-white">
                  <span className="text-[#CDFF00]">Sumit</span> Sunchu
                </span>
                <span className="text-xs tracking-[4px] uppercase text-gray-400">
                  Engineer
                </span>
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`menu-button ${isMenuOpen ? "open" : ""}`}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            {isMenuOpen && (
              <div
                id="mobile-menu"
                className="mobile-menu animate-slideDown"
                role="menu"
              >
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="mobile-nav-item"
                    onClick={(e) => handleMobileNavClick(e, section.id)}
                    role="menuitem"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            )}
          </nav>

          <main className="content">
            <AnimatedSection id="intro" className="bg-black">
              <IntroductionSection />
            </AnimatedSection>
            <AnimatedSection id="expertise" className="bg-black">
              <ExpertiseSection />
            </AnimatedSection>
            <AnimatedSection id="professional" className="bg-black">
              <ProfessionalExperienceSection />
            </AnimatedSection>
            <AnimatedSection id="project" className="bg-black">
              <ProjectsSection />
            </AnimatedSection>
            <AnimatedSection id="connect" className="bg-black">
              <ContactSection />
            </AnimatedSection>
          </main>
        </div>
      </div>
    </>
  );
};

export default PortfolioWebsite;
