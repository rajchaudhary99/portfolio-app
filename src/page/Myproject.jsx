import React from "react";
import { motion } from "framer-motion";
import "./project.css";
import Ecommerce from "../assets/ecommerce-image-67016e1d29e80.webp";
import Movieimage from "../assets/weather-image.jpg";
import Projectcart from "../assets/Admin-page.png";
import Quiz from "../assets/landing-page.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = () => {
  const projects = [
    {
      title: "Weather App",
      image: Movieimage,
      description: "This project involves the development of an advanced Weather Application designed to enhance user experience by providing accurate and real-time weather updates. Utilizing modern web technologies and APIs, the system delivers current weather conditions, hourly and daily forecasts, and location-based weather insights.",
      link: "https://weather-mate-taupe.vercel.app/",
      github: "https://github.com/rajchaudhary99/Weather-Mate",
      techstack: ["React", "JavaScript", "CSS3","OpenWeather API", "Axios", "HTML",]
    },
    {
      title: "E-commerce Website",
      image: Ecommerce,
      description: "This project involves the development of a comprehensive e-commerce website designed to provide an intuitive and seamless shopping experience for users. The website features a dynamic product catalog, allowing users to browse and search for a wide range of products with ease.",
      link: "https://multimart-ecommerce.onrender.com/",
      github: "https://github.com/rajchaudhary99/ecommerce",
      techstack: ["React", "JavaScript", "CSS3","Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Admin Page",
      image: Projectcart,
      description: "Built a dynamic admin dashboard using React, enabling real-time monitoring and management of key metrics and data. Integrated interactive charts and tables for visualizing user activity, sales performance, and system status.",
      link: "https://adminpanelpage.netlify.app/",
      github: "https://github.com/rajchaudhary99/AdminHUB",
      techstack: ["React", "JavaScript", "CSS3","Chart.js", "HTML","graphQL"]
    },
    {
      title: "Landing Page",
      image: Quiz,
      description: "The Landing Page is a visually engaging and responsive web interface built with React, designed to create a strong first impression for users. It features smooth scrolling, animated components, and clear call-to-action sections to guide user interaction.",
      link: "https://landing-page-tan-chi.vercel.app/",
      github: "https://github.com/rajchaudhary99/landing-page",
      techstack: ["React", "JavaScript", "CSS3","HTML","responsive design"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="particles-background"></div>
      
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">Here are some of my recent works</p>
        <div className="section-divider"></div>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            className="project" 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="project-content">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay"></div>
              </div>
              
              <div className="project-details">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                
                <div className="project-buttons">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button live-button"
                  >
                    <FiExternalLink className="button-icon" />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button github-button"
                  >
                    <FiGithub className="button-icon" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-tags">
              <span>{project.techstack[0]}</span>
              <span>{project.techstack[1]}</span>
              <span>{project.techstack[2]}</span>
              <span>{project.techstack[3]}</span>
              <span>{project.techstack[4]}</span>
              
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;