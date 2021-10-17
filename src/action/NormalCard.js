import axios from 'axios';
import { message } from 'antd';

export const FlexiNormalApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'https://flexi-backend.herokuapp.com/cards/normalcard',
      cardDetails
    );
    if (card.status === 201) {
      message.success('Your Card has been saved Successfully');
    }
    dispatch({
      type: 'NORMAL_CARDS',
      payload: card.data._id,
    });
  };
};
