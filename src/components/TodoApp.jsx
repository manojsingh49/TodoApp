import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="todo-app">
      <h1> Task List</h1>
      <div className="task-list"></div>
    </div>
  );
}

export default TodoApp;
