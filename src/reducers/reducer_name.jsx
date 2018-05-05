export default function(state = null) {
    return {
      ...state,
      names: [ { name: 'Jeff' }, { name: 'rob' } ]
  };
}
