import React from "react";
import instagramLogo from "../assets/instagram-fill-svgrepo-com.svg";
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg";
import githubLogo from "../assets/github-svgrepo-com.svg";
import './StickyContact.css';

const StickyContact = () => {
  return (
    <div className="_social-links">
      <div className="_links-list">
        <span className="_social-link">
          <a
            href="https://www.instagram.com/raj_vardhan_chaudhary_99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram" className="sticky-logo" />
          </a>
        </span>
        <span className="_social-link">
          <a
            href="https://github.com/rajchaudhary99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className="sticky-logo"/>
          </a>
        </span>
        <span className="_social-link">
          <a
            href="https://www.linkedin.com/in/rajvardhanchaudhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="sticky-logo" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default StickyContact;
