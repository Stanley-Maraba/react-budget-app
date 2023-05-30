import axios from 'axios';

export function requestGetUser(data) {
    return axios.request({
        method: 'post',
        url: 'http://localhost:8080/api/users/login',
        data: data
    });
}