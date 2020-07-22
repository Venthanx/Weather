<template>
  <div class="about">
    <nav-bar>
      <div class="back" slot="left" @click="backBtn">返回</div>
      <div class="title" slot="center">关于</div>
    </nav-bar>
    <main>
      <!-- <img :src="background" alt=""> -->
      <div class="intro">
        <h1>欢迎</h1>
        <p>这是一个基于Vue.js框架开发的天气web应用，在这里，您可以获得最及时、最精准的天气信息。我们会保证应用的不断更新，继续为您提供优质的服务！</p>
      </div>
      <!-- <div class="update-log">
        <h1>更新日志</h1>
      </div>-->
      <div class="statement">
        <span>本项目开源</span>
        <a href="https://github.com/Venthanx/Weather" target="_blank">查看源码</a>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      // background: require("assets/img/about/background.png")
    };
  },
  methods: {
    backBtn() {
      this.$router.back(-1);
    },
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  text-align: center;
  height: 100%;
  /* background: url("~assets/img/about/background.png") top center/contain no-repeat #e0f0ea; */
  /* color: #fff; */
  /* overflow: hidden; */
}
/* main { */
/* width: 100%; */
/* height: 100%; */

/* color: #769d9e; */
/* } */

/* main img { */
/* width: 100%; */
/* } */

/* .intro { */
/* height: 100%; */
/* width: 800%; */
/* margin: 0 auto; */
/* margin-top: 40px; */
/* font-family: "Nunito Sans",sans-serif; */
/* display: flex; */
/* flex-direction: column; */
/* justify-content: center; */
/* background: url("~assets/img/about/background.png") top center/contain no-repeat #e0f0ea; */
/* } */

/* .intro h1 {
  margin: 0 0 10px 0;
  margin-top: 1rem;
  font-size: 1.6rem;
} */

.intro p {
  /* font-size: 0.5em; */
  padding: 0 3em;
  /* letter-spacing: .05em; */
  line-height: 1.5rem;
  text-align: justify;
  /* font-family: '黑体'; */
}
.statement {
  margin-top: 40px;
}
</style>