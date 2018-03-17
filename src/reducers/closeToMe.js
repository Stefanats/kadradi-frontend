export default function reducer(state, action) {
  if (action.type === 'CLOSE_TOME') {
    // Where did `state.merge()` come from?  Our plain state object is automatically
    // wrapped in a call to `seamless-immutable` in our reducer init code,
    // so we can use its functions to return a guaranteed immutable version
    return state.merge({
      close: action.value,
    });
  }
  return state;
}