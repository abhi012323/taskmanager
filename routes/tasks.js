const express = require('express');
const router = express.Router();

// Mock tasks data (replace this with actual database queries)
let tasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', status: 'To Do' },
  { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress' },
];

// GET /api/tasks - Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST /api/tasks - Create a new task
router.post('/', (req, res) => {
  const { title, description, status } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status: status || 'To Do',
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Add more routes as needed (PUT, DELETE, etc.)

module.exports = router;
