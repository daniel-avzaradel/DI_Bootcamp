import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Myteams.css';
import boy from '../img/boy.png';

const Myteams = ({pokemon}) => {

    const [create, setCreate] = useState(false)
    const [team, setTrainer] = useState({
        team: '',
        trainer: '',
        age: '',
        gender: ''
    });

    return(
        <>
        <div className="team-page">
            <h1>MY TEAMS</h1>
            <br />
            <button className="btn">Create a new team</button>
            <br />
            <div className="teams">
            <TeamDaniel pokemon={pokemon} />
            </div>
        </div>
        </>
    )
}

const TeamDaniel = ({pokemon}) => {

    return(
        <div className="team">
            <div className="trainer">
                <div className="trainer-stats">
                <h3>Team <span>Developers Institute</span></h3>
                <p>Trainer: <span>Daniel Avzaradel</span></p>
                <p>Age: <span>32</span></p>
                <p>Gender: <span>Male</span></p>
                </div>
                <div className="trainer-img">
                    <img src={boy} alt="" />
                </div>
            </div>
            <div className="pokemon-list">
                    <PokemonTeam pokemon={pokemon} />
                    <PokemonTeam pokemon={pokemon} />
                    <PokemonTeam pokemon={pokemon} />
                    <PokemonTeam pokemon={pokemon} />
                    <PokemonTeam pokemon={pokemon} />
                    <PokemonTeam pokemon={pokemon} />
            </div>
            <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

const PokemonTeam = ({pokemon}) => {

    const random = Math.floor(Math.random() * 151);

    return(
        <div>
        <Link to={'/pokedex/'+ (random+1)}>
            <div className="pokemon-li">
                <div className="sprite">
                    <div className="pokeball">
                    <img src={pokemon[random].sprites.front_default} alt="" />
                    </div>
                </div>
                <div className="pokemon-li-stats">
                    <p>{pokemon[random].name.toUpperCase()}</p>
                    <div className="hp" style={{backgroundColor: '#333'}}><p style={{color: 'gold', fontWeight: 'bold'}}>HP: </p><div className="hp-bar"></div></div>
                    <p style={{textAlign: 'right', marginRight: '10px', color: 'white'}}>{pokemon[random].stats[0].base_stat} / {pokemon[random].stats[0].base_stat}</p>
                </div>
            </div>
        </Link>
        </div>
    )
}

export default Myteams;