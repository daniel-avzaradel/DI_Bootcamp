import './App.css';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        quote: quotes[0].quote,
        author: quotes[0].author
      };
    }

    randomQuote() {
      const random = Math.floor(Math.random() * quotes.length);
      return quotes[random]
    }
}

export default App;
