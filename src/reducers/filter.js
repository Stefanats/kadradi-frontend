export default function reducer(state, action) {
  if(action.type=="SEND_VALUE"){
    return state.merge({
      filter: action.value,
      kako: action.kako,
    });
  }
  return state;
}