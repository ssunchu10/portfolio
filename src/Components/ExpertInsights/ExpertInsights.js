import React from 'react';
import { Plug, Database, LayoutDashboard, Cloud, Network } from 'lucide-react';
import './ExpertInsightsSection.css';

const ExpertInsightsSection = () => {
  const fields = [
    {
      title: "Full Stack Development",
      icon: <Network size={24} />,
      description:
        "Experienced in building and maintaining scalable web applications using React, Next.js, Node.js, and Spring Boot. Proven ability to deliver responsive UIs and robust backend systems with seamless API integrations."
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      description:
        "Skilled in deploying and managing applications on AWS (Lambda, EC2, S3), GCP (Compute Engine, Cloud Functions, Cloud Storage) Docker, and Kubernetes. Experienced with CI/CD pipelines using GitHub Actions and infrastructure as code with Terraform."
    },
    {
      title: "Database Management",
      icon: <Database size={24} />,
      description:
        "Proficient in designing and managing relational and NoSQL databases, including MongoDB, MySQL, and PostgreSQL. Experienced with ORMs like Prisma and Mongoose for optimized data access."
    },
    {
      title: "Frontend Engineering",
      icon: <LayoutDashboard size={24} />,
      description:
        "Adept at building responsive and accessible user interfaces using React.js, Next.js, Tailwind CSS, and Bootstrap. Focused on enhancing performance, usability, and user engagement."
    },
    {
      title: "API Development",
      icon: <Plug size={24} />,
      description:
        "Expert in creating and integrating RESTful APIs and microservices with Node.js and Express.js. Ensures scalability, security, and efficient communication across distributed systems."
    }
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

