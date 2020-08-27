import React from "react";
import "./App.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
