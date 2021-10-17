const initState = {
  normalcard: [],
};

const normalgetReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NORMAL_CARDS_GET':
      return { ...state, normalcard: action.payload };

    default:
      return initState;
  }
};

export default normalgetReducer;
