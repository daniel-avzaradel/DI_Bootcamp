import React, {useState, useEffect, useRef} from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    console.log('inputRef: ', inputRef.current.value)
  })

  return(
    <div className="App-header">
        <h1>HOOKS</h1>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter+1)}>Add</button>
        <h2>My name is: {name}</h2>
        <input ref={inputRef} type="text" onChange={(event) => setName(event.target.value)} />
      </div>
  )
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0
//     }
//   }

//   add = () => {
//     this.setState({counter: this.state.counter++})
//   }

//   render() {
//     const {counter} = this.state;
//     return (
//       <div className="App">
//         <h1>HOOKS</h1>
//         <h2>{this.state.counter}</h2>
//         <button onClick={this.add}>Add</button>
//       </div>
//     );
//   }
// }

export default App;
