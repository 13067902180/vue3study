import axios from "axios";
import qs from 'qs';
// 导入axios库 和秩序化qs语法
axios.defaults.timeout = 10000  //设置十秒axios的时间
axios.defaults.withCredentials = true;//例如：登录校验session和cookie
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' //声明请求格式
axios.defaults.transformRequest = data => qs.stringify(data)  //qs是第三方库，转换为x-www-form-urlencoded