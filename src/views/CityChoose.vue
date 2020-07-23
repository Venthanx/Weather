<template>
  <div class="city-choose">
    <nav-bar>
      <img class="back" slot="left" @click="backBtn" :src="backIconUrl" />
      <!-- <div class="back" slot="left" @click="backBtn">返回</div> -->
      <div class="title" slot="center">城市列表</div>
      <img class="edit" slot="right" @click="editBtn" :src="editIconUrl" v-show="!editState" />
      <img class="done" slot="right" @click="editBtn" :src="doneIconUrl" v-show="editState" />
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

    <div class="selected-city">
      <ul>
        <li
          v-if="this.$store.state.positionCity.cityname"
          @click="jumpTo($store.state.positionCity.poscityid)"
        >
          {{this.$store.state.positionCity.cityname}}
          <img :src="posIconUrl" class="pos-icon" />
          <div class="delBtn" @click.stop="posDelBtn" v-show="editState">删除</div>
        </li>
        <li
          v-for="(city, index) in $store.state.selectedCitys"
          :key="index"
          @click="jumpTo(city.id)"
        >
          {{city.name}}
          <div class="delBtn" @click.stop="delBtn(index)" v-show="editState">删除</div>
        </li>
      </ul>
    </div>
    <transition>
      <div class="city-area" v-show="isShow" ref="resultshow">
        <ul>
          <li
            v-for="(item, i) of lists"
            :key="Math.random() + i"
            @click="addNewCity(item, item.id)"
          >{{item.name}}，{{item.adm2}}，{{item.adm1}}</li>
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
    NavBar,
  },
  // props: {
  //   cities: Object
  // },
  data() {
    return {
      isShow: false,
      hasNoData: false,
      editState: false,
      keyword: "",
      lists: [],
      timer: null,
      backIconUrl: require("assets/img/citychoose/back.png"),
      editIconUrl: require("assets/img/citychoose/edit.png"),
      posIconUrl: require("assets/img/citychoose/position.png"),
      doneIconUrl: require("assets/img/citychoose/done.png"),
    };
  },
  methods: {
    backBtn() {
      // this.$router.go(-1);
      this.$router.back(-1);
    },
    editBtn() {
      this.editState = !this.editState;
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

    addNewCity(city, cityid) {
      this.$store.state.selectedCitys.push(city);
      // this.$store.state.selectedCitys.push(city);

      this.$store.dispatch("getWeather", cityid);
      this.$router.push("/Home");
      this.$store.state.loadingTip = true;
      setTimeout(() => {
        this.$store.state.loadingTip = false;
      }, 2000);

      // console.log(city);
    },
    jumpTo(cityid) {
      // console.log(cityid);
      this.$store.dispatch("getWeather", cityid);
      this.$router.push("/Home");
      this.$store.state.loadingTip = true;
      setTimeout(() => {
        this.$store.state.loadingTip = false;
      }, 2000);
    },
    posDelBtn() {
      this.$store.state.positionCity.cityname = null;
      this.$store.state.positionCity.poscityid = null;
    },
    delBtn(index) {
      this.$store.state.selectedCitys.splice(index, 1);
    },
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

        getCitylist(this.keyword).then((res) => {
          if (res.data.status == 404) {
            console.log("您输入的城市不存在");
            this.hasNoData = true;
            this.lists = [];
          } else {
            let result = [];
            for (let i in res.data.location) {
              if (res.data.location[i].name.indexOf(this.keyword) > -1) {
                result.push(res.data.location[i]);
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
    },
  },
};
</script>

<style scoped>
.city-choose {
  width: 100%;
  height: 100%;
}
.back {
  width: 18px;
  cursor: pointer;
}
.edit {
  width: 20px;
  cursor: pointer;
}
.done {
  width: 24px;
  cursor: pointer;
}
.searchbar {
  height: 54px;
  display: flex;
  align-items: center;
  margin: 0 30px;
  position: relative;
}
.searchbar button {
  font-size: 14px;
  width: 60px;
  margin-left: 10px;
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
  background: url("~assets/img/citychoose/search.png") no-repeat;
  background-size: 18px 18px;
  background-position: 98% 50%;
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


.city-area {
  position: absolute;
  top: 98px;
  left: 0;
  width: 100%;
  height: 100%;
  /* height: 300px; */
  background-color: rgba(46, 46, 46, 0.9);
}

.city-area ul li {
  box-sizing: border-box;
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
.selected-city ul {
  margin: 0 30px;
}
.selected-city ul li {
  box-sizing: border-box;
  margin: 0;
  /* margin: 0 30px; */
  padding-left: 10px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
  position: relative;
  cursor: pointer;
}
.selected-city ul li:first-child {
  border-top: 1px solid #ddd;
}

.delBtn {
  width: 50px;
  /* height: 30px; */
  line-height: 26px;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 4px;
  /* float: right; */
  /* margin-right: 30px; */
  color: red;
  font-size: 14px;
  border: 1px solid red;
  border-radius: 16px;
  cursor: pointer;
}
.pos-icon {
  margin-left: 4px;
  height: 18px;
}
</style>