import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

// https://www.youtube.com/watch?v=pCA4qpQDZD8 --> 43min mark

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>REACT TODO-LIST</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
