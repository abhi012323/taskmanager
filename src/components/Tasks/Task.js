import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../redux/taskSlice';

const Task = ({ task, onDelete }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSave = () => {
    const updatedTask = { ...task, description, status };
    dispatch(updateTask(task._id, updatedTask));
    setEditing(false);
  };

  return (
    <li>
      <h3>{task.title}</h3>
      {editing ? (
        <div>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
          />
          <p>Status:
            <select value={status} onChange={handleStatusChange}>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </p>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{description}</p>
          <p>Status: {status}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default Task;
