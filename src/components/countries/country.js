/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiChevronRightCircle } from 'react-icons/bi';
import countryName from './countries_name';
import './scss/country.scss';

const Country = ({
  country, totalConfirmed, handleClick,
}) => {
  const navigate = useNavigate();
  const HandleRoute = (route) => {
    navigate(route);
  };
  const isoName = countryName[country];

  const mapImg = isoName ? `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${isoName.toLowerCase()}/vector.svg` : './vector1.svg';
  return (
    <>
      <button
        className="country"
        type="button"
        onClick={() => {
          HandleRoute('/country');
          handleClick(country);
        }}
      >
        <BiChevronRightCircle size={20} className="info-icon" color="white" />
        <div className="country-data">
          <h1 className="country-name">{country.toUpperCase()}</h1>
          <span className="total-confirmed">{Intl.NumberFormat('de-DE').format(totalConfirmed)}</span>
        </div>
      </button>
    </>

  );
};

Country.propTypes = {
  country: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Country;