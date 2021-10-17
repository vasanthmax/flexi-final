import axios from 'axios';

export const FlipCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(
      `https://flexi-backend.herokuapp.com/cards/flipcardall`
    );
    const normalcard = await axios.get(
      `https://flexi-backend.herokuapp.com/cards/normalcardall`
    );
    const pricingcard = await axios.get(
      `https://flexi-backend.herokuapp.com/cards/pricingcardall`
    );
    dispatch({
      type: 'FLIPABLE_CARDS_ALL',
      payload: [card.data.data, normalcard.data.data, pricingcard.data.data],
    });
  };
};
