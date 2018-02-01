export default function reducer(state, action) {
  if(action.type=="SEND_CATEGORIESID"){
    return state.merge({
      categoriesId: action.value
    });
  }
  return state;
}