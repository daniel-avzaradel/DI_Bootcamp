import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      favoriteColor: 'red',
    }
  }

  componentDidMount() {
      this.setState({favoriteColor: 'red'})

      setTimeout(() => {
        this.setState({favoriteColor: 'yellow'})
      }, 2000)
  }

  componentDidUpdate() {
    const after = document.getElementById('after')
    after.textContent = `The updated favorite is ${this.state.favoriteColor}`
  }

  shouldComponentUpdate(nextState) {
      return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('prev')
    .textContent = `Before the update the favorite was ${prevState.favoriteColor}`;
  }

  render() {
    return(
      <>
        <p>Ex.1: ComponentDidUpdate</p>
        <div>
          <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        </div>
        <div id="prev">Before the update the favorite was </div>
        <div id="after">The updated favorite is</div>
    
        <Child />
      </>
    )
  }
}

class Child extends React.Component {
  constructor() {
    super();
    this.state = {
        show: true
      }
    }

    componentWillUnmount() {
      alert('The component named Header is about to be unmounted')
    }

    render() {
      return(
        <>
        <header><strong>Hello World</strong></header>
        </>
      )
    }

  }

export default App;
