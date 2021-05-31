import React from 'react';

const Card = (props) => {
    const {data} = props;
    const {name, email, id} = data;
    return (
      <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
        <img src={`https://robohash.org/${id}?size=200x200`} alt=""></img>
        
        <h3 className="mt3">{name}</h3>
        <p>{email}</p>
      </div>
    );
}

export default Card;