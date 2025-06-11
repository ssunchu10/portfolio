import React from "react";
import { Code, Database, Building2 } from "lucide-react";
import "./ProfessionalExperienceSection.css";

const ProfessionalExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Olympiah",
      period: "Dec 2024 - Present",
      description:
        "Operating at a leadership level in an early-stage startup, I mentor junior developers and lead technical decisions across projects. I architect and optimize RESTful APIs using Node.js and MongoDB, and build high-performance front-end applications with React and Next.js. I also implement GCP solutions (Compute Engine, Cloud Functions, Cloud Storage), containerize deployments with Docker and Kubernetes, and integrate Elasticsearch/OpenSearch to enhance application responsiveness and search performance.",

      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "GCP",
        "Elasticsearch",
      ],
      icon: <Code size={24} />,
    },
    {
      title: "Full Stack Developer Intern",
      company: "Innovative Configuration",
      period: "Aug 2024 - Dec 2024",
      description:
        "Architected and developed three role-based eCommerce dashboards using Next.js and Google Sign-In (OAuth 2.0). Integrated InFisical for secure configuration management and Google Maps API for location-based services. Designed responsive UIs with Tailwind CSS and implemented backend logic using NestJS and Prisma ORM with MongoDB. The platform was containerized and deployed on DigitalOcean.",

      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Google Sign-In",
        "MongoDB",
        "Prisma",
        "NestJS",
        "DigitalOcean",
        "OAuth 2.0",
      ],
      icon: <Building2 size={24} />,
    },
    {
      title: "Software Engineer",
      company: "B2X Limited",
      period: "Jul 2021 - Jun 2023",
      description:
        "Played a key role in enhancing UI consistency and performance by resolving front-end issues in div-based layouts. Improved page responsiveness by 25% and reduced user-reported errors by 30%. On the backend, developed Node.js/Express servers with MySQL, and managed containerized deployments with Docker and Kubernetes, resulting in a 40% reduction in load times and a 25% increase in user engagement.",

      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "React.js",
        "Node.js",
        "Express",
        "MySQL",
        "Docker",
        "Kubernetes",
      ],
      icon: <Database size={24} />,
    },
  ];

  return (
    <section className="professional-experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="tech-badges">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;
