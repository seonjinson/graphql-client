import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import Home from './Home';
import Detail from './Detail';
import GlobalStyles from './globalStyles';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <GlobalStyles />
          <Route exact path="/" component={Home} />
          <Route path="/details/:movieId" component={Detail} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
