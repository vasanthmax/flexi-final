const initState = {
  pricing: [],
};

const pricingReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PRICING_CARDS':
      return { ...state, pricing: action.payload };

    default:
      return initState;
  }
};

export default pricingReducer;
