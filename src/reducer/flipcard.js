const initState = {
  flip: [],
};

const flipReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FLIPABLE_CARDS':
      return { ...state, flip: action.payload };

    default:
      return initState;
  }
};

export default flipReducer;
