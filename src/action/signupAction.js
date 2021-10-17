import axios from 'axios';
export const SignupAction = (authDetails, history) => {
  return async function (dispatch) {
    const card = await axios.post(
      'https://flexi-backend.herokuapp.com/auth/email/signup',
      authDetails
    );

    dispatch({
      type: 'SIGN_UP',
      payload: card.data,
    });

    history.push('/');
  };
};
