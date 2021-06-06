import React from 'react';
import './hero.css';

const Hero = ({hero,handleClick}) => {
  // const {hero} = props;
  const {name,occupation,image,id} = hero;
  return (
    <div >
      <div className='hero' style={ {backgroundImage:`url(${image})`} }
      onClick = {()=>handleClick(id)}
      >
      </div>
      <div className='hero-content'>
        <p>
        {name}<br/>
        {occupation}
        </p>
      </div>
    </div>
  )
}
export default Hero
