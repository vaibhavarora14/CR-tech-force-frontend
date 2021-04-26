import { useQuery } from '@apollo/client';
import { Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import React, { useContext, useState } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SearchBar from '../../components/SearchBar';
import SearchResultCard from '../../components/SearchResultsCard/SearchResultCard';
import { Context as SearchContext } from './../../context/SearchContext';

function SearchPage() {
  const { state } = useContext(SearchContext);

  const [currentData, setCurrentData] = useState([]);

  const { loading, called, refetch } = useQuery(GET_SEARCH_QUERY, {
    variables: {
      city: state?.searchInputs?.city,
      state: state?.searchInputs?.state,
      requirement: state?.searchInputs?.requirement,
      enabled: false,
    }, onCompleted: (data) => {
      setCurrentData(data?.workspace?.tickets?.edges || [])
    }, onError: () => {
      setCurrentData([]);
    }
  })
  return (
    <div>
      <SearchBar onSubmit={refetch} />
      {state?.searchInputs && called && <>
        {loading && <div className="d-flex justify-content-center">
          <Loader
            type="ThreeDots"
            color="#4452CE"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>}
        {!loading && currentData.length === 0 && <h3>Sorry, No data available</h3>}
        {currentData.length !== 0 && <>
          <Typography color="textSecondary" className="mb-4">Showing {currentData.length} Results</Typography>
          <div className="d-flex flex-wrap">
            {currentData.map(((edgeData: any) =>
              <SearchResultCard
                className="col-12 col-md-6 col-lg-4 px-sm-4"
                title={edgeData.node.resourceName}
                lastVerified={edgeData.node.updatedAt}
                phone={edgeData.node.supplierDonorContactNumber}
                location={edgeData.node.address}
                details={edgeData.node.otherInfo}
                thumbsUpcount={edgeData.node.upvoteCount}
                ticketId={edgeData.node.ticketId}
              />
            ))}
          </div></>}
      </>}
    </div>
  );
}

const GET_SEARCH_QUERY = gql`
query {
          workspace {
            tickets(filter: "custom_string='$city' AND custom_string='$state' AND custom_string='$requirement'") {
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
                  upvoteCount
                  resourceName
                  updatedAt
                  address
                  otherInfo
                }
              }
            }
          }
        }
`


export default SearchPage;
