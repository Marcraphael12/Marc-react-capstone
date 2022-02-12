import React from 'react';
import { FaVirus } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import './scss/nav.scss';
import './countries/scss/countries.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const HandleRoute = (route) => {
    navigate(route);
  };
  const location = useLocation();
  return (
    <nav>
      <div className="location-path">
      {(location.pathname !== '/') ? <button className="back" type="button" onClick={() => {
          HandleRoute('/');
        }}><BsChevronLeft className="fas fa-chevron-left"> </BsChevronLeft></button> : <span className="back"></span>}
        {' '}
        <FaVirus className="icon-virus" />
        <h1 className="back">Covid-19 world statistics</h1>
      </div>
    </nav>
  );
};

export default Navbar;