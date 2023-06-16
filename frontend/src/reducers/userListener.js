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
  matcher: isAnyOf(
    UserReducer.actions.setUsername,
    UserReducer.actions.setPassword
  ),
  effect: async (action, listenerApi) => {
    console.log("Updating User: ", action.payload.username);
    // Can cancel other running instances
    listenerApi.cancelActiveListeners();

    let body = "";
    if (action.payload.username) {
      body = { username: action.payload.username };
    }

    if (action.payload.password) {
      body = { ...body, password: action.payload.password };
    }

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
          listenerApi.dispatch(
            UserReducer.actions.setUsername(responseData.response.username)
          );
        } else {
          listenerApi.dispatch(UserReducer.actions.setUsername(null));
        }
      });
  },
});

export default listenerMiddleware;
