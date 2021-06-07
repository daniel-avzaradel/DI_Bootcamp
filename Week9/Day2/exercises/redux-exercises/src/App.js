import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import {changePropertyOne, changePropertyTwo} from './redux/action'
import Child from './components/Child'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // property_one: 'text one',
      // property_two: 'text two',
    }
  }

  // handleChange = (event) => {
  //   this.setState({property_one: event.target.value})
  // }
  handleClick = (event) => {
    event.prevetDefault();
    this.setState({property_two: this.state.property_one})
  }

  render() {
    return(
      <div className="form">
        <h1>Simple Redux Example</h1>
        <h3>Property One: {this.props.prop_one} </h3>
        <input type="text" onChange={this.props.handleChange} />
        <h3>Property Two: {this.props.prop_two} </h3>
        <button onClick={() => this.props.handleClick()}>CLICK</button>
        <Child />
        {this.props.property_one}<br/>
        {this.props.property_two}<br/>
        <input type="text" onChange={() => this.props.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prop_one: state.property_one,
    prop_two: state.property_two,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange:(event) => dispatch(changePropertyOne(event.target.value)),
    handleClick: () => dispatch(changePropertyTwo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
