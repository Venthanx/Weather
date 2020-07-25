<template>
  <div class="about">
    <nav-bar>
      <img class="back" slot="left" @click="backBtn" :src="backIconUrl" />
      <div class="title" slot="center">关于</div>
    </nav-bar>
    <main>
      <!-- <img :src="background" alt=""> -->
      <div class="intro">
        <h1>欢迎</h1>
        <p>这是一个基于Vue.js框架开发的天气web应用，在这里，您可以获得最及时、最精准的天气信息；包括实时天气信息、7天天气预报和生活指南，还可以订阅多个城市的天气。我们会保证应用的不断更新，继续为您提供优质的服务！</p>
      </div>
      <!-- <div class="update-log">
        <h1>更新日志</h1>
      </div>-->
      <div class="statement">
        <span>本项目开源 </span>
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
      backIconUrl: require("assets/img/navbar/back.png"),
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
.back {
  width: 18px;
  cursor: pointer;
}
.about {
  width: 100%;
  text-align: center;
  height: 100%;
  /* background: url("~assets/img/about/background.png") top center/contain no-repeat #e0f0ea; */
  /* color: #fff; */
  /* overflow: hidden; */
}


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
  /* width: 300px; */
  /* font-size: 0.5em; */
  padding: 0 4em;
  line-height: 1.5rem;
  text-align: justify;
  font-family: '黑体';
}
.statement {
  margin-top: 80px;
}
.statement a {
  color: black;
}
</style>