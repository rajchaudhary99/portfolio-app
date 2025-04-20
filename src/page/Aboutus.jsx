import React from 'react';
import './about.css';
import profileImage from './my-passport-photo.png';

function About() {
  return (
    <div className='about-section-container'>
      <div className='about-particles-background'></div>
      <div className='about-floating-shapes'>
        <div className='about-shape-1'></div>
        <div className='about-shape-2'></div>
        <div className='about-shape-3'></div>
      </div>
      
      <div className='about-left-section'>
        <div className='about-image-container'>
          <div className='about-image-glow'></div>
          <div className='about-image-dots'></div>
          <img src={profileImage} alt="Raj Vardhan Chaudhary" className="about-profile-image" />
        </div>
      </div>
      
      <div className='about-right-section'>
        <h1 className='about-title-heading'>
          <span className='about-title-word about-title-word-1'>About</span>
          <span className='about-title-word about-title-word-2'>Me</span>
        </h1>
        <p className="about-subtitle">
          Software <span className="about-zoom-text">
            <span>E</span><span>n</span><span>g</span><span>i</span><span>n</span><span>e</span><span>e</span><span>r</span><span>i</span><span>n</span><span>g</span>
          </span> Student
        </p>
        <p className='about-description'>
          I am a B.Tech Software Engineering student with a passion for technology and coding.
          I am a dedicated software engineering student who loves exploring new technologies and building applications that make a difference. My interests include web development, programming languages, and emerging tech trends.
        </p>
        
        <div className='about-tech-stack'>
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>MySQL</span>
        </div>
      </div>
    </div>
  );
}

export default About;
