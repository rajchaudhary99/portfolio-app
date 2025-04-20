import React, { useState } from "react";
import "./contact.css";
import instagramLogo from "../assets/instagram-fill-svgrepo-com.svg";
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg";
import githubLogo from "../assets/github-svgrepo-com.svg";
import gmailLogo from "../assets/gmail-svgrepo-com.svg";

const Contactus = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const contacts = [
    {
      name: "Instagram",
      logo: instagramLogo,
      url: "https://www.instagram.com/raj_vardhan_chaudhary_99/",
      color: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
      shadow: "0 0 15px rgba(220, 39, 67, 0.7)"
    },
    {
      name: "Email",
      logo: gmailLogo,
      url: "mailto:rajvardhanchaudhary666@gmail.com",
      color: "linear-gradient(45deg, #EA4335, #FBBC05)",
      shadow: "0 0 15px rgba(234, 67, 53, 0.7)"
    },
    {
      name: "LinkedIn",
      logo: linkedinLogo,
      url: "https://www.linkedin.com/in/rajvardhanchaudhary/",
      color: "linear-gradient(45deg, #0077B5, #00A0DC)",
      shadow: "0 0 15px rgba(0, 119, 181, 0.7)"
    },
    {
      name: "GitHub",
      logo: githubLogo,
      url: "https://github.com/rajchaudhary99",
      color: "linear-gradient(45deg, #333, #6e5494)",
      shadow: "0 0 15px rgba(51, 51, 51, 0.7)"
    }
  ];

  return (
    <div className="contact-background">
      <div className="contact-container">
        <div className="contact-header-wrapper">
          <h2 className="contact-header">Let's Connect</h2>
          <div className="header-underline"></div>
        </div>
        
        <div className="contact-list">
          {contacts.map((contact, index) => (
            <React.Fragment key={index}>
              <a
                href={contact.url}
                className={`contact-item ${hoveredItem === index ? 'active' : ''}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  '--hover-color': contact.color,
                  '--hover-shadow': contact.shadow
                }}
              >
                <div className="contact-icon-wrapper">
                  <img src={contact.logo} alt={contact.name} className="contact-icon" />
                </div>
                <div className="contact-info">
                  <span className="contact-platform">{contact.name}</span>
                </div>
                <div className="contact-hover-effect"></div>
              </a>
              {index < contacts.length - 1 && (
                <div className="contact-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contactus;