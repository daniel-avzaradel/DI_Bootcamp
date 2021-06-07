import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const HomeScreen = () => {
  return(
      <div>
          <h1>Home Screen</h1>
      </div>
  )
}

const ProfileScreen = () => {
    return(
        <>
        <h1>Profile Screen</h1>
        </>
    )
}

const ShopScreen = () => {
  return(
      <>
      <h1>Shop Screen</h1>
      </>
  )
}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <NavLink className="btn mr-3" to='/'>Home</NavLink>
          <NavLink className="btn mr-3" to='/profile'>Profile</NavLink>
          <NavLink className="btn mr-3" to='/shop'>Shop</NavLink>
        </Navbar>  

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/shop">
            <ShopScreen />
          </Route>
        </Switch>
      </Router>
      );
  }
}

export default App;