import { call, put, takeLatest } from 'redux-saga/effects';

import { requestGetUser } from '../requests/User';
import { GET_USER, setUser } from '../../auth/auth.actions';

export function* handleGetUser(action) {
    try {
        const { payload } = action;
        const { navigate } = action;

        const response = yield call(requestGetUser, payload);
        const { data } = response;
        yield put(setUser(data));
        yield call(navigate, '/dashboard');
    } catch (error) {
        alert(error);
    }
}

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser);
}