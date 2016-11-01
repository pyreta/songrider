import { createStore } from 'redux';
// import rootReducer from '../reducers/root_reducer.js';
import keyboard from '../reducers/keyboard.js';
const Store = createStore(keyboard);
// const Store = createStore(rootReducer);

export default Store;
