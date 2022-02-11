import React from 'react';
import { FaVirus } from 'react-icons/fa';
import './scss/nav.scss';
import './countries/scss/countries.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="location-path">
        <FaVirus className="icon-virus" />
        <h1 className="back">Covid-19 world statistics</h1>
      </div>
    </nav>
  );
};

export default Navbar;