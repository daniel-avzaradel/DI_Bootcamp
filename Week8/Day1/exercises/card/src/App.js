import React from 'react';
import './App.css';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import 'tachyons';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      arr: [],
      searchText: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({ arr:data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleFunction = (event) => {
    this.setState({ searchText: event.target.value })
  }

  handleClick = () => {
    console.log('click')
  }

  render(){
    const {arr, searchText} = this.state

    const filteredRobots = arr.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
      <>
        <SearchBox daniel={this.handleFunction} click={this.handleClick}/>
        <CardsList robots={filteredRobots} />
      </>
    );
  }
}
export default App;

