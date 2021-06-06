import React from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'

class App extends React.Component{
  constructor(){
    super();
  }

  render() {
        return(
          <div>
            <NavBar/>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        )
    }
  }

export default App;
