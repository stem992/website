import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import FotoPersonale from '../images/foto.jpg';

function PersonalInfo() {
  return (
    <section className="section-container">
      <div className="section-left">
        <img src={FotoPersonale} alt="La mia foto" />
      </div>
      <div className="section-divider"></div>
      <div className="section-right">
        <h2>STEFANO PEDDONI</h2>
        <div className="social-links">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
