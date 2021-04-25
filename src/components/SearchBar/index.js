import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import statesCitiesData from './../../utils/state-city-map';
import { requirements } from './../../constants';
import ROUTES from './../../constants/routes';

import { Context as SearchContext } from './../../context/SearchContext';

import Button from './../Button';
import SelectInput from './../SelectInput';

import './SearchBar.scss';

const SearchBar = () => {
  const { searchInputs } = useContext(SearchContext);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRequirement, setSelectedRequirement] = useState('');
  const [cities, setCities] = useState([]);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const states = statesCitiesData.map((state) => state.state);

  const handleStateChange = (selectedState) => {
    setSelectedState(selectedState);
    const selectedStatData = statesCitiesData.find(
      (state) => state.state === selectedState
    );

    const citiesData =
      !!selectedStatData &&
      !!selectedStatData.cities &&
      selectedStatData.cities.length > 0
        ? selectedStatData.cities
        : [];

    console.log('citiesData::: ', citiesData);

    setCities(citiesData);
  };

  const handleCityChange = (selectedCity) => {
    setSelectedCity(selectedCity);
  };

  const handleRequirementChange = (selectedRequirement) => {
    setSelectedRequirement(selectedRequirement);
  };

  const handleSubmit = () => {
    const searchQuery = {
      state: selectedState,
      city: selectedCity,
      requirement: selectedRequirement,
    };
    searchInputs(searchQuery);
    setRedirectToHome(true);
  };

  return (
    <div className="SearchBar d-flex">
      <SelectInput
        label="Select State"
        placeholder="Enter your state"
        value={selectedState}
        options={states}
        onChange={handleStateChange}
      />
      <SelectInput
        label="Select City / Region"
        placeholder="Enter your city"
        value={selectedCity}
        options={cities}
        onChange={handleCityChange}
      />
      <SelectInput
        label="What are your looking for"
        placeholder="eg. ICU Beds, Oxygen"
        value={selectedRequirement}
        options={requirements}
        onChange={handleRequirementChange}
      />
      <Button
        disabled={!selectedState && !selectedCity && !selectedRequirement}
        label="Find Leads"
        icon={<SearchIcon />}
        onClick={handleSubmit}
      />
      {!!redirectToHome && <Redirect to={ROUTES.SEARCH} />}
    </div>
  );
};

export default SearchBar;
