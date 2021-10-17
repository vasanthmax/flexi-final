import axios from 'axios';
export const ForgotPassAction = (authDetails) => {
  return async function (dispatch) {
    const card = await axios.put(
      'https://flexi-backend.herokuapp.com/auth/forgotpassword',
      authDetails
    );

    dispatch({
      type: 'FORGOT_PASSWORD',
      payload: card.data,
    });
  };
};
