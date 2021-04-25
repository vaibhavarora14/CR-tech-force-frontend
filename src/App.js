import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core';
import './global/styles/common.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './containers'
import SearchPage from './containers/SearchPage'
import { Provider as SearchProvider } from './context/SearchContext';

const httpLink = createHttpLink({
  uri: 'https://vz3uy4iya2.execute-api.ap-south-1.amazonaws.com/dev/graphql'
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

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <SearchProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
              <Header />
              <div className="container">
                <Switch>
                  <Route exact path="/search" component={SearchPage} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </SearchProvider>
    </ApolloProvider>
  )
}

export default App
