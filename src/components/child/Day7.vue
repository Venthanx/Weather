<template>
  <div class="day7-forecast">
    <ul>
      <li v-for="(day, index) in $store.state.forecast.days" :key="index">
        <span class="wdate">
          {{$store.state.forecast.weekdays[index]}}
          <div class="split">|</div>
          {{$store.state.forecast.days[index].date.substr(5, 5).replace("-", "/")}}
        </span>
        <span class="wicon">
          <img :src="require(`../../assets/img/wicon/${$store.state.forecast.wcode[index]}.png`)" />
        </span>
        <span
          class="wtemp"
        >{{$store.state.forecast.days[index].tmp_min}}° - {{$store.state.forecast.days[index].tmp_max}}°</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.day7-forecast {
  width: 340px;
  height: 300px;

  margin: 0 auto;
  margin-top: -20px;
  margin-bottom: 30px;
  padding: 0 26px;
  background-color: #fff;
  box-sizing: border-box;
  /* border: 3px solid rgb(29, 29, 29); */
  border-radius: 20px;
  box-shadow: inset 0px 0px 3px rgba(100, 100, 100, 0.3),
    inset 0px 0px 10px rgba(100, 100, 100, 0.3);
  /* background-color: rgba(213, 227, 255, .9); */
  /* 235, 241, 255 */
  /* box-shadow: 3px 1px 12px rgba(100, 100, 100, 0.1),
    inset 0px 1px 10px rgba(100, 100, 100, 0.4); */
  /* opacity: 10%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul li {
  flex: 1;
  height: 30px;
  width: 100%;
  margin: 8px 0;
  display: flex;
  align-items: center;
}

ul li:not(:first-child) {
  /* color: rgba(0, 0, 0, 0.7); */
}

ul li span {
  /* font-family: "Alibaba-PuHuiTi-Medium"; */
  font-size: 18px;
}

.split {
  display: inline-block;
  width: 14px;
  text-align: center;
  /* font-weight: 700; */
  /* font-family: "Alibaba-PuHuiTi-Light"; */
}

ul li .wicon {
  flex: 1;
  text-align: center;
}

ul li .wicon img {
  width: 22px;
  height: 22px;
  /* line-height: 16px; */
  /* width: 100%; */
  /* height: auto; */
  vertical-align: top;
  /* object-fit: 指定内容(img)适应到其使用的高度和宽度确定的框 */
  /* object-fit: scale-down; */
}

ul li .wtemp {
  text-align: right;
}
</style>