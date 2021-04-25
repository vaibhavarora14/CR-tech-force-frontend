import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './containers'
import SearchPage from './containers/SearchPage'

const httpLink = createHttpLink({
    uri: 'https://vz3uy4iya2.execute-api.ap-south-1.amazonaws.com/dev/graphql'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

function App() {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    )
}

export default App
