const initState = {
  normal: [],
};

const normalReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NORMAL_CARDS':
      return { ...state, normal: action.payload };

    default:
      return initState;
  }
};

export default normalReducer;
