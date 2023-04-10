import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
      console.log(state.token);
    },
    getName: (state, action) => {
      const { firstname, lastname } = action.payload;
      state.firstName = firstname;
      state.lastName = lastname;
      console.log(state.firstName);
    },
    logOut: (state, action) => {
      state.token = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
});

export const { setCredentials, getName, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.email;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentFirstname = (state) => state.auth.firstName;
export const selectCurrentLastname = (state) => state.auth.lastName;
