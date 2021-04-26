import { useQuery } from '@apollo/client';
import { Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import React, { useContext } from 'react';
import SearchBar from '../../components/SearchBar';
import SearchResultCard from '../../components/SearchResultsCard/SearchResultCard';
import { Context as SearchContext } from './../../context/SearchContext';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function SearchPage() {
  const { state } = useContext(SearchContext);

  let currentData = [];
  const { data, called, loading } = useQuery(GET_SEARCH(state?.searchInputs?.state, state?.searchInputs?.city, state?.searchInputs?.requirement))
  if (state?.searchInputs) {
    currentData = data?.workspace?.tickets?.edges || [];
  }

  // TODO: remove dummy data once API integration working fine
  // currentData = [
  //   {
  //     "node": {
  //       updatedAt: null,
  //       ticketId: null,
  //       state: null,
  //       city: null,
  //       address: null,
  //       pincode: null,
  //       contactName: null,
  //       supplierDonorContactNumber:
  //         null,
  //       resourceType: null,
  //       resourceName: null,
  //       costPerUnit: null,
  //       availableUnits: null,
  //       upvoteCount: null,
  //       otherInfo: null,
  //       subResourceType: null,
  //     }
  //   },
  //   {
  //     "node": {
  //       updatedAt: null,
  //       ticketId: null,
  //       state: null,
  //       city: null,
  //       address: null,
  //       pincode: null,
  //       contactName: null,
  //       supplierDonorContactNumber:
  //         null,
  //       resourceType: null,
  //       resourceName: null,
  //       costPerUnit: null,
  //       availableUnits: null,
  //       upvoteCount: null,
  //       otherInfo: null,
  //       subResourceType: null,
  //     }
  //   },
  // ]



  return (
    <div>
      <SearchBar />
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
                thumbsDownCount={edgeData.node.downvoteCount}
              />
            ))}
          </div></>}
      </>}
    </div>
  );
}

const GET_SEARCH = (state: string, city: string, resourceType: string) => {
  let filter = "";
  if (state) {
    filter += `custom_string:'${state}'`;
  }

  if (city) {
    filter += `${filter.length > 0 ? ' AND ' : ''}custom_string:'${city}'`;
  }

  if (resourceType) {
    filter += `${filter.length > 0 ? ' AND ' : ''}custom_string:'${resourceType}'`;
  }

  return gql`
    query {
        workspace {
          tickets(filter: "${filter}") {
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
                resourceName
                updatedAt
                address
                otherInfo
                upvoteCount
                downvoteCount
              }
            }
          }
        }
      }
    `
}


export default SearchPage;
