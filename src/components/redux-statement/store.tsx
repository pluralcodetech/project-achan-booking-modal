import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; // add-on you may want
import rootReducer from './rootReducer';


const logger = require('redux-logger');  // add-on you may want

export const  configureStore = (preloadedState: any) => createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

