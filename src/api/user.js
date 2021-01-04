import qs from "qs";
import request from "@/utils/request";


// 登录
export function login(params) {
  const debug = true;
  if (debug) {
    return request({
      url: "/user/login",
      method: "post",
      data: params
    });
  } else {
    return request({
      url: "/user/login",
      method: "post",
      data: qs.stringify(params)
    });
  }
}

// 退出
export function logout(data) {
  return request({
    url: "/user/logout",
    method: "post",
    data
  });
}

// test
export function test(params) {
  return request({
    url: "/user/xxx",
    method: "post",
    data: qs.stringify(params)
  });
}
