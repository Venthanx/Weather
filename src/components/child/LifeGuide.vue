<template>
  <div class="life-guide">
    <!-- <div class="title">生活指数</div> -->
    <div class="wrapper">
      <!-- <div class="guide-item" v-for="(value, key, index) of $store.state.lifestyle" :key="index"></div> -->
      <div class="guide-item" v-for="(item, key, index) in $store.state.lifestyle" :key="index">
        <div class="gkey">{{showDate[key].title}}</div>
        <div class="gvalue">{{item.brf}}</div>

        <!-- {{value.txt}} -->
      </div>
    </div>

    <!-- <swiper-slide v-for="(item, index) in showDate" :key="index"> -->
    <!-- v-if="needShowDate[].type == lifestyleDate[].item.type"  -->
    <!-- <div class="guide-item">
      <div class="gvalue">{{getDate[index]}}</div>
      <div class="gkey">{{item.title}}</div>
    </div>-->
  </div>
</template>

<script>
export default {
  components: {
    // Swiper,
    // SwiperSlide
  },
  data() {
    return {
      getDate: [],
      showDate: [
        {
          type: "comf",
          title: "舒适度"
        },
        {
          type: "drsg",
          title: "穿衣"
        },
        {
          type: "flu",
          title: "感冒"
        },
        {
          type: "sport",
          title: "运动"
        },
        {
          type: "trav",
          title: "旅游"
        },
        {
          type: "uv",
          title: "紫外线"
        },
        {
          type: "cw",
          title: "洗车"
        },
        {
          type: "air",
          title: "空气"
        }
      ]

      // swiperOptions: {
      //   width: 140,
      //   freeMode: true, //自由滑动模式
      //   //freeModeSticky: true, //自由模式自动贴合
      //   spaceBetween: -19,
      //   slidesOffsetAfter: -190 // 设定slide与右边框的预设偏移量（另类解决办法，后续修改）
      // }
    };
  },
  created() {
    // getLifestyleData().then(res => {
    //   const resData = res.data.HeWeather6[0].lifestyle;
    //   // console.log(resData);
    //   // this.getDate = res.data.HeWeather6[0].lifestyle;
    //   for (var i = 0; i < resData.length; i++) {
    //     // console.log(resData[i].brf);
    //     this.getDate.push(resData[i].brf);
    //   }
    // });
  },
  computed: {
    // filterDate() {
    //   return showDate.filter(ft => this.show(ft));
    // }
  }
};
</script>

<style scoped>
.life-guide {
  width: 320px;
  /* height: 240px; */

  margin: 0 auto;
  padding: 0 10px;
  /* margin-top: -40px; */
  margin-bottom: 20px;
  /* padding: 0 20px; */
  background-color: #fff;
  /* box-sizing: border-box; */
  /* border: 3px solid rgb(29, 29, 29); */
  /* padding-left: 5px; */
  /* border-radius: 10px; */
  /* box-shadow: 3px 1px 12px rgba(100, 100, 100, 0.4),
    inset 3px 1px 12px rgba(100, 100, 100, 0.4); */
  border-radius: 20px;
  /* background: #ebebeb; */
  /* box-shadow: inset 5px 5px 10px #dbdbdb,
      inset -5px -5px 10px #fbfbfb; */
  box-shadow: inset 0px 0px 3px rgba(100, 100, 100, 0.3),
    inset 0px 0px 10px rgba(100, 100, 100, 0.3);
  /* overflow: hidden; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  /* border: var(--bdBox); */
}

/* .title {
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 26px;
} */
.wrapper {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  /* padding-bottom: 4px; */
}

.guide-item {
  /* flex: 1; */
  /* margin: 10px; */
  /* margin-right: 0; */
  width: 80px;
  height: 80px;
  /* border: var(--bdBox); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: stretch; */
  /* text-align: center; */
  /* font-family: "Alibaba-PuHuiTi-Regular"; */
  /* border-radius: 6px; */
  /* box-shadow: 3px 1px 12px #dbdbdb; */
  /* border: 1px solid #000; */
  /* border-left: 1px solid #000; */
  /* border-right: 2px solid #000; */
}

.guide-item .gkey {
  /* padding-top: 28px; */
  /* padding-bottom: 18px; */
  /* flex: 1; */
  font-size: 20px;
  /* color: #469cec; */
  /* color: rgba(255, 113, 0, 0.9); */
  color: #ff9404;
  /* text-shadow: 1px 0px 2px #ccc;  */
  overflow: hidden;
}

.guide-item .gvalue {
  /* flex: 1; */
  /* height: 36px; */
  /* line-height: 36px; */
  padding-top: 10px;
  font-size: 14px;
  /* color: #fed500; */
  /* font-family: "Alibaba-PuHuiTi-Regular"; */
  /* color: rgb(198, 202, 214); */
}
</style>