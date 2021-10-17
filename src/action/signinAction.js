import axios from 'axios';
export const SigninAction = (authDetails, history) => {
  return async function (dispatch) {
    const card = await axios.post(
      'https://flexi-backend.herokuapp.com/auth/email/login',
      authDetails
    );

    dispatch({
      type: 'SIGN_IN',
      payload: card.data,
    });

    history.push('/');
  };
};
