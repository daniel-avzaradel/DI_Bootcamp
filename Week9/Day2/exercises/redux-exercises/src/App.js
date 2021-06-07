import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property_one: 'text one',
      property_two: 'text two',
    }
  }

  handleChange = (event) => {
    this.setState({property_one: event.target.value})
  }
  handleClick = () => {
    this.setState({property_two: this.state.property_one})
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.handleChange}>{this.state.property_one}</input>
        <br/>
        <input type="text">{this.state.property_two}</input>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default App;
