import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Contact</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.github} alt="github" />
          <a
            href="https://github.com/Deukhwa"
            className="p-text"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.linkedin} alt="linkedIn" />
          <a
            href="https://www.linkedin.com/in/dan-jeong-1b846bb2/"
            className="p-text"
            arget="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:deukhwajeong@gmail.com" className="p-text">
            deukhwajeong@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (613) 583-0931" className="p-text">
            +1 (613) 583-0931
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
