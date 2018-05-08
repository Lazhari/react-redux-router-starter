const defaultState = {
  loading: false,
  authenticated: false,
  error: ""
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
