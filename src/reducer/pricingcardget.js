const initState = {
  pricingcard: [],
};

const pricinggetReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PRICING_CARDS_GET':
      return { ...state, pricingcard: action.payload };

    default:
      return initState;
  }
};

export default pricinggetReducer;
