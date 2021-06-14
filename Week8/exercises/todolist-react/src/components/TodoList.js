import React from "react";
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
            todos.map((item, i) => {
                return(
                    <Todo text={item.text} key={i} />
                )
            })
        }
      </ul>
    </div>
  );
};

export default TodoList;