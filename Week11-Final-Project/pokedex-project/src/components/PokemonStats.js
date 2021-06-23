import React from 'react';
import {useParams} from 'react-router-dom'
import './PokemonStats.css'

const PokemonStats = (props) => {
    
    const {name} = useParams();
    const pokemon = props.pokemon.filter(item => {
        if(item.name === name) {
            return item
        }
    })
    console.log(pokemon);
    
    return(
        <div className="box">
            <div className="poke-card">
                <header>
                <img src={pokemon[0].sprites.other.dream_world.front_default} alt="" style={{maxHeight: '10%', maxWidth: '25%', float: 'left'}} />
                <div className="data">
                    <h3>Pokemon Data</h3>
                    <hr />
                    <p><strong>Name: </strong> <span>{pokemon[0].name.toUpperCase()}</span></p>
                    <hr />
                    <p><strong>Pokedex Entry: </strong> <span>#{pokemon[0].id}</span></p>
                    <hr />
                    <div className="types">
                    <p><strong>Types: </strong></p>
            {
                pokemon[0].types.map((type, i) => {
                    return(
                        <div className="type" style={{ backgroundColor: TYPE_COLORS[type.type.name]}} key={i}>
                            {type.type.name}
                        </div>
                    )
                })
            }
            </div>
                </div>
                </header>
            </div>
        </div>
    )
}

const TYPE_COLORS = {
    bug: '#C3D21F',
    dark: '#8A6653',
    dragon: '#8A76FF',
    electric: '#FEE744',
    fairy: '#FBAEFF',
    fighting: '#A45544',
    fire: '#FA5543',
    flying: '#79A4FF',
    ghost: '#7874D4',
    grass: '#8DD851',
    ground: '#ECCE5B',
    ice: '#96F1FF',
    normal: '#BAB9AD',
    poison: '#A85CA0',
    psychic: '#F965B2',
    rock: '#CEBD72',
    steel: '#C2C0D8',
    water: '#56AEFF',
}

export default PokemonStats;