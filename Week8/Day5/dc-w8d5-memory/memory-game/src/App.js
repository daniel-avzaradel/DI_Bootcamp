import React from 'react';
import superheroes from './superheroes.json';
import Hero from './components/Hero'

class App extends React.Component {
  constructor() {
    super();
    console.log(superheroes)

    this.state = {
        heroes: [],
        score: 0,
        top_score: 0
    }
  }
  componentDidMount() {
      this.setState({heroes: superheroes.superheroes})
  }

  handleClick = () => {
    console.log('click')
  }

  render() {
    const { heroes, score, top_score } = this.state
    return (
      <div className='herolist'>
        {
          heroes.map((item, i) => {
            return <Hero handleClick={this.handleClick} hero={item} key={i}/>
          })
        }
      </div>
    );
  }
}

export default App;
