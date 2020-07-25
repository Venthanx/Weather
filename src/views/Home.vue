<template>
  <div class="home">
    <side-menu ref="menu"></side-menu>
    <weather-nav></weather-nav>
    <main-board></main-board>
    <day7-forecast></day7-forecast>
    <life-guide></life-guide>
    <page-footer></page-footer>
    <div class="mask" v-show="maskState" @click="maskClick"></div>
    <loading v-show="$store.state.loadingTip"></loading>
  </div>
</template>

<script>
import SideMenu from "components/content/SideMenu";
import WeatherNav from "components/content/WeatherNav";
import MainBoard from "components/content/MainBoard";
import PageFooter from "components/content/PageFooter";
import day7Forecast from "components/child/Day7";
import LifeGuide from "components/child/LifeGuide";
import Loading from "components/content/Loading";

export default {
  components: {
    SideMenu,
    WeatherNav,
    MainBoard,
    PageFooter,
    day7Forecast,
    LifeGuide,
    Loading,
  },

  data() {
    return {
      maskState: false,
    };
  },

  methods: {
    maskClick() {
      this.maskState = !this.maskState;
      this.$refs.menu.menuState = !this.$refs.menu.menuState;
    },
  },
};
</script>

<style>
.home {
  position: relative;
  /* width: 100%; */
  /* height: 100%; */
  background: linear-gradient(to bottom, #ffffff, #def6fd);
}

.mask {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 89;
  /* 高斯模糊 (more not support !!!)  */
  backdrop-filter: saturate(180%) blur(4px);
}
</style>