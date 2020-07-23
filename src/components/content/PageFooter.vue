<template>
  <div class="page-footer">
    <!-- <span class="developer">开发者 · Venthanx</span> -->
    <span>气象数据来源 · </span><a href="https://www.heweather.com/" target="_blank" class="source-data">和风天气</a>
  </div>
</template>

<style>
.page-footer {
  padding-top: 30px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 12px;
  color: rgba(192, 192, 192, 0.7);
  /* letter-spacing: 1px; */
}
.source-data {
  color: rgba(192, 192, 192, 0.7);
  text-decoration: none;
}
.source-data:hover {
  text-decoration: underline;
}
</style>