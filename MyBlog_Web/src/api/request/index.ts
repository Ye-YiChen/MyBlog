import axios from 'axios';
import { ResultCode } from '@/constant/Result';
import { Notification } from '@arco-design/web-vue';
import { goLogin } from '@/utils/goRoute';
import { requestLocalURL } from '@/constant/Request';

const request = axios.create({
    baseURL: requestLocalURL,
});
request.interceptors.request.use(function (config) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    /* 1. 携带token头 */
    const token = localStorage.getItem('token');
    if (!token) {
        return config;
    }
    config.headers!.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
    const { data: { code, message } } = response;
    if (code === ResultCode.Error) {
        Notification.error({
            title: '请求错误',
            content: message,
        });
    }
    // 直接返回data
    return response.data;
}, function (error) {
    // 如果401，跳转到登录页
    console.log(error)
    // if (error.response.status === 401) {
    //     goLogin();
    // }
    Notification.error({
        title: '错误',
        content: error.message,
    });
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default request;