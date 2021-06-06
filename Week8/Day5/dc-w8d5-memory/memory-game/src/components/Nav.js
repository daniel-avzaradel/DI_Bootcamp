import React from 'react';

const Nav = (props) => {
    const {score, top_score} = props;
    return(
        <div>
            <h2>Score: {score}<br/>
            Top Score: {top_score}</h2>
        </div>
    )
}

export default Nav;