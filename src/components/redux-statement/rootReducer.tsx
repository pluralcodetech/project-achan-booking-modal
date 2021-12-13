// import { combineReducers } from "redux";
import customPostReducer from './reducer/customPostReducer';


const combineReducers = require('redux').combineReducers;

const rootReducer = (combineReducers as any)({
   customPostReducer,
});

export default rootReducer;