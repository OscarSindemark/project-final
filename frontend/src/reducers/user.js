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
    // set to remove
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
    // set to remove
    startSetPassword: (store, action) => {
      console.log("starting to set password");
    },
    setPassword: (store, action) => {
      console.log("we dont set the password in the user store");
    },
    // use this instead to do network stuff with server
    startSetProfileInfo: (store, action) => {
        // you should always pass username AND sometimes password into action
        // action = {username: "xyz", password: "password" | undefined}
        console.log("no-op that starts sending the new profile info to server");
    },
    finishSetProfileInfo: (store, action) => {
        store.username = action.payload.username;
    }
  },
});

export default user;
