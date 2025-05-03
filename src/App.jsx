import React, { useState, Suspense, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import menuIcon from "./assets/menu.png";
import homeIcon from './assets/3d-house.png';
import contactUsPng from './assets/information-channels.png';
import aboutUsPng from './assets/about.png';
import projectPng from './assets/rocket.png';
import NotFound from "./Custom Feature/NotFound";
import StickyContact from "./Custom Feature/StickyContact";
import "./App.css";

// Lazy loading pages
const Home = React.lazy(() => import("./page/Home"));
const About = React.lazy(() => import("./page/Aboutus"));
const Project = React.lazy(() => import("./page/Myproject"));
const Contact = React.lazy(() => import("./page/Contactus"));

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      menuIconRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuIconRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  return (
    <div onClick={handleClickOutside} style={{ minHeight: "100vh" }}>
      <Router>
        <nav className={`navbar ${menuOpen ? "open" : ""}`} ref={menuRef}>
          {/* Menu Icon */}
          <div ref={menuIconRef} className="menu-icon" onClick={toggleMenu}>
            <img 
              src={menuIcon} 
              alt="Menu Icon" 
              className={`menu-icon-img ${menuOpen ? "open" : ""}`}
            />
          </div>

          {/* Navigation Links */}
          <ul>
            <li>
              <NavLink 
                to="/" 
                end 
                onClick={() => setMenuOpen(false)}
                className={({isActive}) => isActive ? 'active' : ''}
              >
                <img src={homeIcon} alt="homeIcon" className="nav-icon" />
                <span className="nav-text">HOME</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Aboutus" 
                onClick={() => setMenuOpen(false)}
                className={({isActive}) => isActive ? 'active' : ''}
              >
                <img src={aboutUsPng} alt="About Us" className="nav-icon" />
                <span className="nav-text">ABOUT</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Myproject" 
                onClick={() => setMenuOpen(false)}
                className={({isActive}) => isActive ? 'active' : ''}
              >
                <img src={projectPng} alt="Projects" className="nav-icon" />
                <span className="nav-text">PROJECTS</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Contactus"  
                onClick={() => setMenuOpen(false)}
                className={({isActive}) => isActive ? 'active' : ''}
              >
                <img src={contactUsPng} alt="Contact Us" className="nav-icon" />
                <span className="nav-text">CONTACT</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <StickyContact/>

        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<About />} />
            <Route path="/Contactus" element={<Contact />} />
            <Route path="/Myproject" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;