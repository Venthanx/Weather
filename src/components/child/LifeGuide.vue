<template>
  <div class="life-guide">
    <!-- <div class="title">生活指数</div> -->
    <div class="wrapper">
      <div class="guide-item" v-for="(item, key, index) in $store.state.lifestyle" :key="index">
        <div class="gkey">{{showDate[key].title}}</div>
        <div class="gvalue">{{item.brf}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      getDate: [],
      showDate: [
        {
          type: "comf",
          title: "舒适度",
        },
        {
          type: "drsg",
          title: "穿衣",
        },
        {
          type: "flu",
          title: "感冒",
        },
        {
          type: "sport",
          title: "运动",
        },
        {
          type: "trav",
          title: "旅游",
        },
        {
          type: "uv",
          title: "紫外线",
        },
        {
          type: "cw",
          title: "洗车",
        },
        {
          type: "air",
          title: "空气",
        },
      ],
    };
  },
};
</script>

<style scoped>
.life-guide {
  width: 320px;
  margin: 0 auto;
  padding: 0 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: inset 0px 0px 3px rgba(100, 100, 100, 0.3),
    inset 0px 0px 10px rgba(100, 100, 100, 0.3);
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
}

.guide-item {
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.guide-item .gkey {
  font-size: 20px;
  color: #ff9404;
  overflow: hidden;
}

.guide-item .gvalue {
  padding-top: 10px;
  font-size: 14px;
}
</style>