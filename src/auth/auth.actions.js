export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

export const authUser = (data, navigate) => {
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