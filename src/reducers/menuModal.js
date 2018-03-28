export default function reducer(state, action) {
  if(action.type=="MENU_MODAL"){
    return state.merge({
      display: action.value,
    });
  }
  return state;
}