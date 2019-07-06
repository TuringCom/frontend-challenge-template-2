export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const REGISTER_NEW_USER_ERROR = 'REGISTER_NEW_USER_ERROR';
export const REGISTER_NEW_USER_SUCCESS = 'REGISTER_NEW_USER_SUCCESS';
export const LOG_USER_IN = 'LOG_USER_IN';
export const LOG_USER_IN_ERROR = 'LOG_USER_IN_ERROR';
export const LOG_USER_IN_SUCCESS = 'LOG_USER_IN_SUCCESS';
export const LOG_USER_OUT = 'LOG_USER_OUT';
export const LOG_USER_OUT_SUCCESS = 'LOG_USER_OUT_SUCCESS';
export const LOG_USER_OUT_ERROR = 'LOG_USER_OUT_ERROR';

export const submitRegister = data => {
  return {
    type: REGISTER_NEW_USER,
    payload: data,
  };
};

export const submitLogin = data => ({
  type: LOG_USER_IN,
  payload: data,
});

export const submitLogout = () => ({
  type: LOG_USER_OUT,
});
