<template>
  <div class="page">
    <div class="page-header">
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>
    <div class="page-content">
      <div class="side-content">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称12" />
        </van-sidebar>
      </div>
      <div class="sideCon-content">
        <button @click="gotoLogin()">去注册</button>
        <van-button type="default" @click="getInfo()">默认按钮</van-button>
        <div class="aaa">{{ username }}</div>
        <div class="aaa">{{ address.city }} {{ address.area }}</div>
        <p v-for="item in 100" :key="item">{{ item }}</p>
      </div>

      <!--<img alt="Vue logo" src="../assets/logo.png" />-->
      <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
      <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    </div>
  </div>
</template>

<script>
import { NavBar, Button, Sidebar, SidebarItem, Icon } from "vant";
import { loginFun, logout, test } from "../service/UserService";

export default {
  name: "home",
  data() {
    return {
      activeKey: 0,
      username: "djh",
      test: null,
      address: { city: "威海", area: "经区" },
      n: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    };
  },
  components: {
    [Button.name]: Button,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  created() {
    console.log("created");
    // console.log(this.$options.data());
  },
  mounted() {
    console.log("mounted");
  },
  destroyed() {},
  methods: {
    async gotoLogin() {
      await loginFun({ username: "123", pwd: "333" }, this).then(res => {
        console.log(1);
      });
      console.log(2);
    },
    getInfo() {
      test();
    },
    back() {
      console.log("back");
    }
  }
};
</script>
<style scoped lang="less">
/*100%宽度为375px 自动转为10rem*/
.side-content {
  width: @sidebar-width;
  float: left;
}
.sideCon-content {
  width: 290px;
  float: left;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.aaa {
  width: 290px;
  background: @yellow-base;
}
</style>
