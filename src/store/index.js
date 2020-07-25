import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


import { getNowData, get7DaysData, getLifestyle } from "@/network/request";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京',  // 默认城市
    cityid: null,
    positionCity: {
      cityname: null,
      poscityid: null
    },
    now: {
      temperature: '10',
      weathername: '晴',
      weathericoncode: '101',
      updatetime: null
    },
    forecast: {
      days: [],
      weekdays: ["今天", "明天"],
      wcode: []
    },
    lifestyle: [],
    selectedCitys: [],
    loadingTip: false,
    posError: false,
  },

  mutations: {

    // showWeather(apitype, location) {
    //   if (apitype !== 'now' && apitype !== 'forecast' && apitype !== 'lifestyle') throw new Error('getWeather error: apitype类型错误');
    //   if (!location) throw new Error('getWeather error: location not defined') }

    updateWeather(state, payload) {

        // vm.$store.state.positionCity.cityname = vm.$store.state.city;
        // vm.$store.state.positionCity.poscityid = vm.$store.state.cityid;

      state.city = payload.res1.data.HeWeather6[0].basic.location;
      state.cityid = payload.res1.data.HeWeather6[0].basic.cid.substr(2);
      state.now.temperature = payload.res1.data.HeWeather6[0].now.tmp;
      state.now.weathername = payload.res1.data.HeWeather6[0].now.cond_txt;
      state.now.weathericoncode = payload.res1.data.HeWeather6[0].now.cond_code;
      state.now.updatetime = new Date().toTimeString().substr(0, 5);

      state.forecast.days = payload.res2.data.HeWeather6[0].daily_forecast;
      state.forecast.wcode = [];  // 清空原数组 避免误触发多次 造成数组污染
      state.forecast.weekdays.splice(2, 5);
      const weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      for (let i = 2; i < state.forecast.days.length; i++) {
        state.forecast.weekdays.push(weekDay[new Date(state.forecast.days[i].date).getDay()]);
      }
      for (let i = 0; i < state.forecast.days.length; i++) {
        state.forecast.wcode.push(state.forecast.days[i].cond_code_d);
      }

      state.lifestyle = payload.res3.data.HeWeather6[0].lifestyle;
    }

  },

  actions: {

    getGeoPosition(context) {
      // 1.申请获取地理定位
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          pos => getLocation(pos), // 成功函数
          e => showError(e), // 失败函数
          { timeout: 5000 } // PositionOptions参数 设置超时时间
        );
      } else {
        alert("浏览器不支持地理定位！");
      }

      // 2.成功获取到定位
      const getLocation = pos => {
        // 判断是否已获取到定位 ? 返回经纬度 : 直接使用ip定位
        // pos = pos ? `${pos.coords.longitude},${pos.coords.latitude}` : "auto_ip";
        pos = `${pos.coords.longitude},${pos.coords.latitude}`;
        this.dispatch('getWeather', pos);
        // console.log(vm.$store.state.posError);
        vm.$store.state.posError = false;
      };

      // 3.定位失败反馈
      function showError(error) {
        vm.$store.state.posError = true;
        // 先自动获取一次假数据 防止页面空白
        // vm.$store.dispatch('getWeather', 'auto_ip');

        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("定位失败，用户拒绝请求地理定位");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("定位失败，位置信息是不可用");
            break;
          case error.TIMEOUT:
            alert("定位失败，请求获取用户位置超时");
            break;
          case error.UNKNOWN_ERROR:
            alert("未知错误，定位系统失效");
            break;
        }
      }
    },

    // getWeather(context, pos) {
    //   getNowData(pos).then(res => {
    //     context.commit('updateWeather', res);
    //   })
    // },

    // async getWeather({commit}){
    //   const result = await getNowData();
    //   commit('updateWeather', result)
    // },

    getWeather(context, pos) {
      axios.all([getNowData(pos), get7DaysData(pos), getLifestyle(pos)]).then(axios.spread(
        (res1, res2, res3) => {
          context.commit('updateWeather', { res1, res2, res3 });
        }))
    }

  }
})

