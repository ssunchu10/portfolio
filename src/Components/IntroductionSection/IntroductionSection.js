import React, { useEffect, useRef } from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import photo from "./sumit_photo.jpg";
import "./IntroductionSection.css";

const IntroductionSection = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);

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
          "Full Stack Developer |  Scalable Solutions | Database Architecture | Cloud Solutions Expert";
        titleRef.current.style.opacity = 1;
      }, 500);
    });

    return () => {};
  }, []);

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/sumit-sunchu-6ab69b24b/",
      name: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:sumitsunchu@gmail.com",
      name: "Email",
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
            </h1>
            <h2 ref={titleRef} className="title-text">
              Full Stack Developer | Scalable Solutions | Database Architecture
              | Cloud Solutions Expert
            </h2>
            <p className="intro-description">
              I am a results driven Software Engineer with hands on experience
              building scalable full stack applications, with a strong focus on
              integrating AI capabilities into products to deliver smarter, more
              adaptive user experiences. I've contributed to both startups and
              established companies, leading projects that span front-end
              development, system design, backend architecture, and cloud-based
              deployments. My expertise lies in bridging performance with
              usability, optimizing systems for speed, scalability, and
              responsiveness.
            </p>
            <p className="intro-description">
              I am currently developing SaaS applications at Six, where I build
              and scale AI-integrated, full-stack systems with a focus on
              performance, reliability, and product impact. My work spans
              backend architecture, microservices, and production-ready
              deployments, with an emphasis on integrating AI capabilities into
              real user workflows.
            </p>
            <p className="intro-description">
              Previously at Olympiah, I operated at a leadership level,
              mentoring engineers, architecting RESTful APIs, and deploying
              microservices using Docker and Kubernetes on AWS. I drove
              measurable improvements, including a 30 percent reduction in load
              times and increased system stability. My experience includes
              Google Maps and OAuth 2.0 integrations for e-commerce dashboards,
              and secure backend systems built with MongoDB, Prisma, and MySQL.
              Across roles, I prioritize clean code, scalable design, and
              user-centric engineering.
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
