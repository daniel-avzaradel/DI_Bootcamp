import React from 'react';
import './App.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  decrease = () => {
    const {counter} = this.state;
    this.setState({
      counter: counter - 1
    })
  }

  increase = () => {
    const {counter} = this.state;
    this.setState({
      counter: counter + 1
    })
  }

  render() {

    const {counter} = this.state;

    return (
      <div className="counter">
        <h1>REACT COUNTER</h1>
        <p>by: Daniel avzaradel</p>
        <br/>
        <div className="buttons">
          <button onClick={this.decrease}>-</button>{counter}<button onClick={this.increase}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
