import React from 'react';

class SearchBox extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    }

    // handleChange = (event) => {
    //     this.setState({ searchText: event.target.value })
    //   }
    
      handleClick = () => {
        this.setState({ searchText: this.state.searchText })
      }

    render() {
        const {handleClick} = this.props;
        return(
            <div className="tc">
                <input 
                className="pa1 ma2 bs b--green bg-lightest-blue"
                type="search" placeholder="Search" 
               />
                <button className="pas3 ma2 ba b--green" onClick={() => handleClick(this.state.searchText)}>Search</button>
            </div>
        )
    }
};

export default SearchBox