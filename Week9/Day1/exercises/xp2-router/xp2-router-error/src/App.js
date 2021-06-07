import React from 'react';
import Home from './components/Home'
import Profile from './components/Profile.js'
import Shop from './components/Shop'
import NavBar from './components/NavBar'
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/shop' component={Shop}/>
          </Switch>
      </div>
      );
  }
}

export default App;