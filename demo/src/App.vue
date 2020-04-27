<template>
  <div id="app">
    <el-container>
        <el-aside class="aside" style="width: 12%;">
          <div class="interfaceControlFrame">
            <div class="interfaceControlFrame_head">
              <img src="./assets/UESTC.png">
            </div>
            <div class="interfaceControlFrameHostContainer">
              <el-col :span="2">
                <el-menu
                  :default-active="$route.path"
                  router mode="horizontal"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#f2f2f2"
                  text-color="#333333"
                  active-text-color="#333333">
                  <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="nav-item">
                    <template slot="title">
                      <i class="el-icon-s-platform"></i>
                      <span style="cursor: pointer;"> {{ item.navItem }}</span>
                    </template>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </div>
          </div>
        </el-aside>
        <el-main class="main">
          <div class="main-head">
            <p>欢迎使用</p>
            <div class="time-table">
              <div>{{nowTime_Hour}}</div>
              <div>{{nowTime_Year}}</div>
            </div>
          </div>
          <keep-alive>
            <router-view  class="menu-right" v-if="$route.meta.keepAlive"/>
          </keep-alive>
        </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nowTime_Year:"",
        nowTime_Hour:"",
        navList:[
          {name:'/components/Main',navItem:'街区地图'},
          {name:'/components/city',navItem:'3D城市地图'},
          {name:'/components/heatmap',navItem:'热力图'},
          {name:'/components/satellite',navItem:'卫星影像图'},
          {name:'/components/terrain',navItem:'地形图'},
          {name:'/components/depth',navItem:'海洋深度图'},
        ],
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getTime(){
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();;
        this.nowTime_Hour = hh+':'+mf;
        this.nowTime_Year = yy+'-'+mm+'-'+dd;
      },
      currentTime(){
        setInterval(this.getTime,500)
      },
    },
    created(){
      this.currentTime();
    }
  }
</script>

<style>
</style>
