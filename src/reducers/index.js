import { combineReducers, createStore } from 'redux';
import nameReducer from './reducer_name';
import addNameReducer from './reducer_add_name';
import removeReducer from './reducer_remove_name';

const rootReducer = combineReducers({
  names: nameReducer,
  addnames: addNameReducer,
  removeName: removeReducer
});

const initialState = {
    names : [ {name: "king dong"} ] 
};

export const store = createStore(rootReducer, initialState);

export default rootReducer;
