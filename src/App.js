import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './containers'
import SearchPage from './containers/SearchPage'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/search" component={SearchPage} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
