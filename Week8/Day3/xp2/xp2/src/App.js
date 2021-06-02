import React, { Component } from 'react';

class Parent extends Component {
  constructor(){
    super();
    this.state = {
      favoriteColor: 'red',
      show: true
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
    
        <p>{this.state.show ? <Child /> : null}</p>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Click me to toggle
        </button>
      </>
    )
  }
}

class Child extends React.Component {

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

export default Parent;
