import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider as SearchProvider } from './context/SearchContext';

import Header from './components/Header';
import Home from './containers';
import SearchPage from './containers/SearchPage';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}

export default App;
