<template>
  <div class="leftPanel">
    <div class="interfaceControlFrame">
      <div class="interfaceControlFrameHostContainer">
        <div class="interfaceControlFrame_head"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Left"
    }
</script>

<style scoped>
  .leftPanel{
    position: absolute;
    z-index: 1;
    left: 0px;
    width: 25%;
    height: 100%;
    display: block;
  }
  .interfaceControlFrame{
    margin: 0px 0px 0px 60px;
    height:100%;
    background-color: red;
  }
  .interfaceControlFrame_head{
    padding-top: 27px;
    border-bottom: 1px solid #d9d9d9;
    min-width: 110px;
    height:60px;
    background-color: blue;
  }
</style>
