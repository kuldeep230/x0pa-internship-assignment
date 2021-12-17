import React from "react";
import "./styles/todo.css";

function Todo({ todo }) {
  return (
    <div className="todo-container">
      <div className="todo-userId">
        <p>
          <span>userId: </span> {todo.userId}
        </p>
      </div>
      <div className="todo todo-id">
        <p>
          <span>id: </span> {todo.id}
        </p>
      </div>
      <div className="todo todo-title">
        <p>
          <span>Title: </span> {todo.title}
        </p>
      </div>
      <div className="todo todo-completed">
        <p>
          <span>Completed: </span> {todo.completed ? "True" : "False"}
        </p>
      </div>
    </div>
  );
}

export default Todo;
