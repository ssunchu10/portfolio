import React, { useState, useEffect, useRef } from "react";
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
import photo from "./vadane.jpg"
// import Header from "./Header";
import { ExpertiseSection, Header, MembershipSection, PanelsAwardsSection } from "./Components";


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
      className={`min-h-screen py-20 px-4 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
    >
      {children}
    </section>
  );
};

const IntroSection = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const text1 = "Shalmali Patil.";
    const text2 = "Global Tech Leader & Innovator";
    let currentText = "";
    let letterIndex = 0;
    let isTyping = true;
    let isFirstText = true;

    const typeWriter = () => {
      const currentFullText = isFirstText ? text1 : text2;

      if (isTyping) {
        if (letterIndex < currentFullText.length && typingRef.current) {
          currentText += currentFullText[letterIndex];
          typingRef.current.textContent = currentText;
          letterIndex++;
          setTimeout(typeWriter, 500);
        } else {
          isTyping = false;
          setTimeout(typeWriter, 100);
        }
      } else {
        if (letterIndex > 0 && typingRef.current) {
          currentText = currentFullText.substring(0, letterIndex - 1);
          typingRef.current.textContent = currentText;
          letterIndex--;
          setTimeout(typeWriter, 50);
        } else {
          isTyping = true;
          isFirstText = !isFirstText;
          currentText = "";
          letterIndex = 0;
          setTimeout(typeWriter, 500);
        }
      }
    };

    typeWriter();

    return () => {
      clearTimeout(typeWriter);
    };
  }, []);

  return (
    <section className="xl:h-screen w-full relative snap-start 2xl:pt-24 lg:pt-20 pt-16 overflow-hidden bg-black">
      <div className="container mx-auto px-4 h-full xl:py-0 md:py-10 py-6">
        <div className="grid grid-cols-12 items-center h-full">
          {/* Left Content Column */}
          <div className="xl:col-span-7 lg:col-span-8 col-span-12 lg:mt-0 mt-10">
            <div className="flex flex-col">
              {/* Heading */}
              <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-[22px] font-semibold md:!leading-tight !leading-normal 2xl:mb-20 md:mb-8 max-lg:mb-5" data-aos="fade-up">
                <span className="text-primary 2xl:text-8xl lg:text-7xl text-5xl text-[#CDFF00]">
                  Hello, I'm
                </span>
                <br />
                <span
                  ref={typingRef}
                  className="border-r border-gray-400/30 w-0 overflow-hidden whitespace-nowrap text-white"
                >
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/80 !leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                Visionary global technology leader with over two decades of global
                experience in Enterprise software, smart cities, smart infrastructure, IoT, and cloud-based
                solutions. As an award-winning thought leader in smart cities and mobility, I have consistently
                driven innovation and excellence across various industries. My journey from India to the United
                States has been marked by significant achievements, strategic vision, and a commitment to
                transcending urban interaction through advanced technologies.
              </p>
            </div>

            {/* Social Links Section */}
            <div className="flex items-center 2xl:mt-36 md:mt-12 mt-6">
              <span className="bg-black md:px-5 px-3 md:text-lg text-sm block whitespace-nowrap z-10 relative text-white">
                Find Me
              </span>

              {/* Like Button */}
              <div className="relative rounded-full border border-gray-400/30 md:min-w-20 md:h-20 min-w-12 h-12 flex items-center justify-center md:ml-28 ml-10 md:mr-14 mr-7 before:bg-gray-400/80 before:absolute before:h-px before:-right-0 before:top-1/2 before:-translate-y-1/2 before:w-screen before:z-[-1] after:bg-black after:w-full after:h-full after:absolute after:top-0 after:left-0 after:rounded-full after:z-[-1]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.72667 21.4084L12.3433 24.2084C12.81 24.675 13.86 24.9084 14.56 24.9084H18.9933C20.3933 24.9084 21.91 23.8584 22.26 22.4584L25.06 13.9417C25.6433 12.3084 24.5933 10.9084 22.8433 10.9084H18.1767C17.4767 10.9084 16.8933 10.325 17.01 9.50838L17.5933 5.77504C17.8267 4.72504 17.1267 3.55838 16.0767 3.20838C15.1433 2.85838 13.9767 3.32504 13.51 4.02504L8.72667 11.1417" fill="#CDFF00" />
                  <path d="M2.77667 21.4083V9.97497C2.77667 8.34163 3.47667 7.7583 5.11 7.7583H6.27667C7.91 7.7583 8.61 8.34163 8.61 9.97497V21.4083C8.61 23.0416 7.91 23.625 6.27667 23.625H5.11C3.47667 23.625 2.77667 23.0416 2.77667 21.4083Z" fill="#CDFF00" />
                </svg>
              </div>

              {/* Social Icons */}
              <div className="flex items-center">
                {/* Forbes */}
                <a href="https://councils.forbes.com/profile/Rignesh-Soni-Director-Strategic-Development-Metropolis/2d35d678-4ef1-4a0c-bbfe-ad4cccd8342c"
                  className="md:mr-10 mr-8 group">
                  <svg className="w-6 h-6 fill-white group-hover:fill-[#CDFF00] transition-colors" viewBox="0 0 22 26">
                    <path d="M22 7.30113L20.7102 7.68869C19.623 3.87684 17.7016 1.70625 14.3886 1.70625H10.0639C9.82384 4.23922 9.70619 8.15466 9.82384 12.3801L12.7064 12.2249C14.6541 12.2249 15.4753 10.7908 15.9431 8.697H17.0306V17.5094H15.9431C15.4753 15.3766 14.6533 13.9344 12.7064 13.8137L9.82384 13.7751C9.82384 16.9154 9.8616 19.6032 10.0639 21.2314C10.2535 23.5576 10.8859 24.6171 12.5546 24.8369L14.1222 24.9921V26H0V24.9925L1.17576 24.8373C2.80664 24.6045 3.48117 23.5576 3.6664 21.2318C3.9824 17.4326 4.05832 9.31734 3.6664 4.80716C3.4768 2.40338 2.80664 1.43447 1.17576 1.24028L0 1.0465V0H21.9626L22 7.30113Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/rigneshsoni/"
                  className="md:mr-10 mr-8 group">
                  <svg className="w-7 h-7 fill-white group-hover:fill-[#CDFF00] transition-colors" viewBox="0 0 30 30">
                    <path d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a href="https://x.com/rigsme007"
                  className="group">
                  <svg className="w-7 h-7 fill-white group-hover:fill-[#CDFF00] transition-colors" viewBox="0 0 28 26">
                    <path d="M21.9079 0.379883H26.1247L16.9121 10.9092L27.75 25.2373H19.264L12.6175 16.5474L5.01243 25.2373H0.79304L10.6468 13.975L0.25 0.379883H8.95139L14.9592 8.3228L21.9079 0.379883ZM20.4279 22.7134H22.7645L7.68174 2.7713H5.17433L20.4279 22.7134Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="col-span-1 hidden xl:block" />

          {/* Image Column */}
          <div className="lg:col-span-4 col-span-12 max-lg:-order-1 bg-gray-400/10 h-full flex items-end justify-center">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={photo}
                alt="Hero"
                className="2xl:w-full h-full xl:max-h-none max-h-[450px]"
                width="408"
                height="612"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
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

  const sections = [
    { id: "intro", title: "Introduction", icon: <Users className="transition-transform group-hover:scale-110" size={20} /> },
    { id: "expertise", title: "Expert Insights", icon: <Book className="transition-transform group-hover:scale-110" size={20} /> },
    { id: "membership", title: "Professional Membership", icon: <Award className="transition-transform group-hover:scale-110" size={20} /> },
    { id: "experience", title: "Global Experience", icon: <Globe className="transition-transform group-hover:scale-110" size={20} /> },
    { id: "panels", title: "Judging & Panels", icon: <Users className="transition-transform group-hover:scale-110" size={20} /> },
    { id: "awards", title: "Awards", icon: <Award className="transition-transform group-hover:scale-110" size={20} /> },
    { id: "professional", title: "Professional Experience", icon: <Briefcase className="transition-transform group-hover:scale-110" size={20} /> },
    { id: "publications", title: "Publications", icon: <Book className="transition-transform group-hover:scale-110" size={20} /> },
    { id: "connect", title: "Let's Connect", icon: <MessageCircle className="transition-transform group-hover:scale-110" size={20} /> }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black flex">

        {/* Progress bar */}
        <div
          className="fixed top-0 left-0 w-full h-1 bg-[#CDFF00] z-50 transform-origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col fixed h-screen w-64 bg-black border-r border-gray-800 pt-20">
          <nav className="flex-1 px-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`group flex items-center space-x-2 px-4 py-3 mb-2 rounded-lg transition-all duration-300 ease-in-out ${activeSection === section.id
                  ? "bg-gray-800 text-[#CDFF00]"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
                  }`}
              >
                {section.icon}
                <span className="transition-colors duration-300">{section.title}</span>
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex-1 lg:ml-64">
          {/* Mobile Navigation */}
          <nav className="fixed w-full bg-black border-b border-gray-800 shadow-md z-40 lg:hidden">
            <div className="px-4">
              <div className="flex justify-between items-center h-16">
                <span className="text-xl font-bold text-white">Portfolio</span>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white transition-transform duration-300 hover:scale-110"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

            </div>
            {isMenuOpen && (
              <div className="px-4 pb-3 animate-slideDown bg-black">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block py-2 text-gray-400 hover:text-[#CDFF00] hover:bg-gray-900 px-4 rounded transition-all duration-300"
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
            <AnimatedSection id="intro" className="bg-black">
              <IntroSection />
            </AnimatedSection>

            {/* Expert Insights Section */}
            <AnimatedSection id="expertise" className="bg-gray-50">
              <ExpertiseSection />
            </AnimatedSection>

            {/* Professional Membership Section */}
            <AnimatedSection id="membership" className="bg-white">
              <MembershipSection />

            </AnimatedSection>
            {/* Panels & Awards Section */}
            <AnimatedSection id="panels" className="bg-gray-50">
              <PanelsAwardsSection />
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
    </>

  );
};

export default PortfolioWebsite;
