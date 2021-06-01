import React from 'react';
import './App.css';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import 'tachyons';
import axios from 'axios';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      arr: [],
    }
  }
  async componentDidMount(){
    // axios
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      let data = res.data;
      console.log(data)
      this.setState({arr:data})
    }
    catch(err) {
      console.log(err)
    }
  }

  handleChange = (event) => {
    this.setState({ searchText: event.target.value })
  }

  handleClick = () => {
    this.setState({ searchText: this.state.searchText })
  }

  render(){
    const {arr, searchText} = this.state

    const filteredRobots = arr.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
      <>
        <SearchBox handleClick={this.handleClick}/>
        <CardsList robots={filteredRobots} />
      </>
    );
  }
}
export default App;

