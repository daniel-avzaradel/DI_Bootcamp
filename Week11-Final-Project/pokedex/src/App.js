import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import Card from './components/Cards/Card';
import NavBar from './components/Navbar/NavBar'
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let loading = await loadingPokemon(response.results);

      setLoading(false)
    }
    fetchData();
  }, [])

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
  }
  return (
    <div>
      {
        loading ? <h1>Loading...</h1> : (
          <>
            <NavBar />
            <div className="grid-container">
              {
                pokemonData.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon} />
                })
              }
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
