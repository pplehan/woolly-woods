import axios from 'axios';

const instance = axios.create({
  baseURL: '/mock',
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  // 可以在這裡添加通用的請求配置
  // config.headers['Authorization'] = 'Bearer token';
  return config;
});

instance.interceptors.response.use(
  (res) => {
    console.log('Response Data:', res.data);
    return res.data;
  },
  (err) => {
    console.error('Response Error:', err);
    return Promise.reject(err);
  }
);

export default instance;
