import {store} from "../index";

export default function (state=[], action) {
  console.log('store');
  console.log(store);
  switch(action.type){

    case 'REMOVE_NAME':
      console.log("REDCUECE");
  console.log('state2');
      console.log(state);
      return state.filter(name => name !== action.payload);
  }
  return state;
}
