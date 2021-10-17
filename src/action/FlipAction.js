import axios from 'axios';
import { message } from 'antd';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
export const FlexiApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'https://flexi-backend.herokuapp.com/cards/flipcard',
      cardDetails
    );
    if (card.status === 201) {
      Toastify({
        text: 'Your Card has been saved Successfully',
        backgroundColor: '#B28800',
        position: 'center'
      }).showToast();
    }
    dispatch({
      type: 'FLIPABLE_CARDS',
      payload: card.data._id,
    });
  };
};
