import React from 'react';
import Proptypes from 'prop-types';
import './scss/search.scss';

const Query = ({ handleChange }) => (
  <form className="form">
    <input className="input-search" type="text" placeholder="Search a country" onChange={handleChange} />
  </form>
);

Query.propTypes = {
  handleChange: Proptypes.func.isRequired,
};

export default Query;