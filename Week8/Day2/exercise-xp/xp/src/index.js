import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import PrintHello from './components/PrintHello';
import ReactComponent from './components/ReactComponent';
import BootstrapCard from './components/BootstrapCard';
import BootstrapCard2 from './components/BootstrapCard2';
import Jumbotron1 from './components/Jumbotron1';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PrintHello />
    <ReactComponent />
    <BootstrapCard title="Bob Dylan" />
    <BootstrapCard2 
    title="McCartney"
    imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
    buttonLabel='Go to Wikipedia'
    buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
    description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
    />
    <Jumbotron1
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
