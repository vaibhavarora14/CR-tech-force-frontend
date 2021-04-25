import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './containers'
import AddResources from './containers/AddResources'
import SearchPage from './containers/SearchPage'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

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
    return (
        <div className="App">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Header />
                    <div className="container">
                        <Switch>
                            <Route exact path="/addResources" component={AddResources} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/search" component={SearchPage} />
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
