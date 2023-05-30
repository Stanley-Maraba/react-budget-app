    import { combineReducers, createStore, applyMiddleware } from 'redux';
    import {userReducer} from './User';
    import createSagaMiddleware from 'redux-saga';
    import { watcherSaga } from '../sagas/RootSaga';
    import { composeWithDevTools } from 'redux-devtools-extension';

    const reducer = combineReducers({
        user: userReducer
    });

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(watcherSaga);

    export default store;
