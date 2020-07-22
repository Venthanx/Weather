<template>
  <div class="city-choose">
    <nav-bar>
      <div class="back" slot="left" @click="backBtn">返回</div>
      <div class="title" slot="center">城市列表</div>
      <!-- <div class="sort" slot="right">编辑</div> -->
    </nav-bar>
    <div class="searchbar">
      <input
        type="text"
        class="search"
        ref="search"
        @focus="getFocus"
        @mouseout="noFocus($event)"
        placeholder="输入城市名称"
        v-model.trim="keyword"
      />
      <button v-show="isShow" @click="cancelBtn">取消</button>
    </div>
    <!-- <div class="selected-city">北京</div> -->
    <transition>
      <div class="city-area" v-show="isShow" ref="resultshow">
        <ul>
          <li v-for="(item, i) of lists" :key="Math.random() + i" @click="addNewCity(item)">{{item}}</li>
          <li class="tip" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import { getCitylist } from "@/network/request";
export default {
  components: {
    NavBar
  },
  // props: {
  //   cities: Object
  // },
  data() {
    return {
      isShow: false,
      hasNoData: false,
      keyword: "",
      lists: [],
      timer: null
    };
  },
  methods: {
    backBtn() {
      // this.$router.go(-1);
      this.$router.back(-1);
    },

    getFocus(e) {
      this.isShow = true;
      // console.log(this.$refs.search.style.marginRight);
      // this.$refs.search.style.marginRight = "16px";
    },

    noFocus(e) {
      // if(e != undefined) {
      e.target.blur();
      // }
    },
    cancelBtn() {
      this.isShow = false;
      this.keyword = "";
    },

    addNewCity(city) {
      // console.log(this.$refs.search.blur());
      console.log(city);

      this.$store.dispatch("getWeather", city);
      this.$router.push("/Home");
      this.$store.state.loadingTip = true;
      setTimeout(() => {
        this.$store.state.loadingTip = false;
      }, 2000);
      // this.$refs.search.blur();
      // console.log(e.target);
      // getCitylist(city).then(res => {
      //   console.log(res);
      // });
    }
  },

  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.hasNoData = false;
        this.lists = [];
      }

      // 无关键词 lists清空
      if (!this.keyword) {
        this.lists = [];
        return;
      }

      // if (this.keyword) {
      //   // [优化]：使用延时计时器 减少数据请求执行的频率
      this.timer = setTimeout(() => {
        // const result = [];
        // this.cityjson.forEach(item => {
        //   if (item.indexOf(this.keyword) != -1) {
        //     result.push(item);
        //   }
        // });

        // res.data.location[i].name.forEach(item => {
        // console.log(res.data.location[i].name);
        // console.log(item);
        // });

        // console.log(result);
        // let result = this.cityjson.filter(item => {
        //   if (item.includes(this.keyword)) {
        //     return item;
        //   }
        // });

        // this.lists = result;

        getCitylist(this.keyword).then(res => {
          if (res.data.status == 404) {
            console.log("您输入的城市不存在");
            this.hasNoData = true;
            this.lists = [];
          } else {
            let result = [];
            for (let i in res.data.location) {
              if (res.data.location[i].name.indexOf(this.keyword) > -1) {
                result.push(res.data.location[i].name);
              }
            }
            // 若无匹配结果 显示tip
            if (!result.length) {
              this.hasNoData = true;
            } else {
              this.lists = result;
            }
          }
        });
      }, 300);
    }
  }
};
</script>

<style scoped>
.city-choose {
  width: 100%;
  height: 100%;
}
.searchbar {
  height: 54px;
  display: flex;
  align-items: center;
  margin: 0 30px;
}
.searchbar button {
  font-size: 14px;
  width: 60px;
  margin-left: 20px;
  height: 32px;
  border: 1px solid transparent;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.searchbar button:hover {
  color: #fff;
  background: #40a9ff;
  border-color: #40a9ff;
}

.searchbar button:focus {
  outline: 0;
}

.searchbar button:active {
  background: #1890ff;
  border-color: #40a9ff;

  box-shadow: 0 0 8px 4px rgba(49, 154, 252, 0.2);
}
.search {
  flex: 1;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 32px;
  margin-right: 0;
  padding: 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.65);
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
  font-size: 14px;
  line-height: 1.5;
  list-style: none;

  transition: all 0.3s;
  /* transition: width 2s; */
}

.search:hover {
  border-color: #40a9ff;
}

.search:focus {
  /* margin-right: 16px; */
  /* 【动画bug】 失去焦点但是未点取消时 会自动缩回 */
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  border-color: #40a9ff;
}
/* .search:active{
  margin-right: 16px;
}

.search:not(:active) {
  margin-right: 0px;
  transition: all 0.3s;
} */

.back {
  cursor: pointer;
}

.city-area {
  width: 100%;
  height: 100%;
  /* height: 300px; */
  background-color: rgba(0, 0, 0, 0.705);
}

.city-area ul li {
  width: 100%;
  height: 50px;
  line-height: 50px;
  /* background-color: rgba(48, 48, 48, 0.329); */
  padding-left: 30px;
  margin: 0;
  color: #fff;
  border-bottom: 1px solid rgba(156, 156, 156, 0.329);
  cursor: pointer;
}

.city-area ul li.tip {
  /* padding-left: 0; */
  text-align: center;
}
</style>