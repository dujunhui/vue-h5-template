import axios from "axios";
import store from "@/store";
import { Toast } from "vant";

//注：
//qs.stringify(params) 请求头为 Content-Type: application/x-www-form-urlencoded
//FormData方式 请求头为 Content-Type :  multipart/form-data

// 创建一个AXIOS实例
const service = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    token: "one"
  },
  baseURL: process.env.VUE_APP_URL,
  // withCredentials: true, // 跨域请求时发送cookies
  timeout: 5000 // request timeout
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 在发出请求前做点什么
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      });
    }
    // 给请求头添加X-Token
    if (store.getters.token) {
      config.headers["X-Token"] = store.state.token;
    }
    return config;
  },
  error => {
    // 处理请求错误
    console.log(error); // for debug
    Toast.clear();
    return Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear();
    const res = response.data;
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        store.dispatch("FedLogOut").then(() => {
          location.reload();
        });
      }
      return Promise.reject(res || "error");
    } else {
      return Promise.resolve(res);
    }
  },
  error => {
    console.log("err" + error); // for debug
    Toast.clear();
    return Promise.reject(error);
  }
);

export default service;
