import Axios from 'axios';
import baseUrl from './api-config.js';
import { message } from 'antd';
const service = Axios.create({
    baseURL: baseUrl.baseUrl,
    timeout: 20000
});
// service.interceptors.request.use((c) => {
//     const conf = c;
//     console.log(c);
//     const token = localStorage.getItem((token));
//     if (!token) {
//         // setTimeout(() => {
//         //     window.location.href = '/login';
//         // });
//     }
//     conf.headers.token = token;
//     conf.data = conf.data;
//     // conf.body.data = conf.data;
//     console.log(conf.data);
//     return conf;
// });
service.interceptors.response.use((res) => {
    if (res.status !== 200) {
        message.warning('网络请求失败！请稍后再试');
        if (res.status === 401) {
            localStorage.setItem('token', '');
            message.error('未授权或登录已过期，跳转登录');
            setTimeout(() => {
                window.location.href = '/login';
            });
        } else if (res.status === 403) {
            message.error('您没有权限访问');
        }
        res.data.success = false;
    } else {
        res.data.success = true;
    }
    res.data.errorCode = Number(res.data.errorCode);
    if (res.data.errorCode !== 0) {
        message.warning(res.data.errorMsg || '请求失败，请稍后再试');
    }
    return res.data;
}, () => {
    message.warning('请求失败，请稍后再试');
    return {};
});
export default service;
