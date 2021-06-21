import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Myteams from './components/Myteams';
import Pokedex from './components/Pokedex';
import NotFound from './components/NotFound';
import { getAllPokemon, getPokemon } from './services/pokemon'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true)
  const url = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(url);
      console.log(response);
      await loadingPokemon(response.results)
      setLoading(false)
    }
    fetchData();
  }, [])

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        console.log(pokemonRecord);
        return pokemonRecord;
      }))
      setPokemonData(_pokemonData)

    }

  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pokedex'>
            <Pokedex/>
          </Route>
          <Route exact path='/myteams' component={Myteams} />
          <Route component={NotFound} />
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
