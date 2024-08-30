import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, status };
    dispatch(createTask(newTask));
    setTitle(''); // Clear the title input
    setDescription(''); // Clear the description input
    setStatus('To Do'); // Reset the status
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

