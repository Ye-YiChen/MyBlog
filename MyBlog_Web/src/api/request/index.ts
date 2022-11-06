import axios from 'axios';
import { ResultCode } from '@/constant/Result';
import { Notification } from '@arco-design/web-vue';

const request = axios.create({
    baseURL: 'http://localhost:3000',

});
request.interceptors.request.use(function (config) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
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
    return response;
}, function (error) {
    Notification.error({
        title: '错误',
        content: error.message,
    });
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default request;