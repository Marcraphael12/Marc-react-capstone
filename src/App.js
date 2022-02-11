import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Countries from './components/countries/Countries';
import CountryInfo from './components/countries/country_infos';
import { dataLoading, loadDataThunk, selectData } from './Redux/covid/covid';
import countryNames from './components/countries/countries_name';
import Footer from './components/Footer';
import './scss/app.scss';

function App() {
  const countries = useSelector((state) => state.covidReducer.countries);
  const total = useSelector((state) => state.covidReducer.total);
  const load = useSelector((state) => state.covidReducer.loading);
  const currentCntry = useSelector((state) => state.covidReducer.currentCountry);
  const isoName = countryNames[currentCntry];

  const mapImg = isoName ? `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${isoName.toLowerCase()}/vector.svg` : '/World_map.png';
  const dispatch = useDispatch();

  const handleClick = (country) => dispatch(selectData(country));
  useEffect(() => {
    dispatch(dataLoading());
    dispatch(loadDataThunk());
  }, [dispatch]);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Countries countries={countries} total={total} loading={load} handleClick={handleClick} />} />
        <Route path="/country" element={<CountryInfo current={currentCntry} image={mapImg} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;;
