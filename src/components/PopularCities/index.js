import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import ROUTES from './../../constants/routes';

import { Context as SearchContext } from './../../context/SearchContext';

import TextButton from './../TextButton';

import './PopularCities.scss';

const popularCities = [
  'Delhi',
  'Noida',
  'Gurgaon',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Mumbai',
];

const PopularCities = (props) => {
  const { searchInputs } = useContext(SearchContext);
  const { history } = props;

  const cityButtons = popularCities.map((city) => (
    <TextButton key={city} label={city} onClick={() => handleSubmit(city)} />
  ));

  const handleSubmit = (city) => {
    const searchQuery = {
      state: '',
      city,
      requirement: '',
    };
    searchInputs(searchQuery);
    history.push(ROUTES.SEARCH);
  };

  return (
    <div className="PopularCities">
      <div className="PopularCities-title text-align-center">
        POPULAR CITIES
      </div>
      <div className="d-flex PopularCities-cities">{cityButtons}</div>
    </div>
  );
};

export default withRouter(PopularCities);
