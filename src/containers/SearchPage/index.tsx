import React, { useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag';
import { Context as SearchContext } from './../../context/SearchContext';

import SearchResultCard from '../../components/SearchResultsCard/SearchResultCard';

function SearchPage() {
  const { state } = useContext(SearchContext);
  console.log('SearchPage-state::: ', state);

  const { data } = useQuery(GET_SEARCH('Haryana', 'Ambala', 'Oxygen'))
  console.log(data)

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

const GET_SEARCH = (state: string, city: string, resourceType: string) => {
  return gql`
    query {
        workspace {
          tickets(filter: "custom_string:'${state}' AND custom_string:'${city}' AND custom_string:'${resourceType}'") {
            edges {
              node {
                id
                ticketId
                supplierDonorName
                supplierDonorContactNumber
                city
                state
                costPerUnit
                availableUnits
              }
            }
          }
        }
      }
    `
}


export default SearchPage;
