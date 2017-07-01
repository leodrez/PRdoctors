import { createStore } from 'redux';
import combineReducers from '/redux/reducers/index.js';

let store = createStore(combineReducers);
