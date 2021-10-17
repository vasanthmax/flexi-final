import axios from 'axios';
import { message } from 'antd';

export const FlexiPricingApi = (cardDetails) => {
  return async function (dispatch) {
    const card = await axios.post(
      'https://flexi-backend.herokuapp.com/cards/pricingcard',
      cardDetails
    );
    if (card.status === 201) {
      message.success('Your Card has been saved Successfully');
    }
    console.log(card);
    dispatch({
      type: 'PRICING_CARDS',
      payload: card.data._id,
    });
  };
};
