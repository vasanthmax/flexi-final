import axios from 'axios';
export const ResetPassword = (authDetails, history) => {
  return async function (dispatch) {
    const card = await axios.put(
      'https://flexi-backend.herokuapp.com/auth/resetpassword',
      authDetails
    );

    dispatch({
      type: 'RESET_PASSWORD',
      payload: card.data,
    });
    history.push('/auth/signin');
  };
};
