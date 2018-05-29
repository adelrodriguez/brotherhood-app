import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Register from './containers/Register';
import List from './containers/List';
import EditItem from './containers/EditItem';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/hermandades/:id/edit" component={EditItem} />
        <Route path="/hermandades" component={List} />
        <Route exact path="/" component={Register} />
      </Switch>
    );
  }
}

export default App;
