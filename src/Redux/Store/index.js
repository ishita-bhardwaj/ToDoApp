

import {combineReducers, legacy_createStore} from 'redux';
import taskadder from '../Reducers/red1';

const rootReducer = combineReducers({
  taskdata: taskadder,
});

const store = legacy_createStore(rootReducer);
export default store;

