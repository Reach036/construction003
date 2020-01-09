<template>
  <div class="loading"></div>
</template>

<script>
  export default {
    name: 'Loading' // 定义的组件名称 使用时写法：loading
  }
</script>

<style scoped>
  .loading {
    background: url('../assets/loding.gif') center center no-repeat #fff;
    height:300px;
    width:400px;
    z-index: 1000;
    margin:auto;
  }
</style>
