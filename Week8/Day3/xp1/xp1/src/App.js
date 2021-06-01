import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      favoriteColorEx1: '',
      favoriteColorEx11: '',
      favoriteColorEx2: 'red',
      favoriteColorEx3: 'blue',
    }
  }

  componentDidMount() {
      this.setState({favoriteColorEx1: 'red'})
      this.setState({favoriteColorEx11: 'red'})

      setTimeout(() => {
        this.setState({favoriteColorEx11: 'yellow'})
      }, 5000)
  }

  changeColor() {
    this.setState({favoriteColorEx2: 'blue'})
  }

  shouldComponentUpdate(nextState) {
      return true;
  }

  render() {
    return(
      <>
        <p>Ex.1</p>
        <h1>My Favorite Color is {this.state.favoriteColorEx1}</h1>
        <p>Ex.1.1</p>
        <h1>My Favorite Color is {this.state.favoriteColorEx11}</h1>
        <p>Ex.2: Render</p>
        <button style={{padding: '6px 14px', color: 'black', backgroundColor: 'lightblue'}} onClick={() => this.changeColor()}>Change Color</button>
        <h1>My Favorite Color is {this.state.favoriteColorEx2}</h1>
        <p>Ex.3: shouldComponentUpdate</p>
        <button style={{padding: '6px 14px', color: 'black', backgroundColor: 'salmon'}} onClick={() => {this.setState({favoriteColorEx3: 'pink'})}}>Change Color</button>
        <h1>My Favorite Color is {this.state.favoriteColorEx3}</h1>
      </>
    )
  }
}

export default App;
