import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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

const Pokedex = () => {
  return(
    <h1>Pokedex</h1>
  )
}

const Myteams = () => {
  return(
    <h1>Myteams</h1>
  )
}

export default App;
