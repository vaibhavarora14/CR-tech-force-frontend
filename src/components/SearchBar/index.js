/* eslint-disable/ */
import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';

import statesCitiesData from './../../utils/state-city-map';
import { requirements } from './../../constants';
import ROUTES from './../../constants/routes';

import { Context as SearchContext } from './../../context/SearchContext';

import Button from './../Button';
import SelectInput from './../SelectInput';

import './SearchBar.scss';

const SearchBar = (props) => {
  const { history } = props;
  const { searchInputs, state } = useContext(SearchContext);
  const [selectedState, setSelectedState] = useState(state.searchInputs ? state.searchInputs.state : '');
  const [selectedCity, setSelectedCity] = useState(state.searchInputs ? state.searchInputs.city : '');
  const [selectedRequirement, setSelectedRequirement] = useState(state.searchInputs ? state.searchInputs.requirement : '');
  const [cities, setCities] = useState([]);
  const [firstClick, setFirstClick] = useState(false);

  useEffect(() => {
    if (state && state.searchInputs) {
      setSelectedState(selectedState);
      setSelectedCity(selectedCity);
      const selectedStatData = statesCitiesData.find(
        (state) => state.state === selectedState
      );

      const citiesData =
        !!selectedStatData &&
          !!selectedStatData.cities &&
          selectedStatData.cities.length > 0
          ? selectedStatData.cities
          : [];

      setCities(citiesData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const states = statesCitiesData.map((state) => state.state);


  const handleStateChange = (selectedState) => {
    setSelectedState(selectedState);
    setSelectedCity('');
    const selectedStatData = statesCitiesData.find(
      (state) => state.state === selectedState
    );

    const citiesData =
      !!selectedStatData &&
        !!selectedStatData.cities &&
        selectedStatData.cities.length > 0
        ? selectedStatData.cities
        : [];

    setCities(citiesData);
  };




  const handleCityChange = (selectedCity) => {
    setSelectedCity(selectedCity);
  };

  const handleRequirementChange = (selectedRequirement) => {
    setSelectedRequirement(selectedRequirement);
  };

  const isValidSearchQuery = (searchQuery) => {
    return searchQuery.state && searchQuery.city && searchQuery.requirement
  }

  const handleSubmit = () => {
    const {
      location: { pathname },
    } = history;
    setFirstClick(true);
    const searchQuery = {
      state: selectedState.trim(),
      city: selectedCity.trim(),
      requirement: selectedRequirement.trim(),
    };
    if (!isValidSearchQuery(searchQuery)) {
      return;
    }
    searchInputs(searchQuery);

    if (props.onSubmit && isValidSearchQuery(searchQuery)) {
      props.onSubmit();
    }

    pathname === '/' && history.push(ROUTES.SEARCH);
  };

  return (
    <div className="SearchBar d-flex w-100">
      <SelectInput
        label="Select State"
        placeholder="Enter your state"
        value={selectedState}
        options={states}
        onChange={handleStateChange}
        firstClick={firstClick}
        errorMsg="Please enter your state!"
      />
      <SelectInput
        label="Select City / Region"
        placeholder="Enter your city"
        value={selectedCity}
        options={cities}
        onChange={handleCityChange}
        firstClick={firstClick}
        errorMsg="Please enter your city!"
      />
      <SelectInput
        label="What are you're looking for"
        placeholder="eg. ICU Beds, Oxygen"
        value={selectedRequirement}
        options={requirements}
        onChange={handleRequirementChange}
        firstClick={firstClick}
        errorMsg="Please enter what are you're looking for!"
      />
      <Button
        label="Find Leads"
        icon={<SearchIcon />}
        onClick={() => handleSubmit()}
      />
    </div>
  );
};

export default withRouter(SearchBar);
