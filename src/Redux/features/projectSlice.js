// projectSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  success: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSuccess, setLoading, setError } = projectSlice.actions;
export default projectSlice.reducer;
