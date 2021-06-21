import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Myteams from './components/Myteams';
import Pokedex from './components/Pokedex'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pokedex' component={Pokedex} />
          <Route exact path='/myteams' component={Myteams} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return(
    <h1>Home</h1>
  )
}

export default App;
