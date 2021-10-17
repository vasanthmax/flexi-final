import axios from 'axios';
import { message } from 'antd';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
// import 'antd/dist/antd.css'
export const FlexiNormalApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'https://flexi-backend.herokuapp.com/cards/normalcard',
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
      type: 'NORMAL_CARDS',
      payload: card.data._id,
    });
  };
};
