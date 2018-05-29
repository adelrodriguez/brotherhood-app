import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Register from './containers/Register';
import List from './containers/List';
import EditItem from './containers/EditItem';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Auth from './containers/Auth';

// Import syles
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/hermandades/:id/edit" component={Auth(EditItem)} />
        <Route path="/hermandades" component={Auth(List)} />
        <Route exact path="/" component={Register} />
      </Switch>
    );
  }
}

export default App;
