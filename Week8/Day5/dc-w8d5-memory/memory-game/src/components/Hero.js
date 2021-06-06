import React from 'react';
import './Hero.css';

const Hero = ({hero}) => {
    const {name, occupation, image, id} = hero;

    return (
        <div>
            <div>
                <img src={image}/>
                <h4>{name}</h4>
                <p>{occupation}</p>
            </div>
        </div>
    )
}

export default Hero;