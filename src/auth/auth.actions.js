export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

export const getUser = (data, navigate) => {
    return {
        type: GET_USER,
        payload: data,
        navigate
    };
};

export const setUser = (user) => ({
    type: SET_USER,
    user
});

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