import React, { useEffect, useState } from 'react';
import "./modal.css";
import crossIcon from '../assets/cross.png';

const Modal = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setOpen(true);
        setShow(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false); 
    setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasSeenModal', 'true');
    }, 300);
  };

  return (
    <div>
      <div className={`modal-overlay ${open ? "fade-in" : "fade-out"}`} style={{ display: show ? 'flex' : 'none' }}>
        <div className={`modal-content ${open ? "slide-in" : "slide-out"}`}>
          <img 
            src={crossIcon} 
            alt='Close' 
            className='cross-button' 
            onClick={handleClose} 
          />
          <h2 className='modal-heading'>Welcome to My Portfolio!</h2>
          <p className='modal-para'>I'm glad you're here. Explore my projects and skills!</p>
          <div className="modal-footer">
            <button className="modal-button" onClick={handleClose}>
              Let's Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;