import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null; // Reset error when starting a new operation
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const signupUserAsync = (userData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    // Perform asynchronous operations (e.g., API call for user registration)
    // Dispatch setUser once the operation is complete
    dispatch(setUser(userData));
  } catch (error) {
    // Handle errors
    dispatch(setError(error.message));
  }
};

export const { setUser, setLoading, setError } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
