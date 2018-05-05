import { combineReducers } from 'redux';
import nameReducer from './reducer_name';


const rootReducer = combineReducers({
  names: nameReducer,

});

export default rootReducer;
