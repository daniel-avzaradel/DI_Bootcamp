import React from 'react';
import Home from './components/Home'
import Profile from './components/Profile'
import Shop from './components/Shop'
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'

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
