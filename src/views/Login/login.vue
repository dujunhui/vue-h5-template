<template>
  <div class="login">
    <!--{{ text }}-->
    <!--<van-button @click="$router.replace('/')">返回首页</van-button>-->
    <du-header title="注册" haveBack></du-header>
    <van-button @click="gotoAbout()">去about</van-button>
    <div
      style="display: flex; height: 300px; align-items: center;justify-content: center;"
    >
      <div style="display: flex">123</div>
    </div>
    <div class="aaa" v-if="$access.hasRole('admin')">aaa</div>
    <div class="aaa" v-if="$access.can('upload')">上传</div>
  </div>
</template>

<script>
import { Button } from "vant";
import DuHeader from "@/components/DuHeader.vue";
export default {
  name: "login",
  components: {
    DuHeader,
    [Button.name]: Button
  },
  data() {
    return {
      text: "login"
    };
  },
  mounted() {
    this.$access.setRole(["admin"]);
    this.$access.setPermission(["upload"]);
  },
  methods: {
    gotoAbout() {
      this.text = "改变了";
      let _this = this;
      setTimeout(function() {
        _this.$router.replace("/about");
      }, 1000);
    }
  }
};
</script>

<style scoped lang="less">
.login {
  background: @white-base;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.aaa {
  width: 375px;
  background-color: @yellow-base;
}
</style>
