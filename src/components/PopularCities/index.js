import React from 'react';
import TextButton from '../TextButton';

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

const PopularCities = () => {
  const cityButtons = popularCities.map((city) => (
    <TextButton key={city} label={city} />
  ));
  return (
    <div className="PopularCities">
      <div className="PopularCities-title text-align-center">
        POPULAR CITIES
      </div>
      <div className="d-flex">{cityButtons}</div>
    </div>
  );
};

export default PopularCities;
