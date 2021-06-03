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
    }

    randomQuote() {
      const random = Math.floor(Math.random() * this.state.quotesList.length);
      console.log(quotes[random])
      return quotes[random];
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
      console.log(this.state.random)
    }

    render() {
      const randomColor = this.randomColor();
      const {quotesList} = this.state

      return(
        <div>
          <QuotesComponent
          displayColor={randomColor}
          handleClick={this.handleClick}
          randomQuote={quotesList}
          />
          <button onClick={this.handleClick()}>CLICK HERE</button>
        </div>
      )
    }
}

export default App;
