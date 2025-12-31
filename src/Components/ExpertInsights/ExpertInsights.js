import React from "react";
import { Plug, Database, LayoutDashboard, Cloud, Network } from "lucide-react";
import "./ExpertInsightsSection.css";

const ExpertInsightsSection = () => {
  const fields = [
    {
      title: "AI-Integrated Full Stack Development",
      icon: <Network size={24} />,
      description:
        "Build and scale AI-enabled web applications using React, Next.js, Node.js, and Spring Boot. Experienced in integrating LLMs, semantic search, and AI-driven workflows into production systems, while delivering responsive UIs and reliable backend services.",
    },
    {
      title: "Cloud Architecture & DevOps",
      icon: <Cloud size={24} />,
      description:
        "Design and deploy cloud-native systems on AWS and GCP using Docker and Kubernetes. Experienced with serverless and containerized workloads, CI/CD pipelines via GitHub Actions, and infrastructure as code using Terraform to ensure repeatable, scalable deployments.",
    },
    {
      title: "Data & Database Engineering",
      icon: <Database size={24} />,
      description:
        "Architect and optimize relational and NoSQL data models using MongoDB, MySQL, and PostgreSQL. Strong experience with Prisma and Mongoose for efficient querying, schema design, and data integrity at scale.",
    },
    {
      title: "Frontend Systems Engineering",
      icon: <LayoutDashboard size={24} />,
      description:
        "Engineer performant, accessible, and responsive interfaces with React and Next.js. Focus on state management, component architecture, and performance optimization to improve user engagement and reduce load times.",
    },
    {
      title: "API & Microservices Architecture",
      icon: <Plug size={24} />,
      description:
        "Design secure, scalable RESTful APIs and microservices using Node.js and Express. Experienced in service-to-service communication, authentication flows, and building resilient systems for distributed environments.",
    },
  ];

  return (
    <section className="expert-insights-section">
      <div className="container">
        <h2 className="section-title">Expert Insights</h2>
        <div className="insights-grid">
          {fields.map((field, index) => (
            <div key={index} className="insight-card">
              <div className="insight-icon">{field.icon}</div>
              <h3 className="insight-title">{field.title}</h3>
              <p className="insight-description">{field.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertInsightsSection;
