import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      favoriteColor: ''
    }
  }

  componentDidMount() {
      this.setState({favoriteColor: 'red'})
  }

  render() {
    return(
      <>
        <h1 style={{color: this.state.favoriteColor}}>My Favorite Color is Red</h1>
      </>
    )
  }
}

export default App;
