import './App.css';
import Myelement from './Myelement';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;
const reactisbetter = (
  <h1>React is {sum} times better with JSX</h1>
)
const fruitList = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
    <li>Cherries</li>
  </ul>
)

function App() {
  return (
    <>
      <p>Exercise 1:</p>
      <h1>HELLO WORLD!</h1>
      
      <p>Exercise 2:</p>
      {myelement}

      <p>Exercise 3:</p>
      <Myelement/>
   
      <p>Exercise 4:</p>
      {reactisbetter}
  
      <p>Exercise 5:</p>
      {fruitList}
    </>
  );
}

export default App;
