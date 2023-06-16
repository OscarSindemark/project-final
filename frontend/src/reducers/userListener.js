import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { API_URL } from "utils/utils";
import { isAnyOf } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import UserReducer from "./user.js";

// Create the middleware instance and methods
const listenerMiddleware = createListenerMiddleware();

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
listenerMiddleware.startListening({
  matcher: isAnyOf(UserReducer.actions.startSetUsername),
  effect: async (action, listenerApi) => {
    const { user } = listenerApi.getState();

    console.log("Updating User: ", action.payload);
    // Can cancel other running instances
    listenerApi.cancelActiveListeners();

    const body = {
      id: user.userId,
      username: action.payload,
      accessToken: user.accessToken,
    };

    // Run async logic
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    // username doesn't change until dispatched from here
    fetch(API_URL("user"), options)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          listenerApi.dispatch(
            UserReducer.actions.setUsername(responseData.response.username)
          );
        } else {
          listenerApi.dispatch(UserReducer.actions.setUsername(null));
        }
      });
  },
});

listenerMiddleware.startListening({
  matcher: isAnyOf(UserReducer.actions.startSetPassword),
  effect: async (action, listenerApi) => {
    const { user } = listenerApi.getState();
    console.log("Updating Password!");
    // Can cancel other running instances
    listenerApi.cancelActiveListeners();

    const body = {
      id: user.userId,
      password: action.payload,
      accessToken: user.accessToken,
    };
    // Run async logic
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(API_URL("user"), options)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          console.log("successfully updated password!");
          listenerApi.dispatch(UserReducer.actions.setPassword());
        } else {
          console.error("server could not updated password!");
        }
      });
  },
});

export default listenerMiddleware;
