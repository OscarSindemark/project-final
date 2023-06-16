import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    error: null,
  },
  reducers: {
    startSetUsername: (store, action) => {
      console.log("starting to set username");
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    startSetPassword: (store, action) => {
      console.log("starting to set password");
    },
    setPassword: (store, action) => {
      console.log("we dont set the password in the user store");
    },
  },
});

export default user;
