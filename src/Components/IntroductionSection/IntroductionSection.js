import React, { useState, useEffect, useRef } from "react";
import { Linkedin, Instagram, Github } from "lucide-react";
import photo from "./sumit_photo.jpg";
import "./IntroductionSection.css";

const IntroductionSection = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeName = (text, ref, delay, callback) => {
      let i = 0;
      ref.current.textContent = "";
      const interval = setInterval(() => {
        if (i < text.length) {
          ref.current.textContent = text.slice(0, i + 1);
          i++;
        } else {
          clearInterval(interval);
          if (callback) callback();
        }
      }, delay);
    };

    typeName("Sumit Sunchu", nameRef, 150, () => {
      setTimeout(() => {
        titleRef.current.textContent =
          "Software Engineer | Full Stack Developer | Node.js & React Specialist | Database Architecture | Cloud Solutions Expert";
        titleRef.current.style.opacity = 1;
      }, 500);
    });

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/sumit-sunchu-6ab69b24b/",
      name: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/sumittt24/",
      name: "Instagram",
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/ssunchu10",
      name: "Github",
    },
  ];

  return (
    <section className="intro-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h1 className="intro-heading">
              <span className="hello-text">Hello, I'm</span>
              <br />
              <span ref={nameRef} className="name-text"></span>
              <span
                className={`cursor ${showCursor ? "visible" : "invisible"}`}
              >
                |
              </span>
            </h1>
            <h2 ref={titleRef} className="title-text"></h2>
            <p className="intro-description">
              I'm a results-driven Software Engineer with nearly 3 years of
              hands-on experience building scalable full-stack applications
              using React, Next.js, Node.js, and Spring Boot. I've contributed
              to both startups and established companies, leading projects that
              span front-end development, API architecture, and cloud-based
              deployments. My expertise lies in bridging performance with
              usability, optimizing systems for speed, scalability, and
              responsiveness.
            </p>
            <p className="intro-description">
              At Olympiah, I operate at a leadership level, mentoring
              developers, architecting RESTful APIs, and deploying microservices
              with Docker and Kubernetes on GCP. My work consistently improves
              key metrics, including a 30% reduction in load times and enhanced
              system stability. From integrating Google Maps and OAuth 2.0 in
              e-commerce dashboards to building secure backend solutions using
              MongoDB, Prisma, and MySQL, my portfolio reflects a commitment to
              clean code, modern design principles, and robust, user-centric
              engineering.
            </p>
          </div>
          <div className="image-container">
            <img src={photo} alt="Sumit Sunchu" className="profile-image" />
          </div>
        </div>
        <div className="social-links">
          <h3>Find Me Online</h3>
          <div className="links-container">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
