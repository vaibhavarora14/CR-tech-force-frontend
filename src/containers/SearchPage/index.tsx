import React, { useContext } from 'react';

import { Context as SearchContext } from './../../context/SearchContext';

import SearchResultCard from '../../components/SearchResultsCard/SearchResultCard';

function SearchPage() {
  const { state } = useContext(SearchContext);
  console.log('SearchPage-state::: ', state);
  return (
    <h3>
      <SearchResultCard
        title={'Nirala Hospital'}
        lastVerified={'20 mins'}
        phone={'9718497676'}
        location={'Noida'}
        details={'Lorem Ipsum Dolor Sit'}
        thumbsUpcount={4}
        thumbsDownCount={0}
      />
    </h3>
  );
}

export default SearchPage;
