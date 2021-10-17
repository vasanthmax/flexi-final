import axios from 'axios';

export const FlexiPricingApiGet = (id) => {
  return async function (dispatch) {
    const card = await axios.get(
      `https://flexi-backend.herokuapp.com/cards/pricing?id=${id}`
    );
    console.log(card);
    dispatch({
      type: 'PRICING_CARDS_GET',
      payload: card.data,
    });
  };
};
