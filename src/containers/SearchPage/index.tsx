import React, { useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag';

function SearchPage() {

  const { data } = useQuery(GET_SEARCH('Haryana', 'Ambala', 'Oxygen'))
  console.log(data)

  return (
    <h3>
      Search Page (coming soon...)
    </h3>
  )
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

export default SearchPage