import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
// rem适配
import "amfe-flexible/index.js";

import "./permission";

import access from "./access/index";

// 解决移动端click事件300毫秒延迟方法
import FastClick from "fastclick";
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}
// 关闭生产模式下给出的提示
Vue.config.productionTip = false;

new Vue({
  router,
  access,
  store,
  render: h => h(App)
}).$mount("#app");
