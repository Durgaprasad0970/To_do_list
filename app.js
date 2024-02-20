let taskList = [];

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();
  if (task !== "") {
    taskList.push(task);
    displayTasks();
    taskInput.value = "";
  }
}

function displayTasks() {
  let taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";
  taskList.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    taskListElement.appendChild(li);
  });
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let tasks = [];

// Add a new task
app.post('/tasks', (req, res) => {
  const task = req.body.task;
  if (task) {
    tasks.push(task);
    res.status(201).json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Invalid task format' });
  }
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
