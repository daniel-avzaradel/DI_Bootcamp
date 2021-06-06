// get the json into state array
// shuffle function
// score - state
// top_score - state

import React from 'react';
import Hero from './components/Hero'
import Nav from './components/Nav'
import './components/hero.css'
import './App.css';
import superheroes from './superheroes.json';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      heros: [],
      score: 0,
      top_score: 0
    }
  }
  componentDidMount(){
    this.setState({heros:superheroes.superheroes})
  }
  handleClick = (id) => {
    let {heros,score,top_score} = this.state;
    const hero = heros.find(item => {
      return item.id === id
    })
    if(hero.clicked === true){
      //reset the game
      if(score>top_score){
        this.setState({
          top_score:score
        })
      }
      this.setState({
        score:0,
        heros: this.reset([...heros])
      })
    }
    else{
      hero.clicked = true;
      this.setState({
        score:++score,
        heros: this.shuffle([...heros])
      })
    }
  }
  reset = (array) => {
    for(let i = array.length-1; i>0; i--){
      array[i].clicked = false
    }
    return array
  }
  shuffle = (array) =>{
    for (var i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // let t = array[i];
      // array[i] = array[j];
      // array[j] = t;
      [array[i],array[j]] = [array[j],array[i]]
    }
    return array;
  }
  render() {
    const {heros,score,top_score} = this.state;
    return(
      <>
        <Nav {...this.state} />
        <div className='heroslist'>
          {
            heros.map((item,i)=>{
              return <Hero hero={item} handleClick={this.handleClick} key={i} />
            })
          }
        </div>
      </>
      )
  }
}

export default App;
