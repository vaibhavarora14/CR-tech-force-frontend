import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import Button from './../Button';
import SelectInput from './../SelectInput';

import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="SearchBar d-flex">
      <SelectInput label="Select State" placeholder="Enter your state" />
      <SelectInput label="Select City / Region" placeholder="Enter your city" />
      <SelectInput
        label="What are your looking for"
        placeholder="eg. ICU Beds, Oxygen"
      />
      <Button label="Find Leads" icon={<SearchIcon />} />
    </div>
  );
};

export default SearchBar;
