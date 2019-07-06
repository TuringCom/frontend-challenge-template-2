import { put, takeLatest, call } from 'redux-saga/effects';
import customerService from '../../../services/customerService';
import {
  LOG_USER_IN,
  LOG_USER_IN_ERROR,
  LOG_USER_IN_SUCCESS,
} from '../../actions/customer';
import { HIDE_AUTH } from '../../actions/alerts';

/**
 *
 * @param {any} action
 */
function* customerLoginSaga(action) {
  try {
    const data = yield call(customerService.loginUser, action.payload);
    yield put({
      type: LOG_USER_IN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('token', data.accessToken);
    yield put({
      type: HIDE_AUTH,
    });
  } catch (error) {
    yield put({
      type: LOG_USER_IN_ERROR,
      payload: error,
    });
    localStorage.removeItem('token');
  }
}

/**
 *
 * @export
 */
export function* loginUserWatcher() {
  yield takeLatest(LOG_USER_IN, customerLoginSaga);
}
