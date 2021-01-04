<template>
  <div class="duHeader">
    <div class="leftBox" @click="back" v-if="haveBack">
      <van-icon class="leftIcon" name="arrow-left" size="0.4rem" />
      <span>返回</span>
    </div>
    <h1 v-text="title" class="titleBox"></h1>
    <div class="rightBox">
      <slot name="duHeaderRight"></slot>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "DuHeader",
  props: {
    haveBack: Boolean,
    title: String
  },
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back(-1);
      // this.$emit("back");
    }
  }
};
</script>

<style scoped lang="less">
h1 {
  font-weight: normal;
}
.duHeader {
  display: flex;
  height: @header-height;
  background-color: @color-primary;
  color: @white-base;
  padding: 0 10px;
  overflow: hidden;
  .leftBox {
    flex: 0.5;
    display: flex;
    align-items: center; //交叉轴对齐方式
  }
  .titleBox {
    flex: 1;
    height: @header-height;
    line-height: @header-height;
    text-align: center;
    box-sizing: border-box;
    font-size: @font-big-size;
  }
  .rightBox {
    flex: 0.5;
    line-height: @header-height;
  }
}
</style>
