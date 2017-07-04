import { combineReducers } from 'redux';
import doctorsReducer from './doctorsReducer.js';

const allReducers = combineReducers({
  doctors: doctorsReducer
});

