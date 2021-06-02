import React from 'react';

    export default class BuggyCounter extends React.Component {
    constructor(props){
      super(props);
      this.state = { hasError: false }
    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: true })
    }
    
    render() {
      if(this.state.hasError) {
        <h1>Caught by Error Boundary</h1>
      }
      return this.props.children
    }
  
  }