import React from "react";

import "./TodoItem.css";

function ToDoItem(props) {
  const { todo, index, completeTodo, removeTodo } = props;

  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Done</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default ToDoItem;
