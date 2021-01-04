//权限
import VueAccessControl from "@lywzx/vue.access.control";
import Vue from "vue";

Vue.use(VueAccessControl, {});
export default new VueAccessControl.Access();
