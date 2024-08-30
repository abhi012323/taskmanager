import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask } from '../../redux/taskSlice';
import Task from './Task';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/create-task">
        <button>Create New Task</button>
      </Link>
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


