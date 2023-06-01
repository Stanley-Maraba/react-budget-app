import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './user-reduce';
import { watcherSaga } from '../sagas/handler/user-saga';

const reducer = combineReducers({
    user_store: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const authSaga = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherSaga);

export default authSaga;
