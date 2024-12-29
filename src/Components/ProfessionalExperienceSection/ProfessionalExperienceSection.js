import React from 'react';
import { Code, Database, Building2 } from 'lucide-react';
import './ProfessionalExperienceSection.css';

const ProfessionalExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Olympiah",
      period: "Dec 2024 - Present",
      description: "Delivered scalable API endpoints and front-end components using Next.js, reducing load times by 30% and enhancing user interaction. Engineered MongoDB database schemas with Mongoose, achieving 100% data integrity and optimizing query performance by 25%.",
      icon: <Code size={24} />
    },
    {
      title: "Full Stack Developer Intern",
      company: "Innovative Configuration",
      period: "Aug 2024 - Dec 2024",
      description: "Architected and developed three distinct dashboards using Next.js with OAuth 2.0 authentication. Engineered Google Maps integration and optimized application performance through efficient data fetching patterns. Constructed robust backend infrastructure using Nest.js and Prisma with SQL.",
      icon: <Building2 size={24} />
    },
    {
      title: "Software Engineer",
      company: "B2X Limited",
      period: "Jul 2022 - Jun 2023",
      description: "Resolved critical front-end bugs in div-based layouts, achieving a 25% increase in page responsiveness and a 30% reduction in user-reported errors. Engineered robust server and database solutions, ensuring seamless integration and data integrity, resulting in a 25% increase in user engagement and a 40% reduction in load times.",
      icon: <Database size={24} />
    },
  ];
  

  return (
    <section className="professional-experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-icon">
                {exp.icon}
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;
