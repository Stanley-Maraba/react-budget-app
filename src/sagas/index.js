import { combineReducers } from 'redux';

import { userReducer } from '../auth/user-reducer';

const reducer = combineReducers({
    user_store: userReducer
});

export default reducer;
