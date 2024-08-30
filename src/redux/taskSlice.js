
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTasksRequest: (state) => {
      state.loading = true;
    },
    fetchTasksSuccess: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchTasksFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    createTaskSuccess: (state, action) => {
      state.tasks.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    updateTaskSuccess: (state, action) => {
      const index = state.tasks.findIndex(task => task._id === action.payload._id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    deleteTaskSuccess: (state, action) => {
      state.tasks = state.tasks.filter(task => task._id !== action.payload);
      state.loading = false;
      state.error = null;
    },
  },
});

export const { 
  fetchTasksRequest, fetchTasksSuccess, fetchTasksFail, 
  createTaskSuccess, updateTaskSuccess, deleteTaskSuccess 
} = taskSlice.actions;

export default taskSlice.reducer;

// Async actions
export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchTasksRequest());
    const { data } = await axios.get('/api/tasks');
    dispatch(fetchTasksSuccess(data));
  } catch (error) {
    dispatch(fetchTasksFail(error.response.data.msg));
  }
};

export const createTask = (taskData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/tasks', taskData);
    dispatch(createTaskSuccess(data));
  } catch (error) {
    dispatch(fetchTasksFail(error.response.data.msg));
  }
};

export const updateTask = (taskId, taskData) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/tasks/${taskId}`, taskData);
    dispatch(updateTaskSuccess(data));
  } catch (error) {
    dispatch(fetchTasksFail(error.response.data.msg));
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`/api/tasks/${taskId}`);
    dispatch(deleteTaskSuccess(taskId));
  } catch (error) {
    dispatch(fetchTasksFail(error.response.data.msg));
  }
};