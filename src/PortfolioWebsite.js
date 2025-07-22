import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Award,
  Briefcase,
  Book,
  Users,
  MessageCircle,
  FolderGit,
  Star
} from 'lucide-react';
import {
  ExpertiseSection,
  Header,
  ProfessionalExperienceSection,
  ContactSection,
  IntroductionSection,
  Navbar,
  AnimatedSection,
  ProjectsSection
} from './Components';

import './PortfolioWebsite.css';


const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'intro', title: 'Introduction', icon: <Users size={20} /> },
    { id: 'expertise', title: 'Expert Insights', icon: <Book size={20} /> },
    { id: 'professional', title: 'Professional Experience', icon: <Briefcase size={20} /> },
    { id: 'project', title: 'Projects', icon: <FolderGit size={20} />},
    { id: 'connect', title: "Let's Connect", icon: <MessageCircle size={20} /> }
  ];

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
              <span className="portfolio-title">Portfolio</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-button"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            {isMenuOpen && (
              <div className="mobile-menu">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="mobile-nav-item"
                    onClick={() => setIsMenuOpen(false)}
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
