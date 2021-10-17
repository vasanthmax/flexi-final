import axios from 'axios';

export const NormalCardAll = () => {
  return async function (dispatch) {
    const card = await axios.get(
      `https://flexi-backend.herokuapp.com/cards/normalcardall`
    );
    console.log(card);
    dispatch({
      type: 'NORMAL_CARDS_ALL',
      payload: card.data,
    });
  };
};
