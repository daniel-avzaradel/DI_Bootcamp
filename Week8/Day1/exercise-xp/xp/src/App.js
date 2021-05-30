import './App.css';
import Myelement from './Myelement';

const myelement = <h1>I Love JSX!</h1>;

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
    </>
  );
}

export default App;
