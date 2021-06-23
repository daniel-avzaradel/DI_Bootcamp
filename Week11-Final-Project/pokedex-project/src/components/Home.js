import React from 'react';
import pikachu003 from '../img/pikachu003.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return(
        <>
        <div className="home">
            <img src={pikachu003} alt="" />
            <Link to='/pokedex'><button className="enter">ENTER</button></Link>
        </div>
        <footer>
            All rights reserved. Pokedex WebApp was creaeted by Daniel Avzaradel for his Final Project at Developers Institute - JavaScript Full Stack DeveloperBootcamp
        </footer>
        </>
    )
}

export default Home;