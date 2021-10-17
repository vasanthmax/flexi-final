const initState = {
  pricingcardall: [],
};

const pricingallReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PRICING_CARDS_ALL':
      return { ...state, pricingcardall: action.payload };

    default:
      return initState;
  }
};

export default pricingallReducer;
