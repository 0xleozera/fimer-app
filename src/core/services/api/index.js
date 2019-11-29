import axios from 'axios';
import { outbound, inbound } from 'utils/interceptors';

const api = axios.create({
  baseURL: !__DEV__
    ? 'http://192.168.0.102:3333'
    : 'https://fimer.herokuapp.com',
});

api.interceptors.request.use(request => outbound(request));

api.interceptors.response.use(response => inbound(response));

export default api;
