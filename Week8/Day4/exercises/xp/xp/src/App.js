import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        error: false
    }
  }

  onClick() {
    this.setState({error: true})
  }

  render() {
    if(this.state.error) {
      throw new Error ('oh no')
    }
    return (
      <h1>React</h1>
    );
  }
}

export default App;
