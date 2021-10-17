import axios from 'axios';
import { message } from 'antd';

export const UpdateCards = (id, cardType, cardDetails) => {
  return async function (dispatch) {
    const card = await axios.patch(
      `https://flexi-backend.herokuapp.com/cards/${cardType.toLowerCase()}cardupdate?id=${id}`,
      cardDetails
    );
    if (card.status === 200) {
      message.success('Your Card has been updated Successfully');
      setTimeout(() => {
        window.location.replace('http://localhost:3000/dashboard');
      }, 1000);
    }
    dispatch({
      type: 'UPDATE_CARDS',
      payload: card.data,
    });
  };
};
