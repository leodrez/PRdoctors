import { createStore } from 'redux';
import { prDoctorsApp } from './reducers/reducers.js';
import { getAllDoctors } from './actions/index.js';

const store = createStore(prDoctorsApp);

console.log(store.getState());

let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
);

export default store;
