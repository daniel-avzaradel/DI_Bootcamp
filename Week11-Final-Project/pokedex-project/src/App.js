import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Myteams from './components/Myteams';
import Pokedex from './components/Pokedex'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const url = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url)
      let data = await response.json();
      setPokemonData(data.results)
      console.log(pokemonData);
    }
    fetchData();
  }, [])

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
