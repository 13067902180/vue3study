import axios from "axios";
import qs from 'qs';
// 导入axios库 和秩序化qs语法
// 配置不同环境下，调用不同接口

// switch (process.env.NODE_ENV) {
//     // 生产环境，部署到服务器上的环境
//     case 'production':
//         axios.defaults.baseURL = 'http://api.zhengqinan.cn';
//         break;
//     //设置测式环境的接口地址
//     case 'text':
//         axios.defaults.baseURL = 'http://api.zhengqinantext.cn';
//         break;
//     //开发环境接口地址
//     default:
//         axios.defaults.baseURL = 'http://api.kaifa.cn'
// }
axios.defaults.timeout = 10000  //设置十秒axios的时间
axios.defaults.withCredentials = true;//例如：登录校验session和cookie
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' //声明请求格式
axios.defaults.transformRequest = data => qs.stringify(data)  //qs是第三方库，转换为x-www-form-urlencoded
/**
 * 设置请求拦截器：----在项目中发请求（请求没有发出去）可以做一些事情
 * 客户端->[请求拦截器]->服务器端
 * token校验（JWT）：接收到服务器的token,存储到vuex/本地存储中，每次向服务器发送请求，我们应该把token带上
 * config :发起请求的请求配置项
 */
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    token && (config.headers.Authoriztion = token)
    return config
}, error => {
    return Promise.reject(error)
})