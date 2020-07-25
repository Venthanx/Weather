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
      <img
        :src="position"
        class="position-icon"
        @click="getPosition"
        @mouseover.stop="showPostips"
        @mouseout.stop="hidePostips"
      />
      <div
        class="postips"
        v-show="postipsStatus"
        @mouseover.stop="showPostips"
        @mouseout.stop="hidePostips"
      >
        <div class="posTextTips">
          <p>获取精准定位</p>
          <span>无法定位？</span>
          <a href="javascript:void(0);" @click="showErrtips">查看原因</a>
        </div>
        <div class="triangle"></div>
      </div>
    </div>
    <div class="err-cause" v-show="ErrtipState">
      <h3>为什么定位失败？</h3>
      <!-- <ul>
        <li>浏览器不支持，请更换更高版本的 Chrome 浏览器</li>
        <li>由于H5安全权限问题，请使用 https 协议浏览本站</li>
        <li>您拒绝了定位权限申请，请在浏览器设置内重新获取定位权限</li>
      </ul>-->
      <p>1. 浏览器不支持，请更换更高版本的 Chrome 浏览器；</p>
      <p>2. 由于H5安全权限问题，请使用 https 协议浏览本站；</p>
      <p>3. 您拒绝了定位权限申请，请在浏览器设置内重新获取定位权限。</p>
      <div class="i-know" @click="hideErrtips">我知道了</div>
    </div>
    <div class="mask" v-show="maskState"></div>
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
      timer: null,
      ErrtipState: false,
      maskState: false,
    };
  },

  methods: {
    getPosition() {
      // 获取地位定位
      // this.postipsStatus = false;
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
    showPostips() {
      if (this.timer) clearTimeout(this.timer);
      this.postipsStatus = true;
    },
    hidePostips() {
      this.timer = setTimeout(() => {
        this.postipsStatus = false;
      }, 500);
    },
    showErrtips() {
      // this.$parent.maskState = true;
      this.maskState = true;
      // this.$store.state.maskState = true;
      // this.$store.state.loadingTip = true;
      this.ErrtipState = true;
    },
    hideErrtips() {
      this.maskState = false;
      // this.$store.state.maskState = false;
      this.ErrtipState = false;
    },
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
  height: 12px;
  vertical-align: middle;
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
.err-cause {
  text-align: center;
  /* margin: auto; */
  /* display: table; */
  position: fixed;
  top: 200px;
  /* left: 50%; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  width: 330px;
  height: 250px;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 2px 2px 12px rgba(116, 116, 116, 0.25);
  z-index: 101;
}
.err-cause h3 {
  margin: 24px 0 14px 0;
}

.err-cause p {
  line-height: 20px;
  text-align: justify;
  margin: 6px 30px;
  font-weight: 400;
  font-size: 14px;
  color: rgb(141, 141, 141);
}
.err-cause::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 153px;
  width: 24px;
  height: 4px;
  border-radius: 6px;
  background-color: rgb(24, 123, 253);
}
.err-cause .i-know {
  content: "我知道了";
  position: absolute;
  bottom: 14px;
  left: 115px;
  width: 100px;
  height: 34px;
  line-height: 34px;
  border-radius: 20px;
  background-color: rgb(0, 218, 124);
  box-shadow: 2px 2px 6px rgba(116, 116, 116, 0.267);
  text-align: center;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.mask {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100;
  /* 高斯模糊 (more not support !!!) */
  backdrop-filter: saturate(180%) blur(4px);
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