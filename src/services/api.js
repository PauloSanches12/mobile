import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ax-xs6.anonymous.mobile.exp.direct:3333',
    //exp://ax-xs6.anonymous.mobile.exp.direct:
});

export default api;