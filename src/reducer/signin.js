const initState = {
  authData: [],
};

const signinReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem('profile', action.payload._id);
      return { ...state, authData: action.payload._id };
    case 'SIGN_UP':
      localStorage.setItem('profile', action.payload._id);
      return { ...state, authData: action.payload._id };
    case 'LOG_OUT':
      localStorage.removeItem('profile');
      return { ...state, authData: action.payload };
    default:
      return initState;
  }
};

export default signinReducer;
