import React from 'react';
import { Award, Trophy } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      title: "Silver Award - Data Analytics",
      year: "2024",
      organization: "Claro Awards",
      icon: <Trophy size={24} />
    },
    {
      title: "Silver Award - Technology",
      year: "2024",
      organization: "Claro Awards",
      icon: <Trophy size={24} />
    },
    {
      title: "Global Recognition Award",
      year: "2024",
      description: "Significant contributions to artificial intelligence and data analytics through pioneering work at Amazon AWS",
      icon: <Award size={24} />
    },
    {
      title: "Indian Achievers' Award",
      year: "2024",
      description: "Recognized as an individual excelled in their respective fields and regions",
      icon: <Award size={24} />
    },
    {
      title: "Ops Award",
      year: "2022",
      organization: "Amazon FAST Team",
      icon: <Trophy size={24} />
    }
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-[#CDFF00]">Awards</span> & Recognition
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="group border border-gray-800 rounded-lg p-6 hover:border-[#CDFF00] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#CDFF00] group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>
                <div className="text-sm text-gray-400">{award.year}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#CDFF00] transition-colors">
                {award.title}
              </h3>
              {award.organization && (
                <p className="text-gray-400 mb-2">{award.organization}</p>
              )}
              {award.description && (
                <p className="text-gray-300 text-sm">{award.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;

// import React from 'react';
// import { Award, Users } from 'lucide-react';
// import './PanelsAwardsSection.css';

// const PanelsAwardsSection = () => {
//   const awards = [
//     {
//       title: "Silver Award - Data Analytics",
//       year: "2024",
//       organization: "Claro Awards",
//       icon: <Trophy size={24} />
//     },
//     {
//       title: "Silver Award - Technology",
//       year: "2024",
//       organization: "Claro Awards",
//       icon: <Trophy size={24} />
//     },
//     {
//       title: "Global Recognition Award",
//       year: "2024",
//       description: "Significant contributions to artificial intelligence and data analytics through pioneering work at Amazon AWS",
//       icon: <Award size={24} />
//     },
//     {
//       title: "Indian Achievers' Award",
//       year: "2024",
//       description: "Recognized as an individual excelled in their respective fields and regions",
//       icon: <Award size={24} />
//     },
//     {
//       title: "Ops Award",
//       year: "2022",
//       organization: "Amazon FAST Team",
//       icon: <Trophy size={24} />
//     }
//   ];

//   // const awards = [
//   //   {
//   //     title: "Innovation Leader of the Year",
//   //     organization: "Tech Excellence Awards",
//   //     year: 2023
//   //   },
//   //   {
//   //     title: "Top 50 Women in Tech",
//   //     organization: "TechWomen Magazine",
//   //     year: 2022
//   //   },
//   //   // Add more awards
//   // ];

//   return (
//     <section className="panels-awards-section">
//       <div className="container">
//         <h2 className="section-title">Panels & Awards</h2>
//         <div className="panels-awards-grid">
//           <div className="panels-column">
//             <h3 className="column-title">Speaking Engagements</h3>
//             {panels.map((panel, index) => (
//               <div key={index} className="panel-item">
//                 <Users size={20} className="item-icon" />
//                 <div>
//                   <h4 className="item-title">{panel.title}</h4>
//                   <p className="item-subtitle">{panel.event}</p>
//                   <p className="item-role">{panel.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="awards-column">
//             <h3 className="column-title">Awards & Recognition</h3>
//             {awards.map((award, index) => (
//               <div key={index} className="award-item">
//                 <Award size={20} className="item-icon" />
//                 <div>
//                   <h4 className="item-title">{award.title}</h4>
//                   <p className="item-subtitle">{award.organization}</p>
//                   <p className="item-year">{award.year}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PanelsAwardsSection;
