import React, { useEffect, useState } from "react";
const TodoApp = () => {
  const [tasks, setTasks] = useState([]); //Use the 'useState' hook to create two state varible. To stoe the list of task and newTask (To )
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("https://jasonplaceholder.typecode.com/todos") // Fetching Data: Use Effect to fetch task from the API.
      .then((response) => response.jason())
      .then((data) => setTasks(data));
  });
};
const addTask = () => {
  // Add task function(To create a new task object, add it to the 'tasks'array, and rest the 'newTask'input)
  const newTaskObj = { title: newTask, completed: false };
  setTasks([tasks, newTaskObj]);
  setNewTask("");
};
const updateTask = (id, updateTask) => {
  // Update function(To update task by its ID)
  setTasks(tasks.map((task) => task, id == id ? updateTask : task));
};
const deleteTask = (id) => {
  // Delete Function(To delete task by its ID)
  setTask(tasks.filter((task) => task.id !== id));
};
return (
  // Render Function (It returns a title, an input field for adding task and list of tasks.)
  <div>
    className ="todo-app
    <h1>Task List</h1>
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTaske(e.target.value)}
      placeholder="Add new Task"
    />
    <button onClick={addTask}> Add Task</button>
    <ul>
      {task.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onchange={() =>
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
export default TodoApp;
