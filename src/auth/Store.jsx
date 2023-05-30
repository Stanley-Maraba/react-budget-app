import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './auth.actions';
import { watcherSaga } from '../sagas/handler/user-saga';

const reducer = combineReducers({
    user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherSaga);

export default store;
