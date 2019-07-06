import jwtDecode from 'jwt-decode';

import * as Actions from '../../actions';
const token = localStorage.getItem('token');
const initialState = {
  isLogged: token ? true : false,
  loading: false,
  token,
  decoded: token ? jwtDecode(token) : {},
  customer: {},
};

const auth = function(state = initialState, action) {
  switch (action.type) {
    case Actions.REGISTER_NEW_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.REGISTER_NEW_USER_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        loading: false,
        customer: action.payload.customer,
        decoded: { user: action.payload.customer.name },
        token: action.payload.accessToken,
      };
    }
    case Actions.REGISTER_NEW_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.LOG_USER_IN: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.LOG_USER_IN_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        loading: false,
        decoded: { name: action.payload.customer.name },
        customer: action.payload.customer,
        token: action.payload.accessToken,
      };
    }
    case Actions.LOG_USER_IN_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.LOG_USER_OUT_SUCCESS: {
      return {
        ...state,
        isLogged: false,
        customer: {},
        token: '',
        decoded: {},
      };
    }
    case Actions.FACEBOOK_LOGIN_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        loading: false,
        decoded: { name: action.payload.customer.name },
        customer: action.payload.customer,
        token: action.payload.accessToken,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
