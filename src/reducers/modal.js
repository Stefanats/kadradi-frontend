export default function reducer(state, action) {
  if(action.type=="MODAL_DISPLAY"){
    return state.merge({
      display: action.value,
    });
  }
  return state;
}