// import { createStore, compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

export const store = configureStore({
  reducer,
});
