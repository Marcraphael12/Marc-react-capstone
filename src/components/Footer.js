import React from 'react';
import { AiFillTwitterSquare, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <h3 className="authorr">&#169; Marc Raphael </h3>
      <div className="icons">
        <Link to={{ pathname: 'https://github.com/Marcraphael12' }} target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className="git fab fa-github-square" /></Link>
        <Link to={{ pathname: 'https://twitter.com/MarcRaphael20' }} target="_blank" rel="noopener noreferrer"><AiFillGithub className="twitter fab fa-twitter-square" /></Link>
        <Link to={{ pathname: 'https://www.linkedin.com/in/essogo-raphael/' }} target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="linkedin fab fa-linkedin" /></Link>
      </div>
    </div>
  </footer>
);

export default Footer;