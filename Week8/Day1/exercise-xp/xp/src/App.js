import './App.css';
import Myelement from './Myelement';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;
const reactisbetter = (
  <h1>React is {sum} times better with JSX</h1>
)

function App() {
  return (
    <>
      <p>Exercise 1:</p>
      <h1>HELLO WORLD!</h1>
      <br></br>
      <p>Exercise 2:</p>
      {myelement}
      <br></br>
      <p>Exercise 3:</p>
      <Myelement/>
      <br></br>
      <p>Exercise 4:</p>
      {reactisbetter}
    </>
  );
}

export default App;
