import React from 'react';
import { Gift, BookOpen, Wallet, Bus, Film, Cloud } from 'lucide-react';
import './projectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "QuizWhiz",
      description: "A cross-platform quiz application built with React Native, featuring real-time multiplayer functionality and progress tracking. Implemented CI/CD using GitHub workflows for automated testing and deployment. Integrated with backend APIs and implemented automated deployment pipelines.",
      technologies: ["React Native", "Django", "GitHub Actions", "WebSocket"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "WishKeeper",
      description: "A full-stack wishlist management platform with Django backend and React frontend. Implemented user authentication, wishlist sharing, and price tracking features. Deployed on Google Cloud with automated scaling.",
      technologies: ["React", "Django", "Google Cloud", "PostgreSQL"],
      icon: <Gift className="w-6 h-6" />
    },
    {
      title: "WeatherNow",
      description: "A location-based weather application with real-time updates and customizable alerts. Features include location search, weather forecasts, and mobile-responsive design.",
      technologies: ["React", "GitHub Actions", "Weather API", "Responsive Design"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Movie Search Engine",
      description: "A comprehensive movie search platform featuring real-time search results, movie recommendations, and TMDB API integration. Implemented CRUD operations with MySQL database, resulting in 35% increase in user engagement.",
      technologies: ["React", "Express.js", "MySQL", "TMDB API"],
      icon: <Film className="w-6 h-6" />
    },
    {
      title: "Budget Management Application",
      description: "A comprehensive mobile application for budget tracking and management. Features include secure user authentication, income/expense tracking, budget setting, and spending categorization. Achieved 30% increase in user satisfaction and 35% increase in app usage.",
      technologies: ["Java", "Android Studio", "Room Database", "OOP"],
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "Live Bus Tracking Application",
      description: "A real-time bus tracking application that reduced average waiting times by 50%. Built with React Native and Firebase for cross-platform compatibility, achieving 95% user satisfaction across Android and iOS platforms.",
      technologies: ["React Native", "Firebase", "Expo Go", "OOP"],
      icon: <Bus className="w-6 h-6" />
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
            >
              <div className="card-header">
                <div className="icon-container">
                  {project.icon}
                </div>
              </div>

              <h3 className="project-title">
                {project.title}
              </h3>
              <p className="project-description">
                {project.description}
              </p>

              <div className="technologies-container">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="technology-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;