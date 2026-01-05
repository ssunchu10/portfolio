import React from "react";
import { Code, Database, Building2 } from "lucide-react";
import "./ProfessionalExperienceSection.css";

const ProfessionalExperienceSection = () => {
  const experiences = [
    {
      title: "Founding Engineer",
      company: "Six Social App (backed by Antler)",
      period: "Oct 2025 - Present",
      description:
        "Founding engineer responsible for designing and owning the core backend architecture of an AI-driven social platform. Built REST APIs and microservices using TypeScript, FastAPI and Node.js across authentication, feeds, recommendations, and AI-powered features. Developed GPT-based AI agent workflows for chat and personalized recommendations, enabling real-time user interactions. Designed data ingestion and transformation pipelines using PostgreSQL and Neo4j, optimized with indexing and caching to reduce decision latency by 35%. Improved release quality by 40% through unit, integration, and CI testing, contributing to a 20% uplift in early user engagement.",

      technologies: [
        "TypeScript",
        "Node.js",
        "FastAPI",
        "Supabase",
        "Twilio",
        "PostgreSQL",
        "Neo4j",
        "React Native",
        "Docker",
        "AWS",
        "LLMs",
        "CI/CD",
      ],
      icon: <Code size={24} />,
    },
    {
      title: "Software Engineer",
      company: "Olympiah",
      period: "Dec 2024 - Sep 2025",
      description:
        "Worked at a leadership level in an early-stage SaaS startup, mentoring junior developers and leading technical decisions across multiple projects. Architected and optimized RESTful APIs using Node.js and MongoDB, and built high-performance frontend applications with React and Next.js. Implemented AWS infrastructure, containerized deployments using Docker and Kubernetes, and integrated Elasticsearch/OpenSearch to improve application responsiveness and search performance.",

      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "AWS",
        "Elasticsearch",
      ],
      icon: <Code size={24} />,
    },
    {
      title: "Full Stack Developer Intern",
      company: "Innovative Configuration",
      period: "Aug 2024 - Dec 2024",
      description:
        "Designed and developed three role-based e-commerce dashboards using Next.js with Google Sign-In (OAuth 2.0). Integrated Google Maps APIs for location-based features and implemented secure backend services using NestJS and Prisma with MongoDB. Built responsive user interfaces with Tailwind CSS and deployed containerized applications on DigitalOcean.",

      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Google Sign-In",
        "OAuth 2.0",
        "MongoDB",
        "Prisma",
        "NestJS",
        "DigitalOcean",
      ],
      icon: <Building2 size={24} />,
    },
    {
      title: "Software Engineer",
      company: "B2X Limited",
      period: "Jul 2021 - Jun 2023",
      description:
        "Improved frontend consistency and performance by resolving layout and responsiveness issues, leading to a 25% improvement in page responsiveness and a 30% reduction in user-reported errors. Built and maintained FastAPI backend services, and managed containerized deployment, achieving a 40% reduction in load times and a 25% increase in user engagement.",

      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "React.js",
        "Node.js",
        "FastAPI",
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
