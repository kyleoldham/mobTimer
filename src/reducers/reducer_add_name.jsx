export default function (state = null, action) {
  console.log("BEFORE THE STORM");
  switch(action.type){

    case 'ADD_NAME':
      
      console.log("REDUCE");
      return {
        ...state,
        names: [...state.names, action.payload]
    };
  }
  return state;
}
