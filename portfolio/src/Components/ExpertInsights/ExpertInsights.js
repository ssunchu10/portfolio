// import React from 'react';

// const ExpertiseSection = () => {
//     return (
//         // <AnimatedSection id="expertise" className="bg-gray-50">
//             <div className="max-w-4xl mx-auto">
//                 <h2 className="text-3xl font-bold mb-8">Expert Insights</h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                     <div className="hover-lift bg-white p-6 rounded-lg shadow-md transition-all duration-300">
//                         <h3 className="text-xl font-semibold mb-4">
//                             AI & Machine Learning
//                         </h3>
//                         <p className="text-gray-600">
//                             Specialized expertise in developing and implementing AI
//                             solutions for enterprise applications.
//                         </p>
//                     </div>
//                     <div className="hover-lift bg-white p-6 rounded-lg shadow-md transition-all duration-300">
//                         <h3 className="text-xl font-semibold mb-4">Data Science</h3>
//                         <p className="text-gray-600">
//                             Advanced analytics and data-driven decision making for
//                             business intelligence.
//                         </p>
//                     </div>
//                     <div className="hover-lift bg-white p-6 rounded-lg shadow-md transition-all duration-300">
//                         <h3 className="text-xl font-semibold mb-4">Recommender Systems</h3>
//                         <p className="text-gray-600">
//                             Advanced analytics and data-driven decision making for
//                             business intelligence.
//                         </p>
//                     </div>
//                     <div className="hover-lift bg-white p-6 rounded-lg shadow-md transition-all duration-300">
//                         <h3 className="text-xl font-semibold mb-4">Data Analytics and Reporting</h3>
//                         <p className="text-gray-600">
//                             Advanced analytics and data-driven decision making for
//                             business intelligence.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         // </AnimatedSection>
//     )
// }

// export default ExpertiseSection;

import React from "react";
import "./ExpertInsightsSection.css";

const ExpertiseSection = () => {
    const researchFields = [
      {
        title: "Artificial Intelligence",
        description:
          "Focus on creating intelligent systems capable of performing tasks that typically require human intelligence, including natural language processing, computer vision, and robotics.",
      },
      {
        title: "Machine Learning",
        description:
          "Development and application of algorithms that improve automatically through experience. Emphasis on supervised, unsupervised, and reinforcement learning.",
      },
      {
        title: "Data Management",
        description:
          "Expertise in organizing, storing, and retrieving large-scale datasets efficiently, ensuring data quality, security, and accessibility.",
      },
      {
        title: "Business Intelligence",
        description:
          "Providing actionable insights through data visualization, reporting, and predictive analytics to drive strategic decision-making.",
      },
      {
        title: "Data Analytics",
        description:
          "Application of statistical and computational methods to analyze data trends and patterns for enhanced business performance.",
      },
    ];
  
    return (
      <section className="expert-insights-section">
        <div className="container">
          <h2 className="section-title">Expert Insights</h2>
          <div className="grid">
            {researchFields.map((field, index) => (
              <div key={index} className="research-card">
                <h3 className="research-title">{field.title}</h3>
                <p className="research-description">{field.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ExpertiseSection;
