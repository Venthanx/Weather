<template>
  <div class="loading">
    <div class="toast">
      <img :src="icon" />
      <div class="tips">获取天气数据 ...</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: require("assets/img/app/loading.png")
    };
  }
};
</script>

<style>


.loading {
  /* margin: 0 auto; */
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.1);
  /* 高斯模糊 (more not support !!!) */
  backdrop-filter: saturate(180%) blur(4px);
}
.toast {
  margin-top: 354px;
}
.toast img {
  height: 30px;
  width: 30px;
  margin-bottom: 10px;
  animation: rotate 1.2s linear infinite;
}
.toast .tips {
  /* color: #1296db; */
  text-indent: 14px;
  font-size: 14px;
}
</style>