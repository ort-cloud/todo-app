import React from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className='todo-list'>
      <h1>Todo</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
