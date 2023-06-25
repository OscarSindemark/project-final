/*import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { API_URL } from "utils/utils";
import { isAnyOf } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import UserReducer from "./user.js";



// This is a reducer that was created with my mentor. He only half-went over it, so I'm not exactly sure how it works. But it is for the login process and keeping the user signed in across all pages.

// Create the middleware instance and methods
const listenerMiddleware = createListenerMiddleware();

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.

// TO REMOVE **************
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

// to remove
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

// hook this up to the save profile button
listenerMiddleware.startListening({
  matcher: isAnyOf(UserReducer.actions.startSetProfileInfo),
  effect: async (action, listenerApi) => {
    const { payload } = action;
    const { user } = listenerApi.getState();
    console.log("Updating User Info!");

    // Can cancel other running instances
    listenerApi.cancelActiveListeners();

    const body = {
      accessToken: user.accessToken,
      username: username,
    }

    if(payload.password) {
      body.password = password;
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
          console.log("successfully updated user profile!");
          // update and change all state here.
          listenerApi.dispatch(UserReducer.actions.finishSetProfileInfo, {} /* make this a user object and update the user store );
        } else {
          console.error("server could not update server profile!");
        }
      });
  },
});

export default listenerMiddleware;
*/