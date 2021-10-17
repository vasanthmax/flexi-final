const initState = {
  normalcardall: [],
};

const normalallReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NORMAL_CARDS_ALL':
      return { ...state, normalcardall: action.payload };

    default:
      return initState;
  }
};

export default normalallReducer;
