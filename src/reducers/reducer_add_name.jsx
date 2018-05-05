export default function (state = null, action) {
  switch(action.type){

    case "ADD_NAME":
      
      console.log("REDUCE");
      return {
        ...state,
        names: [...state.names, action.payload]
    };
  }
  return state;
}
