import React from 'react';

import Header from '../components/Header';
import Dashboard from './Dashboard';

import './../global/styles/common.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Dashboard />
      </div>
      {/* Footer */}
    </div>
  );
};

export default App;
