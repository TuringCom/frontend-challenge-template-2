import { put, takeLatest, call } from 'redux-saga/effects';
import customerService from '../../../services/customerService';
import {
  FACEBOOK_LOGIN,
  FACEBOOK_LOGIN_ERROR,
  FACEBOOK_LOGIN_SUCCESS,
} from '../../actions/customer';
import { HIDE_AUTH } from '../../actions/alerts';

/**
 *
 * @param {any} action
 */
function* customerFacebookLoginSaga(action) {
  try {
    const data = yield call(customerService.facebookLogin, action.payload);
    yield put({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('token', data.accessToken);
    yield put({
      type: HIDE_AUTH,
    });
  } catch (error) {
    yield put({
      type: FACEBOOK_LOGIN_ERROR,
      payload: error,
    });
    localStorage.removeItem('token');
  }
}

/**
 *
 * @export
 */
export function* facebookLoginUserWatcher() {
  yield takeLatest(FACEBOOK_LOGIN, customerFacebookLoginSaga);
}
