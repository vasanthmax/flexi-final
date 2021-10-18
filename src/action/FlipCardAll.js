import axios from 'axios';

export const FlipCardAll = () => {
  const user = window.localStorage.getItem('profile');
  return async function (dispatch) {
    const card = await axios.get(
      `https://flexi-backend.herokuapp.com/cards/flipcardall?userid=${user}`
    );
    const normalcard = await axios.get(
      `https://flexi-backend.herokuapp.com/cards/normalcardall?userid=${user}`
    );
    const pricingcard = await axios.get(
      `https://flexi-backend.herokuapp.com/cards/pricingcardall?userid=${user}`
    );
    dispatch({
      type: 'FLIPABLE_CARDS_ALL',
      payload: [card.data.data, normalcard.data.data, pricingcard.data.data],
    });
  };
};
