import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Mail,
  ExternalLink,
  Award,
  Briefcase,
  Book,
  Users,
  Globe,
  MessageCircle,
  Star
} from 'lucide-react';
// import photo from './vadane.jpg';
// import Header from "./Header";
import {
  ExpertiseSection,
  Header,
  MembershipSection,
  JudgeAndPanelSection,
  PublicationsSection,
  ProfessionalExperienceSection,
  ContactSection,
  AwardsSection,
  RecognitionSection,
  IntroductionSection,
  Navbar
} from './Components';

import './PortfolioWebsite.css';

// Component for handling section animations
const AnimatedSection = ({ id, className = '', children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [id]);

  return (
    <section
      id={id}
      className={`min-h-screen py-20 px-4 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </section>
  );
};

// const PortfolioWebsite = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('intro');
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const winScroll = document.documentElement.scrollTop;
//       const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const scrolled = (winScroll / height) * 100;
//       setScrollProgress(scrolled);

//       const sections = document.querySelectorAll('section');
//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 150 && rect.bottom >= 150) {
//           setActiveSection(section.id);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const sections = [
//     {
//       id: 'intro',
//       title: 'Introduction',
//       icon: <Users className="transition-transform group-hover:scale-110" size={20} />
//     },
//     {
//       id: 'expertise',
//       title: 'Expert Insights',
//       icon: <Book className="transition-transform group-hover:scale-110" size={20} />
//     },
//     {
//       id: 'membership',
//       title: 'Professional Membership',
//       icon: <Award className="transition-transform group-hover:scale-110" size={20} />
//     },
//     // {
//     //   id: 'experience',
//     //   title: 'Global Experience',
//     //   icon: <Globe className="transition-transform group-hover:scale-110" size={20} />
//     // },
//     {
//       id: 'recognitions',
//       title: 'Recognitions',
//       icon: <Star className="transition-transform group-hover:scale-110" size={20} />
//     },
//     {
//       id: 'panels',
//       title: 'Judging & Panels',
//       icon: <Users className="transition-transform group-hover:scale-110" size={20} />
//     },
//     {
//       id: 'awards',
//       title: 'Awards',
//       icon: <Award className="transition-transform group-hover:scale-110" size={20} />
//     },
//     {
//       id: 'professional',
//       title: 'Professional Experience',
//       icon: <Briefcase className="transition-transform group-hover:scale-110" size={20} />
//     },
//     {
//       id: 'publications',
//       title: 'Publications',
//       icon: <Book className="transition-transform group-hover:scale-110" size={20} />
//     },
//     {
//       id: 'connect',
//       title: "Let's Connect",
//       icon: <MessageCircle className="transition-transform group-hover:scale-110" size={20} />
//     }
//   ];

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-black flex">
//         {/* Progress bar */}
//         <div
//           className="fixed top-0 left-0 w-full h-1 bg-[#CDFF00] z-50 transform-origin-left"
//           style={{ transform: `scaleX(${scrollProgress / 100})` }}
//         />

//         {/* Sidebar Navigation */}
//         {/* <aside className="hidden lg:flex flex-col fixed h-screen w-64 bg-black border-r border-gray-800 pt-20">
//           <nav className="flex-1 px-4">
//             {sections.map((section) => (
//               <a
//                 key={section.id}
//                 href={`#${section.id}`}
//                 className={`group flex items-center space-x-2 px-4 py-3 mb-2 rounded-lg transition-all duration-300 ease-in-out ${
//                   activeSection === section.id
//                     ? 'bg-gray-800 text-[#CDFF00]'
//                     : 'text-gray-400 hover:bg-gray-900 hover:text-white'
//                 }`}
//               >
//                 {section.icon}
//                 <span className="transition-colors duration-300">{section.title}</span>
//               </a>
//             ))}
//           </nav>
//         </aside> */}
//         <Navbar activeSection={activeSection} sections={sections} />

//         <div className="flex-1 lg:ml-64">
//           {/* Mobile Navigation */}
//           <nav className="fixed w-full bg-black border-b border-gray-800 shadow-md z-40 lg:hidden">
//             <div className="px-4">
//               <div className="flex justify-between items-center h-16">
//                 <span className="text-xl font-bold text-white">Portfolio</span>
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="text-white transition-transform duration-300 hover:scale-110"
//                 >
//                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//               </div>
//             </div>
//             {isMenuOpen && (
//               <div className="px-4 pb-3 animate-slideDown bg-black">
//                 {sections.map((section) => (
//                   <a
//                     key={section.id}
//                     href={`#${section.id}`}
//                     className="block py-2 text-gray-400 hover:text-[#CDFF00] hover:bg-gray-900 px-4 rounded transition-all duration-300"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {section.title}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </nav>

//           {/* Main Content */}
//           <main className="pt-16 lg:pt-0">
//             <AnimatedSection id="intro" className="bg-black">
//               <IntroductionSection />
//             </AnimatedSection>

//             {/* Expert Insights Section */}
//             <AnimatedSection id="expertise" className="bg-black">
//               <ExpertiseSection />
//             </AnimatedSection>

//             {/* Professional Membership Section */}
//             <AnimatedSection id="membership" className="bg-black">
//               <MembershipSection />
//             </AnimatedSection>
//             {/* Recognitions */}

//             <AnimatedSection id={'recognitions'} className="bg-black">
//               <RecognitionSection></RecognitionSection>
//             </AnimatedSection>
//             {/* Judging and Panel Section */}
//             <AnimatedSection id="panels" className="bg-black">
//               <JudgeAndPanelSection />
//             </AnimatedSection>

//             {/* Awards*/}

//             <AnimatedSection id={'awards'} className="bg-black">
//               <AwardsSection></AwardsSection>
//             </AnimatedSection>

//             {/* professional expereince*/}

//             <AnimatedSection id={'professional'} className="bg-black">
//               <ProfessionalExperienceSection></ProfessionalExperienceSection>
//             </AnimatedSection>

//             {/* Publications */}

//             <AnimatedSection id={'publications'} className="bg-black">
//               <PublicationsSection></PublicationsSection>
//             </AnimatedSection>

//             {/* Contacts */}

//             <AnimatedSection id={'connect'} className="bg-black">
//               <ContactSection></ContactSection>
//             </AnimatedSection>
//           </main>
//         </div>

//         {/* <style jsx>{`
//           @keyframes slideDown {
//             from {
//               opacity: 0;
//               transform: translateY(-10px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes fadeInUp {
//             from {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .animate-slideDown {
//             animation: slideDown 0.3s ease-out forwards;
//           }

//           .animate-fadeInUp {
//             animation: fadeInUp 0.6s ease-out forwards;
//           }

//           .delay-200 {
//             animation-delay: 0.2s;
//           }

//           .delay-300 {
//             animation-delay: 0.3s;
//           }

//           .hover-lift {
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//           }

//           .hover-lift:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//           }

//           section {
//             scroll-margin-top: 4rem;
//           }
//         `}</style> */}
//       </div>
//     </>
//   );
// };

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
    { id: 'membership', title: 'Professional Membership', icon: <Award size={20} /> },
    { id: 'recognitions', title: 'Recognitions', icon: <Star size={20} /> },
    { id: 'panels', title: 'Judging & Panels', icon: <Users size={20} /> },
    { id: 'awards', title: 'Awards', icon: <Award size={20} /> },
    { id: 'professional', title: 'Professional Experience', icon: <Briefcase size={20} /> },
    { id: 'publications', title: 'Publications', icon: <Book size={20} /> },
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
            <AnimatedSection id="membership" className="bg-black">
              <MembershipSection />
            </AnimatedSection>
            <AnimatedSection id="recognitions" className="bg-black">
              <RecognitionSection />
            </AnimatedSection>
            <AnimatedSection id="panels" className="bg-black">
              <JudgeAndPanelSection />
            </AnimatedSection>
            <AnimatedSection id="awards" className="bg-black">
              <AwardsSection />
            </AnimatedSection>
            <AnimatedSection id="professional" className="bg-black">
              <ProfessionalExperienceSection />
            </AnimatedSection>
            <AnimatedSection id="publications" className="bg-black">
              <PublicationsSection />
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
