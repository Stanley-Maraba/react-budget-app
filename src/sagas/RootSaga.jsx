import { takeLatest } from 'redux-saga/effects';

import { handleGetUser } from './handler/User';
import { GET_USER } from '../auth/User';

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser);
}