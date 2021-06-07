import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './components/ErrorBoundary'


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

const ShopScreen = (props) => {
  
  const error = props;
  console.log(error)

    return(
      <>
      <h1>Shop Screen</h1>
      </>
    )
  }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  handleClick() {
      this.setState({error: true})
  }

  render() {
    const {error} = this.state;
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <NavLink className="btn mr-3" to='/'>Home</NavLink>
          <NavLink className="btn mr-3" to='/profile'>Profile</NavLink>
          <NavLink className="btn mr-3" error={error} onClick={() => this.handleClick()} to='/shop'>Shop</NavLink>
        </Navbar>  
        <hr/>
        <Switch>
          <Route exact path="/">
            <ErrorBoundary>
            <HomeScreen />
            </ErrorBoundary>
          </Route>
          <Route path="/profile">
          <ErrorBoundary>
            <ProfileScreen />
            </ErrorBoundary>
          </Route>
          <Route path="/shop">
          <ErrorBoundary>
            <ShopScreen />
            </ErrorBoundary>
          </Route>
        </Switch>
      </Router>
      );
  }
}

export default App;