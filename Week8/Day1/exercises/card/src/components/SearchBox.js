import React from 'react';

const SearchBox = (props) => {
    const {daniel, click} = props;
    return(
        <div className="tc">
            <input 
            className="pa1 ma2 bs b--green bg-lightest-blue"
            type="search" placeholder="Search" 
            />
            <button className="pas3 ma2 ba b--green" onClick={click}>Search</button>
        </div>
    )
}

export default SearchBox