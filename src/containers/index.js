import React from 'react';
import './../global/styles/common.scss';
import Dashboard from './Dashboard';

import './../global/styles/common.scss';

const Home = () => {
  return (
    <div className="App">
        <div className="container">
          <Dashboard />

          {/* For testing Search Results Card */}
          {/* <SearchResults /> */}

          
        </div>
        {/* Footer */}
    </div>
  );
};

export default Home;
