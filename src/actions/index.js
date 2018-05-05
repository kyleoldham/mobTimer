const API_KEY = 'd3d9c0ceef5e6d36799dfcc2c5aa3c8d';

export function addName(name){
  return{
    type: 'ADD_NAME',
    payload: name
  };
}

export function removeName(name){
  return{
    type: 'REMOVE_NAME',
    payload: name
  };
}

export function activeName(name){
  return{
    type: 'ACTIVE_NAME',
    payload: name
  };
}

