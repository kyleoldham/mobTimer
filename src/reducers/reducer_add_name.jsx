export default function (state=[], action) {
  console.log(state);
  switch(action.type){

    case 'ADD_NAME':
      return [ { name: action.payload}, ...state ]; 
  }
  return state;
}
