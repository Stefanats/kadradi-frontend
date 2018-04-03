export default function reducer(state, action) {
  if(action.type=="CATEGORIES_SWITCH"){
    return state.merge({
      switch: action.value
    });
  }
  return state;
}