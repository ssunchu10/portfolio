import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';
import photo from './sumit_photo.jpg'; 
import './IntroductionSection.css';

const IntroductionSection = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeName = (text, ref, delay, callback) => {
      let i = 0;
      ref.current.textContent = ''; 
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
        titleRef.current.textContent = "Software Engineer | Full Stack Developer | Next.js & React Specialist | Database Architecture | Cloud Solutions Expert";
        titleRef.current.style.opacity = 1;
      }, 500);
    });

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sumit-sunchu-6ab69b24b/', name: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/sumittt24/', name: 'Instagram'},
    { icon: <Github size={20} />, url: 'https://github.com/ssunchu10', name: 'Github'},
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
              <span className={`cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
            </h1>
            <h2 ref={titleRef} className="title-text"></h2>
            <p className="intro-description">
            As a dynamic Software Engineer with expertise in modern web technologies, I specialize in architecting scalable full-stack solutions that transform complex technical challenges into seamless user experiences. My journey spans from optimizing critical front-end systems at B2X Limited to developing innovative solutions at Olympiah, where I've consistently delivered performance improvements of 25-30% across various metrics. With deep expertise in Next.js, React, and database technologies like MongoDB and SQL, I bridge the gap between robust backend architecture and engaging frontend experiences.
            </p>
            <p className="intro-description">
            My portfolio showcases a diverse range of projects, from developing sophisticated multi-dashboard systems with role-based access control to creating intuitive movie search engines and real-time tracking applications. Committed to continuous innovation and technical excellence, I combine strong problem-solving abilities with collaborative leadership to deliver solutions that not only meet current needs but anticipate future challenges. Whether it's implementing OAuth 2.0 authentication systems or optimizing database queries, my approach is always focused on creating reliable, efficient, and user-centric applications that make a real impact.
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
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
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
