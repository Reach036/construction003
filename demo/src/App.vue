<template>
  <div id="app">
    <el-container>
      <transition name="draw-left">
        <el-aside style="background: gray" v-show="showLeft">
          <div class="interfaceControlFrameHostControl">
            <button id="isAsideVisible" @click="toolEventSlot"></button>
          </div>
          <div class="interfaceControlFrame">
            <div class="interfaceControlFrame_head"></div>
            <div class="interfaceControlFrameHostContainer"></div>
          </div>
        </el-aside>
      </transition>
        <el-main style="background: aqua" v-show="showRight">

        </el-main>
    </el-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {  /*定义data property的地方*/
    return {
      showLeft: true,
      showRight: true,
    }
  },
  methods: {
    toolEventSlot()
    {
      this.showLeft = !this.showLeft;
      console.log(this.showLeft);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  position: relative;
}

el-aside{
  position: relative;
  z-index: 1;
  width: 25%;
  height: 1000px;
  display: inline-block;
  float:left;
  overflow: hidden;
}

el-main{

  z-index: 1;
  min-width: 75%;

  height: 1000px;
  display: inline-block;
}

.interfaceControlFrame{
  margin: 0px 0px 0px 0px;
  height:100%;
  width: 79%;
  background-color: red;
  float:right;
}
.interfaceControlFrame_head{
  padding-top: 27px;
  border-bottom: 1px solid #d9d9d9;
  height:60px;
  background-color: blue;
}
  .interfaceControlFrameHostControl{
    margin: 0px 0px 0px 0px;
    height:100%;
    width: 20%;
    background-color: lightgray;
    float:left;
  }

  #isAsideVisible{
    height:25px;
    width:100%;
    background-color: yellow;
    z-index:99;
  }

.draw-left-enter-active, .draw-left-leave-active {
  transition: all 1s ease;
}
.draw-left-enter, .draw-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
}

.draw-right-enter-active, .draw-right-leave-active {
  transition: all 1s ease;
}
.draw-right-enter, .draw-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 100%;
}
</style>
