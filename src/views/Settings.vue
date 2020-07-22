<template>
  <div class="settings">
    <nav-bar>
      <div class="back" slot="left" @click="backBtn">返回</div>
      <div class="title" slot="center">设置</div>
    </nav-bar>
    <div class="set-lang">敬请期待
      <!-- <div class="setkey">语言</div>
      <div class="setval"><span class="val-eng unselected">英语</span> | <span class="val-zh">中文</span></div> -->
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
    components: {
      NavBar
    },
    methods: {
      backBtn(){
        // this.$router.go(-1);
        this.$router.back(-1);
      }
    }
}
</script>

<style>

.set-lang {
  display: flex;
  margin: 8px 0;
  padding: 0 15px;
  box-shadow: 0px 2px 5px rgba(100, 100, 100, .2);
  align-items: center;
  height: 50px;
}
.setkey {
  flex: 1;
  
}
.setval {
  flex: 1;
  text-align: right;
}
.split {
  width: 6px;
}

.unselected {
  color: rgba(100, 100, 100, .8);
}
</style>