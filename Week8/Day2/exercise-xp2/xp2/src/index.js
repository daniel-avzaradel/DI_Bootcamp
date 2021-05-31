import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Alert from './components/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import Alert2 from './components/Alert2';

ReactDOM.render(
  <React.StrictMode>
    <Alert text="OMG! Something really bad has happended!"/>
    <Alert2 text="This is a danger alert-Check it out!" show={true}/>
    <Alert3 text="This is a primary alert-check it out!" color="red"/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
