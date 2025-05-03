import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import pdfFile from "./Raj Vardhan Chaudhary'resume.pdf";
import catImage from "../assets/finalbgs.webp";
import profileImage from "./my-passport-photo.png";
import useScrolltotop from "../hooks/scrolltotop";
import Modal from "../Modal/modal";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Home = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Raj_Vardhan_Chaudhary_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useScrolltotop();

  // Animation variants
  const letterVariants = {
    hover: {
      y: -10,
      scale: 1.3,
      color: "#ff8ae2",
      textShadow: "0 0 15px rgba(255, 138, 226, 0.8)",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="background-overlay"></div>
        <div className="particle-background"></div>
        <img src={catImage} alt="Background" className="background-image" />

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text-container">
            <p className="bio-hello">
              <span className="hello-line"></span>
              <span className="hello-text">HELLO WORLD</span>
            </p>
            
            <motion.h1 
              className="bio-name"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              I'm <span className="highlighted">
                {'Raj Vardhan'.split('').map((letter, index) => (
                  <motion.span 
                    key={index}
                    variants={letterVariants}
                    whileHover="hover"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </span> Chaudhary
            </motion.h1>
            
            <p className="bio-description">
              Frontend Developer specializing in modern web technologies with a passion for creating 
              intuitive, high-performance applications. Based in India, open to global opportunities.
            </p>
            
            <div className="button-group">
              <motion.button 
                className="download-cv-button"
                onClick={downloadPDF}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>DOWNLOAD CV</span>
                <FiDownload className="button-icon" />
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contactus" 
                  className="contact-button"
                >
                  <span>CONTACT ME</span>
                  <FiArrowRight className="button-icon" />
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="hero-decoration"
            variants={floatingVariants}
            animate="float"
          >
            <div className="decoration-circle"></div>
            <div className="decoration-circle-small"></div>
            <div className="decoration-dots"></div>
          </motion.div>
        </motion.div>

        <div className="about-section">
          <div className="section-header">
            <motion.h2 
              className="about-me-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="let-me">Let Me </span>
              <span className="introduce">
                {'Introduce'.split('').map((letter, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ y: -5, scale: 1.2, color: "#ff8ae2" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="myself"> Myself</span>
            </motion.h2>
            <div className="section-divider"></div>
          </div>

          <div className="about-content">
            <div className="about-text">
              <motion.div 
                className="about-me-p"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="about-me-lines">
                  I discovered my passion for <span className="highlight-text">programming</span> and continue to grow
                  with each new challenge.
                </div>
                <div className="about-me-lines">
                  I'm proficient in modern technologies like 
                  <span className="highlight-text"> JavaScript, React.js and Next.js</span>
                  while also having a solid foundation in C++ and Python.
                </div>
                <div className="about-me-lines">
                  My primary interests lie in crafting <span className="highlight-text">dynamic, user-friendly</span>
                    web applications, exploring new frontend technologies.
                </div>
                <div className="about-me-lines">
                  I love to push the boundaries of <span className="highlight-text">web development</span> creating
                  cutting-edge products using modern frameworks like React.js
                  and Next.js, and integrating with <span className="highlight-text">Node.js</span> for full-stack
                  projects.
                </div>
              </motion.div>
              
              <motion.div 
                className="tech-stack"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="tech-item">JavaScript</div>
                <div className="tech-item">React</div>
                <div className="tech-item">Next.js</div>
                <div className="tech-item">Node.js</div>
                <div className="tech-item">Python</div>
                <div className="tech-item">C++</div>
              </motion.div>
            </div>
            
            <motion.div 
              className="profile-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="image-frame">
                <img 
                  src={profileImage} 
                  alt="Raj Vardhan Chaudhary" 
                  className="profile-image"
                />
              </div>
              <div className="image-glow"></div>
              <div className="image-dots"></div>
            </motion.div>
          </div>
        </div>
      </div>
      <Modal/>
    </>
  );
};

export default Home;