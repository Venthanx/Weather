<template>
  <div class="side-menu" :class="{'menu-open':menuState}">
    <div class="menu-btn" @click="menuBtn">
      <img class="menu-icon" src="@/assets/img/navbar/menu.svg" />
    </div>
    <div class="links">
      <!-- 不能用a标签 -->
      <!-- <div class="link" @click="cityClick">订阅城市</div> -->
      <div class="link" @click="settingsClick">设置</div>
      <!-- <div class="link" @click="menuLink()">主题</div> -->
      <div class="link" @click="about">关于</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuState: false
    };
  },

  methods: {
    menuBtn() {
      this.$data.menuState = !this.$data.menuState;
      this.$parent.maskState = !this.$parent.maskState;
    },

    // cityClick() {
    //   this.$router.push("/CityChoose");
    //   // this.$router.push({path:'/CityChoose'});
    // },

    settingsClick() {
      this.$router.push("/Settings");
    },

    about() {
      this.$router.push("/About");
    }
  }
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
  transition: all 800ms cubic-bezier(0.8, 0, 0.33, 1);
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

.links {
  width: 240px;
  height: 100%;
  padding-top: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.links .link {
  margin: 20px 0;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);

  /* font-weight: 700; */
  font-size: 20px;
  cursor: pointer;
  /* 转大写 */
  /* text-transform: uppercase; */
}

/* .mask000 {
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    filter: blur(15px);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    outline: 0;
    -webkit-overflow-scrolling: touch;
    background-color: rgba(255, 255, 255, 0.281);
    z-index: 10;
    filter: alpha(opacity=60);  
  } */
</style>