<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // 获取ip定位
    this.$store.state.loadingTip = true;
    this.$store.dispatch("getWeather", "auto_ip");
    setTimeout(() => {
      this.$store.state.loadingTip = false;
    }, 1000);
  },
};
</script>

<style>
@import "assets/css/normalize.css";
@import "assets/css/base.css";
@import "assets/css/font.css";

#app {
  width: 100%;
  height: 100%;
  /* font-family: "Alibaba-PuHuiTi-Regular"; */
  font-weight: 700;
  /* background: linear-gradient(to bottom, #ffffff, #def6fd); */
}
</style>
