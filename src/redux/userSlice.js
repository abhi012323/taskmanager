import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFail, logout } = userSlice.actions;

export default userSlice.reducer;

// Async actions
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post('/api/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.msg));
  }
};

  export const registerUser = (name, email, password) => async (dispatch) => {
    try {
      dispatch(loginRequest()); // Reusing loginRequest for loading state
      const { data } = await axios.post('/api/auth/register', { name, email, password });
      localStorage.setItem('token', data.token);
      dispatch(loginSuccess(data)); // Reusing loginSuccess on successful registration
    } catch (error) {
      dispatch(loginFail(error.response.data.msg)); // Reusing loginFail for errors
    }
};
