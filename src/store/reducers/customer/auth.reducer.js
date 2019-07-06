import * as Actions from '../../actions';

const initialState = {
  isLogged: localStorage.getItem('token') ? true : false,
  loading: false,
  token: localStorage.getItem('token'),
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
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
