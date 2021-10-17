const initState = {
  flipdelete: '',
};

const flipdeleteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FLIPABLE_CARDS_DELETE':
      return { ...state, flip: action.payload };

    default:
      return initState;
  }
};

export default flipdeleteReducer;
