import React, { useState } from "react";

// Components
import ToDoItem from "./components/TodoItem/TodoItem";
import ToDoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {
  // State
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
    },
  ]);

  // Actions
  const addTodo = (text) => {
    const newTodos = [...todos, { text }]; // ... takes out items in array, copies it and expands it
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos); // update State
  };

  const removeTodo = (index) => {
    const newTodos = [...todos]; // create new array
    newTodos.splice(index, 1); // remove element from array and insert element in place
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>To Do List</h1>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
