export default function reducer(state, action) {
  if(action.type=="COUNTIES_NAME"){
    return state.merge({
      name: action.name,
      id: action.id,
    });
  }
  return state;
}