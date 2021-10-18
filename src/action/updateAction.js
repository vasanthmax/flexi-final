import axios from 'axios';
import { message } from 'antd';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
export const UpdateCards = (id, cardType, cardDetails) => {
  return async function (dispatch) {
    const card = await axios.patch(
      `https://flexi-backend.herokuapp.com/cards/${cardType.toLowerCase()}cardupdate?id=${id}`,
      cardDetails
    );
    if (card.status === 200) {
      Toastify({
        text: 'Your Card has been updated Successfully',
        backgroundColor: '#B28800',
        position: 'center'
      }).showToast();
      setTimeout(() => {
        window.location.replace('/dashboard');
      }, 1000);
    }
    dispatch({
      type: 'UPDATE_CARDS',
      payload: card.data,
    });
  };
};
