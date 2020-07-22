<template>
  <div class="weather-nav">
    <nav-bar>
      <!-- <img slot="left" class="menu-icon" src="@/assets/img/navbar/menu.svg" alt="菜单"> -->
      <div slot="center" class="title">Météo</div>
      <img slot="right" class="plus-icon" src="@/assets/img/navbar/plus.svg" @click="cityClick" />
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";

export default {
  components: {
    NavBar
  },
  methods: {
    cityClick() {
      this.$router.push("/CityChoose");
      // this.$router.push({path:'/CityChoose'});
    }
  }
};
</script>

<style scoped>
.menu-icon {
  /* width: 22px; */
  /* height: 44px; */
}

.plus-icon {
  width: 20px;
  height: 44px;
  cursor: pointer;
}

.title {
  font-family: "gillsans-heavy";
  font-size: 20px;
  /* color: #0077ff; */
  /* color: saddlebrown; */
  /* vertical-align: bottom; */
  /* font-weight: 400; */
  /* height: 44px; */
  /* line-height: 44px; */
}
</style>