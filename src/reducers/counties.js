export default function reducer(state, action) {
  if(action.type=="COUNTIES_NAME"){
    return state.merge({
      name: state.action
    });
  }
  return state;
}