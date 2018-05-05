import { combineReducers, createStore } from 'redux';
import nameReducer from './reducer_name';
import AddNameReducer from './reducer_add_name';

const rootReducer = combineReducers({
  names: nameReducer,

});

const initialState = {
    names : [ {name: "king dong"} ] 
};

const store = createStore(rootReducer, initialState);

export default rootReducer;
