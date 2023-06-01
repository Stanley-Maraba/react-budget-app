import { SET_USER } from './auth.actions';

const initialState = {
    user: undefined
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            const { user } = action;
            return { ...state, user };
        default:
            return state;
    }
}