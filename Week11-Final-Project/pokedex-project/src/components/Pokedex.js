import React from 'react';

const Pokedex = ({pokemon}) => {
    return(
        <div>
        {
            pokemon.map((item, i) => {
                return <Pokemon key={i} pokemon={item} />
            })
        }
        </div>
    )
}

const Pokemon = (item) => {
    console.log(item);
    return(
        <div className="card">
            {item.pokemon.name}
        </div>
    )
}

export default Pokedex;