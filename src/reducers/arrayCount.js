export default function reducer(state, action) {
  if(action.type=="ARRAY_COUNT"){
    return state.merge({
      count: action.value
    });
  }
  return state;
}