import { put, takeLatest } from 'redux-saga/effects';
import {
  LOG_USER_OUT,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_ERROR,
} from '../../actions/customer';

/**
 *
 * @param {any}
 */
function* customerLogoutSaga() {
  try {
    localStorage.removeItem('token');
    yield put({
      type: LOG_USER_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_USER_OUT_ERROR,
    });
  }
}

/**
 *
 * @export
 */
export function* logoutUserWatcher() {
  yield takeLatest(LOG_USER_OUT, customerLogoutSaga);
}
