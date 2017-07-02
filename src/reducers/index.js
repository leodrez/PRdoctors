import { combineReducers } from 'redux';
import doctorsReducer from './doctorsReducer.js';

export default combineReducers({
  doctors: doctorsReducer
});
