import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Home from './containers'
import SearchPage from './containers/SearchPage'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Router exact path="/search" component={SearchPage} />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
