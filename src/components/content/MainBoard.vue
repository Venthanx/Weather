<template>
  <div class="main-board">
    <div class="weather-board">
      <div class="update-time" @click="updateBtn">
        {{$store.state.now.updatetime}}
        <span>更新</span>
        <img :src="updateicon" class="update-icon" ref="update" />
      </div>
      <div class="local">
        <div class="location">
          <img :src="posIconUrl" class="posicon" v-show="this.$store.state.positionCity.cityname" />
          {{$store.state.city}}
        </div>
      </div>
      <div class="nowtemp">
        {{$store.state.now.temperature}}
        <div class="degree-symbol">°</div>
      </div>
      <div class="weather-big-icon">
        <img :src="require(`assets/img/wicon/${$store.state.now.weathericoncode}.png`)" />
      </div>
      <div class="wname">{{$store.state.now.weathername}}</div>
      <img :src="position" class="position-icon" @click="getPosition" @mouseover.stop="showPostips" @mouseout.stop="hidePostips"/>
      <div class="postips" v-show="postipsStatus" @mouseover.stop="showPostips" @mouseout.stop="hidePostips">
        <div class="posTextTips">
          <p>获取精准定位</p>
          <span>无法定位？</span>
          <a href>查看原因</a>
        </div>
        <div class="triangle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postipsStatus: false,
      updateicon: require("assets/img/mainboard/update.png"),
      position: require("assets/img/mainboard/position.png"),
      posIconUrl: require("assets/img/citychoose/position.png"),
    };
  },

  methods: {
    getPosition() {
      // 获取地位定位
      this.$store.state.loadingTip = true;
      this.$store.dispatch("getGeoPosition");
      setTimeout(() => {
        this.$store.state.loadingTip = false;
        this.$refs.update.className = "update-icon iconrotate";
        this.postipsStatus = false;
        if (!this.$store.state.posError) {
          // console.log(this.$store.state.posError);
          this.$store.state.positionCity.cityname = this.$store.state.city;
          this.$store.state.positionCity.poscityid = this.$store.state.cityid;
        }
      }, 2000);
      this.$refs.update.className = "update-icon";
    },
    updateBtn() {
      this.$store.state.loadingTip = true;
      this.$store.dispatch("getWeather", this.$store.state.cityid);

      setTimeout(() => {
        this.$store.state.loadingTip = false;
        this.$refs.update.className = "update-icon iconrotate";
      }, 1500);
      this.$refs.update.className = "update-icon";
    },
    showPostips(){
      this.postipsStatus = true;
    },
    hidePostips(){
      // setTimeout(() => {
        this.postipsStatus = false;
      // },200)
      
    }
  },
};
</script>

<style scoped>
.main-board {
  position: relative;
  height: 360px;
  display: flex;
  justify-content: center;
  /* box-shadow: 0px 1px 4px rgba(100, 100, 100, 0.2); */
}

.weather-board {
  width: 200px;
  height: 300px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  /* position: relative; */
}
.update-time {
  text-align: center;
  /* position: absolute; */
  /* top: 10px; */
  /* left: 10px; */
  font-family: "Rubik-Regular";
  font-size: 14px;
  text-indent: 10px;
  cursor: pointer;
  /* color: rgba(100, 100, 100, 0.8); */
}
.update-time span {
  margin: 0 3px;
}
.update-icon {
  /* padding-top: 2px; */
  /* content: "000"; */
  /* width: 30px; */
  height: 12px;
  /* line-height: 14px; */
  vertical-align: middle;
  /* vertical-align: top; */
  /* vertical-align: bottom; */
  /* background: url(assets/img/mainboard/update.svg) no-repeat center; */
  /* background: violet no-repeat center; */
  /* transform-origin: 50% 50%; */
}
.iconrotate {
  animation: rotate 1s linear 1;
}
.local {
  flex: 0.5;
  text-align: center;
}

.location {
  margin-top: 18px;
  font-size: 24px;
  /* font-family: "gillsans-heavy"; */
  position: relative;
}
.posicon {
  width: 20px;
  position: absolute;
  left: 52px;
  top: 4px;
}
.posTextTips {
  padding-left: 8px;
  position: absolute;
  top: 55px;
  right: 18px;
  width: 116px;
  height: 46px;
  /* border: 1px solid #000; */
  border-radius: 3px;
  font-size: 12px;
  background-color: #313131;
  /* opacity: 0.9; */
  color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  /* z-index: 70; */
}
.posTextTips p {
  margin: 6px 0;
}
.posTextTips a {
  text-decoration: none;
  color: #0f89f5;
}
.posTextTips a:hover {
  text-decoration: underline;
}
.posTextTips a:visited {
  /* color: #fff; */
}
.triangle {
  margin: 0px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent #313131;
  /* opacity: 0.9; */
  padding: 0px;
  width: 0px;
  height: 0px;
  top: 41px;
  right: 23px;
  position: absolute;
  /* z-index: 6; */
}
.nowtemp {
  flex: 1;
  text-align: center;
  font-family: "Rubik-Regular";
  padding-top: 18px;
  font-weight: 700;
  font-size: 4.8em;
  position: relative;
}

.degree-symbol {
  position: absolute;
  top: 18px;
  right: 30px;
  font-size: 50px;
  font-weight: 400;
}

.weather-big-icon {
  flex: 1;
  text-align: center;
}

.weather-big-icon img {
  height: 100px;
  vertical-align: top;
}

.wname {
  margin-top: 10px;
  text-align: center;
  /* font-weight: 400; */
}

.position-icon {
  height: 18px;
  position: absolute;
  top: 20px;
  right: 18px;
  padding: 3px;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-shadow: 1px 1px 4px rgba(100, 100, 100, 0.3);
  cursor: pointer;
}
</style>