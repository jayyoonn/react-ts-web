import axios, { AxiosResponse, AxiosError } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

const errorCodeMap = new Map([
  [401, '未授权，请登录'],
  [404, '请求地址不存在'],
  [500, '服务内部错误'],
  [403, '用户不存在访问权限'],
]);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    const { response } = error;

    if (!response) {
      return Promise.reject(error);
    }

    if (errorCodeMap.has(response.status)) {
      const errorMsg = errorCodeMap.get(response.status);
      // TODO: 处理HTTP码异常逻辑
      console.log(errorMsg);
    }
    return Promise.reject(response.data);
  },
);

export default instance;
