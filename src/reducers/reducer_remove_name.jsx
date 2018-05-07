import {store} from "../index";

export default function (state=[], action) {
  
  switch(action.type){

    case 'REMOVE_NAME':
      return state.filter(name => name !== action.payload);
  }
  return state;
}
