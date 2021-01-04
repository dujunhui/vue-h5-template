<template>
  <div id="app">
    <!--@afterLeave设置过渡离开完成之后的组件状态  transitionName还没做完。。。。。-->
    <transition :name="transitionName" @afterLeave="clearTransition">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

/**
 * App 组件
 * 在这里执行对于页面的切换效果
 * 原理简介：
 * 在这里对于页面之间的切换采用将路由堆栈
 * 的方法而不是类似子路由这样的根据路由长度来
 * 判断页面是切入还是切出，由此会导致如果刷新当前
 * 页面将会导致堆栈刷新，但是对于在App环境中不存在
 * 主动的页面刷新，因此也不存在这种问题。
 * 基本原理是每次路由切换将其堆入一个栈，最多存下两个路由
 * 根据栈的长度判断是否切入还是切出，并在每次切换完成清除动画
 * Route 动画由Vuex Transition 储存
 */

export default {
  data() {
    return {
      prevRoutes: [] // 存储上一个路由的name
    };
  },
  computed: {
    ...mapState("transition", ["transitionName"])
  },
  methods: {
    ...mapMutations("transition", ["setTransition"]),
    clearTransition() {
      // store.commit("transition/setTransition", "");
      this.setTransition("");
    }
  },
  watch: {
    $route(to, from) {
      if (!(to.meta.noPageAnimation || from.meta.noPageAnimation)) {
        if (to.name === this.prevRoutes[this.prevRoutes.length - 1]) {
          // 如果要跳转的路由正好是上一个路由，则是返回操作
          // store.commit("transition/setTransition", "turn-off");
          this.setTransition("turn-off");
          this.prevRoutes.pop(); // 删除
        } else {
          if (from.name != null) {
            // store.commit("transition/setTransition", "turn-on");
            this.setTransition("turn-on");
            this.prevRoutes.push(from.name);
          }
        }
      }
    }
  }
};
</script>

<style lang="less">
#app {
  font-size: 12px;
}
</style>
