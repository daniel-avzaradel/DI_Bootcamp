import React from 'react';
import superheroes from './superheroes.json';
import Hero from './components/Hero'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        heroes: [],
        score: 0,
        top_score: 0
    }
  }
  componentDidMount() {
      this.setState({heroes: superheroes.superheroes})
  }

  render() {
    const { heroes, score, top_score } = this.state
    return (
      <>
        {
          heroes.map((item, i) => {
            <Hero hero={item} key={i}
        />
          })
        }
      </>
    );
  }
}

export default App;
