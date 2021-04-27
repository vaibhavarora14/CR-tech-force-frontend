import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core';
import './global/styles/common.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './containers'
import AddResources from './containers/AddResources'
import SearchPage from './containers/SearchPage'
import VolunteerPage from './containers/Volunteer'
import DataPartnerPage from './containers/DataPartner'
import { Provider as SearchProvider } from './context/SearchContext';
import SocialLinks from './components/SocialLinks';
import ScrollToTop from './components/ScrollToTop';
import ApolloLinkTimeout from 'apollo-link-timeout';
import { useEffect } from 'react';
import { initGA } from '.';
import TrackPageView from './components/TrackPageView';


const timeoutLink = new ApolloLinkTimeout(15000);
const httpLink = createHttpLink({
  uri: 'https://ps9ciugbod.execute-api.ap-south-1.amazonaws.com/dev/graphql'
})

const timeoutHttpLink = timeoutLink.concat(httpLink);
const client = new ApolloClient({
  link: timeoutHttpLink,
  cache: new InMemoryCache()
})
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#4452CE',
      light: '#4452CE',
      main: '#4452CE',
      dark: '#6744CC',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    }
  },
  overrides: {
    MuiCard: {
      root: {
        boxShadow: 'none',
        borderRadius: '8px',
      }
    },
    MuiTypography: {
      h6: {
        fontSize: '18px',
      },
      subtitle2: {
        fontSize: '12px',
      }
    }
  }
});


function App() {
  useEffect(() => {
    initGA();
  }, [])

  return (
    <ApolloProvider client={client}>
      <SearchProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
              <ScrollToTop />
              <TrackPageView />
              <ThemeProvider theme={theme}>
                <Header />
                <div className="container">
                  <Switch>
                    <Route exact path="/addResources" component={AddResources} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/volunteer" component={VolunteerPage} />
                    <Route exact path="/dataPartner" component={DataPartnerPage} />
                  </Switch>
                </div>
                <Footer />
                <SocialLinks />
              </ThemeProvider>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </SearchProvider>
    </ApolloProvider>
  )
}

export default App
