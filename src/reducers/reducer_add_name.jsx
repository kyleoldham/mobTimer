export default function (state=[], action) {
  switch(action.type){
    case 'REMOVE_NAME':
      if(action.payload == 'F!R$T')
        return state.filter(name => name.name !== state[0].name)
      return state.filter(name => name.name !== action.payload);

    case 'ADD_NAME':
      return [ ...state, { name: action.payload} ]; 
  }
  return state;
}
