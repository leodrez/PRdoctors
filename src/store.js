import { createStore } from 'redux';
import { prDoctorsApp } from './reducers/reducers.js';

let store = createStore(prDoctorsApp);

console.log(store.getState());

export default store;
