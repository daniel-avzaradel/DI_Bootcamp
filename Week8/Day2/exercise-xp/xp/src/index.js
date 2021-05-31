import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PrintHello from './components/PrintHello';
import ReactComponent from './components/ReactComponent';
import BootstrapCard from './components/BootstrapCard';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PrintHello />
    <ReactComponent />
    <BootstrapCard title="Bob Dylan" />
    <BootstrapCard title="Paul McCartney" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
