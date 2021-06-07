import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AutoCompletedText from './components/AutoCompletedText'



function App() {
  return (
    <div className="container">
      <div className="suggestions">
        <AutoCompletedText/>
      </div>
    </div>
  );
}

export default App;
