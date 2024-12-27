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

// import React from "react";
import "./ExpertInsightsSection.css";

// const ExpertiseSection = () => {
//     const researchFields = [
//       {
//         title: "Artificial Intelligence",
//         description:
//           "Focus on creating intelligent systems capable of performing tasks that typically require human intelligence, including natural language processing, computer vision, and robotics.",
//       },
//       {
//         title: "Machine Learning",
//         description:
//           "Development and application of algorithms that improve automatically through experience. Emphasis on supervised, unsupervised, and reinforcement learning.",
//       },
//       {
//         title: "Data Management",
//         description:
//           "Expertise in organizing, storing, and retrieving large-scale datasets efficiently, ensuring data quality, security, and accessibility.",
//       },
//       {
//         title: "Business Intelligence",
//         description:
//           "Providing actionable insights through data visualization, reporting, and predictive analytics to drive strategic decision-making.",
//       },
//       {
//         title: "Data Analytics",
//         description:
//           "Application of statistical and computational methods to analyze data trends and patterns for enhanced business performance.",
//       },
//     ];
  
//     return (
//       <section className="expert-insights-section">
//         <div className="container">
//           <h2 className="section-title">Expert Insights</h2>
//           <div className="grid">
//             {researchFields.map((field, index) => (
//               <div key={index} className="research-card">
//                 <h3 className="research-title">{field.title}</h3>
//                 <p className="research-description">{field.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default ExpertiseSection;


import React from 'react';
import { Brain, Database, ChartBar, LineChart, Network } from 'lucide-react';

const ResearchFields = () => {
  const fields = [
    {
      title: "Artificial Intelligence",
      icon: <Brain size={24} />,
      description: "Specializing in advanced AI systems, focusing on deep learning architectures, neural networks, and natural language processing. Research includes developing innovative AI solutions for real-world applications and improving existing AI models for better performance and efficiency."
    },
    {
      title: "Machine Learning",
      icon: <Network size={24} />,
      description: "Expertise in developing and implementing machine learning algorithms, with emphasis on supervised and unsupervised learning techniques. Research spans predictive modeling, pattern recognition, and automated decision-making systems."
    },
    {
      title: "Data Management",
      icon: <Database size={24} />,
      description: "Focus on advanced data management strategies, including big data architecture, data governance, and database optimization. Research includes developing scalable solutions for complex data ecosystems and improving data quality management systems."
    },
    {
      title: "Business Intelligence",
      icon: <ChartBar size={24} />,
      description: "Research in modern BI tools and methodologies, focusing on data visualization, reporting automation, and strategic decision support systems. Emphasis on developing actionable insights from complex business data."
    },
    {
      title: "Data Analytics",
      icon: <LineChart size={24} />,
      description: "Specialized research in advanced analytics techniques, including predictive analytics, prescriptive analytics, and real-time analytics systems. Focus on developing innovative approaches to extract meaningful insights from complex datasets."
    }
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-[#CDFF00]">Expert Insights</span> Research Fields
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fields.map((field, index) => (
            <div 
              key={index}
              className="group border border-gray-800 rounded-lg p-6 hover:border-[#CDFF00] transition-all duration-300 hover:-translate-y-1 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#CDFF00] group-hover:scale-110 transition-transform duration-300">
                  {field.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[#CDFF00] transition-colors">
                  {field.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {field.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchFields;