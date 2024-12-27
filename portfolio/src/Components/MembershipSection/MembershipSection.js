import React from "react";

import  "./MembershipSection.css";

const memberships = [
    {
      title: "IEEE Senior Member",
      description: "Honored for significant contributions to technology and engineering. Member since 2024.",
      link: "https://www.ieee.org/membership/senior/",
      imgSrc: "https://www.example.com/ieee-logo.png", // Replace with actual logo URL
    },
    {
      title: "AI and Data Science Advisory Board Member",
      description: "Retail AI Council: Driving AI strategies for retail transformation.",
      link: "https://www.retailaicouncil.com/",
      imgSrc: "https://www.example.com/ai-retail-logo.png", // Replace with actual logo URL
    },
    {
      title: "Business Analytics Advisory Board Member",
      description: "Advising for Cal Poly MS, Orfalea College of Business, San Luis Obispo, CA.",
      link: "https://www.calpoly.edu/",
      imgSrc: "https://www.example.com/business-logo.png", // Replace with actual logo URL
    },
    {
      title: "Raptors Fellow",
      description: "Recognized by Hackathon Raptors for exemplary innovation in technology.",
      link: "https://www.raptors.dev/",
      imgSrc: "https://www.example.com/raptors-logo.png", // Replace with actual logo URL
    },
    {
      title: "International Advisory Board Member",
      description: "2024 IEEE International Conference on ARIIA.",
      link: "https://www.ieee-ar.org/",
      imgSrc: "https://www.example.com/ariia-logo.png", // Replace with actual logo URL
    },
    {
      title: "Department Advisory Board Member",
      description: "MIT School of Computing, Pune, India.",
      link: "https://mituniversity.ac.in/",
      imgSrc: "https://www.example.com/mit-logo.png", // Replace with actual logo URL
    },
    {
      title: "Royal Fellow",
      description: "Member of IOASD's executive committee, promoting academic and scientific excellence.",
      link: "https://www.ioasd.org/",
      imgSrc: "https://www.example.com/ioasd-logo.png", // Replace with actual logo URL
    },
    {
      title: "Early Adopter Member",
      description: "AI Frontier Network: Advancing AI innovations and research.",
      link: "https://www.aifrontiernetwork.org/",
      imgSrc: "https://www.example.com/aifn-logo.png", // Replace with actual logo URL
    },
  ];

const MembershipSection = () => {
  return (
    <section id="membership" className="membership-section">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <h2 className="section-title">My Professional Memberships</h2>
        <div className="membership-slider">
          {memberships.map((membership, index) => (
            <div key={index} className="membership-card">
              <div className="membership-image">
                <img src={membership.imgSrc} alt={membership.title} />
              </div>
              <h4 className="membership-title">{membership.title}</h4>
              <p className="membership-description">{membership.description}</p>
              <a
                href={membership.link}
                target="_blank"
                rel="noopener noreferrer"
                className="membership-link"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
