import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/Main';
import Login from 'components/Login';
import NotFound from 'components/NotFound';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'reducers/user';
import thoughts from 'reducers/thought';
import { Provider } from 'react-redux';
import Profile from 'pages/Profile';
import Home from 'pages/Home';
import Games from 'pages/Games';

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
    thoughts: thoughts.reducer
  })
  const store = configureStore({reducer})

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/games' element={<Games/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/' element={<Main/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
