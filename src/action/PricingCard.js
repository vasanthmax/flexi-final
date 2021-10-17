import axios from 'axios';
import { message } from 'antd';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
export const FlexiPricingApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'https://flexi-backend.herokuapp.com/cards/pricingcard',
      cardDetails
    );
    if (card.status === 201) {
      Toastify({
        text: 'Your Card has been saved Successfully',
        backgroundColor: '#B28800',
        position: 'center'
      }).showToast();
    }
    console.log(card);
    dispatch({
      type: 'PRICING_CARDS',
      payload: card.data._id,
    });
  };
};
