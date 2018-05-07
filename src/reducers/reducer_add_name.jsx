export default function (state=[], action) {
  switch(action.type){
    case 'REMOVE_NAME':
      return state.filter(name => name.name !== action.payload);

    case 'ADD_NAME':
      return [ ...state, { name: action.payload} ]; 
  }
  return state;
}
