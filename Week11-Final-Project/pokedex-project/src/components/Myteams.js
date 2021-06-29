import React, {useState} from 'react';
import './Myteams.css';
import boy from '../img/boy.png';

const Myteams = ({pokemon}) => {

    return(
        <>
        <div className="team-page">
            <h1>MY TEAMS</h1>
            <br />
            <Team pokemon={pokemon} />
        </div>
        </>
    )
}

const Team = ({pokemon}) => {
    console.log(pokemon)

    return(
        <div className="team">
            <div className="trainer">
                <div className="trainer-stats">
                <h3>Team <span style={{color: '#e4e4e4'}}>Developers Institute</span></h3>
                <h4>Trainer: <span style={{color: '#e4e4e4'}}>Daniel</span></h4>
                <h4>Age: <span style={{color: '#e4e4e4'}}>32</span></h4>
                <h4>Gender: <span style={{color: '#e4e4e4'}}>Male</span></h4>
                </div>
                <div className="trainer-img">
                    <img src={boy} alt="" />
                </div>
            </div>
            <br />
            <div className="pokemon-list">
                <div className="pokemon-li">Pokemon #1</div>
                <p>Pokemon #2</p><br />
                <p>Pokemon #3</p><br />
                <p>Pokemon #4</p><br />
                <p>Pokemon #5</p><br />
                <p>Pokemon #6</p><br />
            </div>
        </div>
    )
}

export default Myteams;