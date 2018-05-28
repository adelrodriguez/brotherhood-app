import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Register from './containers/Register';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route exact path="/" component={Register} />
      </Switch>
    );
  }
}

export default App;