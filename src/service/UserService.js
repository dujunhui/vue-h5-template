/**
 * service层
 * 处理服务端返回的数据（类似data format），例如 service 同时调用了不同的api，把不同的返回数据整合在一起在统一发送到 store 中
 *
 */

import { login } from "../api/user";
// 登录
let loginFun = (params, _this) => {
  return new Promise(function(resolve, reject) {
    login(params)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        resolve(res.data); // 异步请求成功
        _this.$router.push("/login");
      })
      .catch(error => {
        reject(error); // 异步请求失败
      });
  });
};

// 退出
let logout = () => {
  return new Promise(function(resolve) {
    setTimeout(() => {
      localStorage.removeItem("token");
      resolve();
    }, 1000);
  });
};
// 测试
let test = () => {
  console.log("test");
};

export { loginFun, logout, test };
