<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-bar {
  display: flex; /*开启flex布局*/
  height: 44px; /* 一般导航栏的高度都是44px，如果加上上面的状态栏的话，一般是64px(状态栏20px) */
  line-height: 44px;
  /* 行里面有内容之后，这个才起效果 */
  text-align: center; /* 使得里面的文本(按钮等)居中 */
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1); /* 导航栏下方添加阴影 */
}

.left,
.right {
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
}
.center {
  flex: 1; /* 中间占据除左右60px剩下的所有宽度 */
}

.left,
.right,
.center {
  /* 禁止文字被选中 */
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>