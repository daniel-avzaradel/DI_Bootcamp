import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      page: ''
    }
  }

  render() {
    const {page} = this.state;

    switch(page) {
      case 'home':
        return(
          <Home/>
        )
        break;
      case 'about':
        return(
          <About/>
        )
        break;
      case 'contact':
        return(
          <Contact/>
        )
        break;
      default:
        return(
          <Home/>
        )
    }
  }
}

export default App;
