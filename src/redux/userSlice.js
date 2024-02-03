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
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Updated asynchronous action for login
export const loginUserAsync = (userData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    // Simulate API call for login, replace with actual API call
    const response = await fakeLoginAPI(userData);
    console.log("Login response:", response);

    // Check if login was successful
    if (response.success) {
      dispatch(setUser(userData));
    } else {
      dispatch(setError("Invalid username or password"));
    }
  } catch (error) {
    dispatch(setError("An error occurred during login"));
  }
};

// Asynchronous action for signup
export const signupUserAsync = (userData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    // Simulate API call for signup, replace with actual API call
    const response = await fakeSignupAPI(userData);
    console.log("Signup response:", response);

    // Check if signup was successful
    if (response.success) {
      dispatch(setUser(userData));
    } else {
      dispatch(setError("Error during signup"));
    }
  } catch (error) {
    dispatch(setError("An error occurred during signup"));
  }
};

// Utility function to simulate login API call (replace with actual implementation)
const fakeLoginAPI = (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate success/failure response from the server
      const success =
        userData.username === "demo" && userData.password === "Password123";
      console.log("Login success:", success);
      resolve({ success });
    }, 1000);
  });
};

// Utility function to simulate signup API call (replace with actual implementation)
const fakeSignupAPI = (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate success/failure response from the server
      const success = userData.username !== "existingUser"; // Simulating unique username check
      console.log("Signup success:", success);
      resolve({ success });
    }, 1000);
  });
};

export const { setUser, setLoading, setError } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
