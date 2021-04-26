import { useLazyQuery } from '@apollo/client';
import { Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import React, { useContext, useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SearchBar from '../../components/SearchBar';
import SearchResultCard from '../../components/SearchResultsCard/SearchResultCard';
import { Context as SearchContext } from './../../context/SearchContext';

function SearchPage() {
  const { state } = useContext(SearchContext);

  const [currentData, setCurrentData] = useState([]);

  const getFilter = () => {
    let filter = "";
    if (state?.searchInputs?.state) {
      filter += `custom_string:'${state?.searchInputs?.state}'`;
    }

    if (state?.searchInputs?.city) {
      filter += `${filter.length > 0 ? ' AND ' : ''}custom_string:'${state?.searchInputs?.city}'`;
    }

    if (state?.searchInputs?.requirement) {
      filter += `${filter.length > 0 ? ' AND ' : ''}custom_string:'${state?.searchInputs?.requirement}'`;
    }

    return `"${filter}"`
  }


  const [executeSearch, { loading, called }] = useLazyQuery(GET_SEARCH(getFilter()), {
    onCompleted: (data) => {
      setCurrentData(data?.workspace?.tickets?.edges || [])
    }, onError: () => {
      setCurrentData([]);
    }
  });

  useEffect(() => {
    if (state?.searchInputs?.state && state?.searchInputs?.city && state?.searchInputs?.requirement) {
      executeSearch();
    }
  }, [state]);

  return (
    <div>
      <SearchBar onSubmit={() => {
        setCurrentData([]);
        executeSearch();
      }} />
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
          <Typography color="textSecondary" className="mb-4">Showing {currentData.length} Result{currentData.length > 1 ? 's' : ''}</Typography>
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

const GET_SEARCH = (filter: string) => gql`
    query {
        workspace {
          tickets(filter: ${filter}) {
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
    `;

export default SearchPage;
