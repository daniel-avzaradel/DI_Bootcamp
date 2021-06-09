import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// STORE -> GLOBALIZED STATE

// ACTION INCREMENT

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

// ACTION DECREASE

const decrease = () => {
  return {
    type: 'DECREASE'
  }
}

// REDUCER

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
        return state + 1;
        break;
    case 'DECREASE':
        return state - 1;
        break;
  }
}

const store = createStore(counter)

// display in the console
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
