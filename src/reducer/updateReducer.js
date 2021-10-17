const initState = {
  updateReducer: [],
};

const updateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_CARDS':
      return { ...state, updateReducer: action.payload };

    default:
      return initState;
  }
};

export default updateReducer;
