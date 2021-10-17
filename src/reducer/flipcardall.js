const initState = {
  flipcardall: [],
};

const flipallReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FLIPABLE_CARDS_ALL':
      return { ...state, flipcardall: action.payload };

    default:
      return initState;
  }
};

export default flipallReducer;
