export default function(state=[], action) {
    switch(action.type){
      case 'NAME':
      return {
        ...state,
        names: [ { name: 'Jeff' }, { name: 'rob' } ]
      };

    return state;
    }
  return state;
}
