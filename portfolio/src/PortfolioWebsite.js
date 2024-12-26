import React, { useState, useEffect } from "react";
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
} from "lucide-react";

// Component for handling section animations
const AnimatedSection = ({ id, className = "", children }) => {
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
      className="section-animate"
      className={`min-h-screen py-20 px-4 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  );
};

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Update active section
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

  const sections = [
    {
      id: "intro",
      title: "Introduction",
      icon: (
        <Users
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
    {
      id: "expertise",
      title: "Expert Insights",
      icon: (
        <Book
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
    {
      id: "membership",
      title: "Professional Membership",
      icon: (
        <Award
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
    {
      id: "experience",
      title: "Global Experience",
      icon: (
        <Globe
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
    {
      id: "panels",
      title: "Judging & Panels",
      icon: (
        <Users
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
    {
      id: "awards",
      title: "Awards",
      icon: (
        <Award
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
    {
      id: "professional",
      title: "Professional Experience",
      icon: (
        <Briefcase
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
    {
      id: "publications",
      title: "Publications",
      icon: (
        <Book
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
    {
      id: "connect",
      title: "Let's Connect",
      icon: (
        <MessageCircle
          className="transition-transform group-hover:scale-110"
          size={20}
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 w-full h-1 bg-blue-600 z-50 transform-origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col fixed h-screen w-64 bg-white border-r border-gray-200 pt-20 shadow-lg">
        <nav className="flex-1 px-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`group flex items-center space-x-2 px-4 py-3 mb-2 rounded-lg transition-all duration-300 ease-in-out ${
                activeSection === section.id
                  ? "bg-blue-50 text-blue-600 shadow-md transform scale-105"
                  : "text-gray-600 hover:bg-gray-50 hover:transform hover:translate-x-2"
              }`}
            >
              {section.icon}
              <span className="transition-colors duration-300">
                {section.title}
              </span>
            </a>
          ))}
        </nav>
      </aside>

      <div className="flex-1 lg:ml-64">
        {/* Mobile Navigation */}
        <nav className="fixed w-full bg-white shadow-md z-40 lg:hidden">
          <div className="px-4">
            <div className="flex justify-between items-center h-16">
              <span className="text-xl font-bold">Portfolio</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-transform duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="px-4 pb-3 animate-slideDown">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 rounded transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.title}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16 lg:pt-0">
          {/* Introduction Section */}
          <AnimatedSection id="intro" className="bg-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
                Hi, I'm <span className="text-blue-600">Your Name</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fadeInUp delay-200">
                AI & Data Science Expert | Senior IEEE Member | Technology
                Advisor
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-fadeInUp delay-300">
                <a
                  href="#"
                  className="hover-lift flex items-center text-gray-600 hover:text-blue-600"
                >
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="hover-lift flex items-center text-gray-600 hover:text-blue-600"
                >
                  <span className="font-medium">Google Scholar</span>
                </a>
                <a
                  href="#"
                  className="hover-lift flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Mail className="mr-2" size={20} />
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Expert Insights Section */}
          <AnimatedSection id="expertise" className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
              {/* Text Content */}
              <div className="w-full lg:w-2/3">
                {/* Hello I'm Section */}
                <div className="mb-6 animate-fadeInUp">
                  <div className="inline-block bg-blue-700 px-6 py-3 mb-2">
                    <h1 className="text-4xl md:text-6xl font-bold">
                      Hello, I'm
                    </h1>
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-6xl font-bold">Ri</h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl animate-fadeInUp delay-200">
                  Visionary global technology leader with over two decades of
                  global experience in Enterprise software, smart cities, smart
                  infrastructure, IoT, and cloud-based solutions. As an
                  award-winning thought leader in smart cities and mobility, I
                  have consistently driven innovation and excellence across
                  various industries. My journey from India to the United States
                  has been marked by significant achievements, strategic vision,
                  and a commitment to transcending urban interaction through
                  advanced technologies.
                </p>

                {/* Social Links */}
                <div className="mt-8 animate-fadeInUp delay-300">
                  <h3 className="text-xl mb-4 flex items-center">
                    Find Me
                    <span className="h-px bg-white/20 w-32 ml-4"></span>
                  </h3>
                  <div className="flex space-x-6">
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <span className="text-green-400 text-2xl">👍</span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <span className="text-white font-serif font-bold">
                          F
                        </span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <span className="text-white">in</span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="hover:scale-110 transition-transform"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <span className="text-white">𝕏</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Add remaining sections following the same pattern... */}

          {/* Contact Section */}
          <AnimatedSection id="connect" className="bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              <form className="space-y-6">
                <div className="hover-lift transition-all duration-300">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
                <div className="hover-lift transition-all duration-300">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
                <div className="hover-lift transition-all duration-300">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </main>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        section {
          scroll-margin-top: 4rem;
        }
      `}</style>
    </div>
  );
};

export default PortfolioWebsite;
