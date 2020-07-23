<template>
  <div class="weather-nav">
    <nav-bar>
      <!-- <img slot="left" class="menu-icon" src="@/assets/img/navbar/menu.svg" alt="菜单"> -->
      <!-- <div slot="center" class="title">Météo</div> -->
      <img slot="center" class="logo-title" src="@/assets/img/navbar/logo.png" />
      <img slot="right" class="plus-icon" src="@/assets/img/navbar/plus.png" @click="cityClick" />
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";

export default {
  components: {
    NavBar,
  },
  methods: {
    cityClick() {
      this.$router.push("/CityChoose");
      // this.$router.push({path:'/CityChoose'});
    },
  },
};
</script>

<style>
.menu-icon {
  /* width: 22px; */
  /* height: 44px; */
}

.plus-icon {
  /* display: block; */
  /* box-sizing: border-box; */
  /* margin-top: 12px; */
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.logo-title {
  /* font-family: "gillsans-heavy"; */
  /* font-size: 20px; */
  height: 16px;
  vertical-align: middle;
  /* color: #0077ff; */
  /* color: saddlebrown; */
  /* vertical-align: bottom; */
  /* font-weight: 400; */
  /* height: 44px; */
  /* line-height: 60px; */
}
</style>