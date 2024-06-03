import React, { useEffect, useState } from "react";
 import "./Todo.css"
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);
 
  const addTask = () => {
    const newTaskObj = {
      title: newTask,
      completed: false,
      id: tasks.length + 1,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };
 
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };
 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
 
  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new Task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                updateTask(task.id, { ...task, completed: !task.completed })
              }
            />
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default TodoApp;