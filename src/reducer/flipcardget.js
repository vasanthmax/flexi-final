const initState = {
  flipcard: [],
};

const flipgetReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FLIPABLE_CARDS_GET':
      return { ...state, flipcard: action.payload };

    default:
      return initState;
  }
};

export default flipgetReducer;
