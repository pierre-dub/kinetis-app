import { createStore } from 'redux';
import reducer from "./combineReducer";

const store = createStore(reducer);

export default store;