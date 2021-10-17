export const logout = (history) => {
  history.push('/auth/signin');

  return {
    type: 'LOG_OUT',
    payload: null,
  };
};
