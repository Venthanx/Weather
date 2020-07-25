<template>
  <div class="side-menu" :class="{'menu-open':menuState}">
    <div class="menu-btn" @click="menuBtn">
      <img class="menu-icon" src="@/assets/img/navbar/menu.svg" />
    </div>
    <div class="links">
      <!-- 不能用a标签 -->
      <div class="link" @click="cityClick">
        <img :src="subscribeIconUrl" class="sub-icon" />
        订阅城市
      </div>
      <!-- <div class="link" @click="settingsClick">
        <img :src="setIconUrl" class="set-icon" />
        设置
      </div>-->
      <!-- <div class="link" @click="menuLink()">主题</div> -->
      <div class="link" @click="about">
        <img :src="aboutIconUrl" class="about-icon" />
        关于
      </div>
    </div>
    <a href="https://github.com/Venthanx" target="_blank">
      <div class="developer">开发者 · Venthanx</div>
    </a>
    <!-- <div class="mask" v-show="maskState" @click="maskClick"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuState: false,
      // maskState: false,
      setIconUrl: require("assets/img/menu/setting.svg"),
      aboutIconUrl: require("assets/img/menu/about.svg"),
      subscribeIconUrl: require("assets/img/menu/subscribe.svg"),
    };
  },

  methods: {
    menuBtn() {
      this.menuState = !this.menuState;
      // this.$store.state.maskState = !this.$store.state.maskState;
      this.$parent.maskState = !this.$parent.maskState;
    },

    cityClick() {
      this.$router.push("/CityChoose");
      // this.$router.push({path:'/CityChoose'});
    },

    // settingsClick() {
    //   this.$router.push("/Settings");
    // },

    about() {
      this.$router.push("/About");
    },
  },
};
</script>

<style scoped>
.side-menu {
  height: 100%;
  width: 240px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 90;
  overflow: hidden;
  /* 过渡 */
  transition: all 600ms cubic-bezier(0.8, 0, 0.33, 1);
  transform: translateX(-180px);
  border-radius: 0% 0% 100% 50%;
}

.menu-open {
  border-radius: 0% 0% 0% 0%;
  transform: translateX(0px);
  background: rgba(255, 255, 255, 0.8);
}

.menu-btn {
  width: 60px;
  height: 44px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  cursor: pointer;
}

.menu-btn .menu-icon {
  height: 44px;
  width: 20px;
}
.set-icon,
.about-icon,
.sub-icon {
  float: left;
  height: 23px;
  margin-right: 6px;
}
.links {
  width: 240px;
  height: 100%;
  padding-top: 44px;
  display: flex;
  flex-direction: column;
}

.links .link {
  margin: 20px 0 20px 60px;
  text-decoration: none;
  /* color: rgba(0, 0, 0, 0.9); */

  /* font-weight: 700; */
  font-size: 20px;
  cursor: pointer;
  /* 转大写 */
  /* text-transform: uppercase; */
}

.developer {
  font-size: 10px;
  padding: 5px 10px;
  position: fixed;
  bottom: 24px;
  left: 62px;
  background: rgba(20, 148, 217, 0.164);
  border-radius: 12px;
  /* transform:rotate(-90deg); */
}

a {
  color: #000;
}
</style>