import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/Tasks/TaskList';
import TaskForm from './components/Tasks/TaskForm';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Auth/PrivateRoute'; // Import PrivateRoute
import RegisterPage from './pages/RegisterPage'; // Import RegisterPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Use RegisterPage */}
        <Route
          path="/tasks"
          element={<PrivateRoute element={<TaskList />} />}
        />
        <Route
          path="/create-task"
          element={<PrivateRoute element={<TaskForm />} />}
        />
        <Route path="/" element={<Login />} /> {/* Redirect to Login on home */}
      </Routes>
    </Router>
  );
};

export default App;
