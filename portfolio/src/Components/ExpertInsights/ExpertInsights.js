// import React from 'react';
// import { Brain, Database, ChartBar, LineChart, Network } from 'lucide-react';
// import './ExpertInsightsSection.css';

// const ExpertInsightsSection = () => {
//   const fields = [
//     {
//       title: "Artificial Intelligence",
//       icon: <Brain size={24} />,
//       description: "Specializing in advanced AI systems, focusing on deep learning architectures, neural networks, and natural language processing."
//     },
//     {
//       title: "Machine Learning",
//       icon: <Network size={24} />,
//       description: "Expertise in developing and implementing machine learning algorithms, with emphasis on supervised and unsupervised learning techniques."
//     },
//     {
//       title: "Data Management",
//       icon: <Database size={24} />,
//       description: "Focus on advanced data management strategies, including big data architecture, data governance, and database optimization."
//     },
//     {
//       title: "Business Intelligence",
//       icon: <ChartBar size={24} />,
//       description: "Research in modern BI tools and methodologies, focusing on data visualization, reporting automation, and strategic decision support systems."
//     },
//     {
//       title: "Data Analytics",
//       icon: <LineChart size={24} />,
//       description: "Specialized research in advanced analytics techniques, including predictive analytics, prescriptive analytics, and real-time analytics systems."
//     }
//   ];

//   return (
//     <section className="expert-insights-section">
//       <div className="container">
//         <h2 className="section-title">Expert Insights</h2>
//         <div className="insights-grid">
//           {fields.map((field, index) => (
//             <div key={index} className="insight-card">
//               <div className="insight-icon">{field.icon}</div>
//               <h3 className="insight-title">{field.title}</h3>
//               <p className="insight-description">{field.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExpertInsightsSection;

import React from 'react';
import { Brain, Database, ChartBar, LineChart, Network } from 'lucide-react';
import './ExpertInsightsSection.css';

const ExpertInsightsSection = () => {
  const fields = [
    {
      title: "Artificial Intelligence",
      icon: <Brain size={24} />,
      description: "Specializing in developing and implementing AI solutions for enterprise applications, with a focus on advanced predictive modelling and smart location strategies."
    },
    {
      title: "Machine Learning",
      icon: <Network size={24} />,
      description: "Expertise in developing ML models for revenue realization estimates, customer behavior prediction, and fraud detection, with a focus on improving accuracy and efficiency."
    },
    {
      title: "Data Management",
      icon: <Database size={24} />,
      description: "Advanced skills in data modeling, ETL processes, and managing large-scale datasets using cloud-based technologies like AWS Redshift, S3, and Glue."
    },
    {
      title: "Business Intelligence",
      icon: <ChartBar size={24} />,
      description: "Proficient in creating BI dashboards and reports using tools like Tableau, Python, and OBIEE for financial, sales, and demographic data analytics."
    },
    {
      title: "Data Analytics",
      icon: <LineChart size={24} />,
      description: "Specialized in applying statistical and computational methods to analyze data trends and patterns, enhancing business performance and decision-making processes."
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

