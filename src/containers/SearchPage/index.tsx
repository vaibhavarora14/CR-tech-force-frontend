import React from 'react'
import SearchResultCard from '../../components/SearchResultsCard/SearchResultCard'

function SearchPage() {
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
    )
}

export default SearchPage
