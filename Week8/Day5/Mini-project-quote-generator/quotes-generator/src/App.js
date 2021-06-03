import React from 'react';
import "./App.css";
import QuotesComponent from './Quotes';
import quotes from './QuotesDatabase'

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        quotesList: quotes,
        random: 0
      };
      this.randomQuote = this.randomQuote.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    randomQuote() {
      const randomNumber = Math.floor(Math.random() * this.state.quotesList.length);
      this.setState({random: randomNumber})
      return randomNumber
    }
    
    randomColor() {
      const rgb = `rgb(
        ${Math.floor(Math.random() * 155)},
        ${Math.floor(Math.random() * 155)},
        ${Math.floor(Math.random() * 155)}
      )`
      return rgb
    }

    handleClick() {
      this.randomQuote();
    }

    render() {
      const randomColor = this.randomColor();
      const {quotesList, random} = this.state
      const randomQuote = quotesList[random];

      return(
        <div>
          <QuotesComponent
          displayColor={randomColor}
          handleClick={this.handleClick}
          randomQuote={randomQuote}
          />
        </div>
      )
    }
}

export default App;
