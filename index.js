const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth'); // Authentication routes
const taskRoutes = require('./routes/tasks'); // Add this line for task routes

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/tasks', taskRoutes); // Task routes

app.get('/', (req, res) => {
  res.send('Task Manager API');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

