<template>
  <div id="app">
    <el-container>
        <el-aside class="aside" style="width: 20%;">
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
          {name:'/components/Main',navItem:'首页'},
          {name:'/components/Zhaobiao',navItem:'招标信息'},
          {name:'/components/Xiangmu',navItem:'项目信息'},
          {name:'/components/Jigou',navItem:'机构信息'},
          {name:'/components/Zixun',navItem:'资讯信息'},
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
  li{ list-style: none;}
  ul{
    padding: 0;
    margin: 0;
  }
  .menu-right{
    background-color: #f3faff;
    height:94%;
    padding: 1px;
  }
  .nav-item{
    height:40px;
    text-align:center;
    line-height:40px;
  }
  .nav-item.is-active {
    background-color: #e4e4e4 !important;
  }
  .main-head{
    border-bottom: 2px solid #d9d9d9;
    height:60px;
    background-color: white;
    position: relative;
    display:flex;
    align-items:center;
  }
  .main-head p{
    margin-left: auto;
    margin-right: 25px;
  }

  .time-table{
    width:110px;
    margin-left: 25px;
    margin-right: 25px;
  }
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

.aside{
  position: relative;
  z-index: 1;
  width: 20%;
  height: 936px;
  display: inline-block;
  float:left;
  overflow: hidden;
}

.main{
  z-index: 1;
  width: 80%;
  height: 928px;
  display: inline-block;
  float:right;
}

.interfaceControlFrame{
  margin: 0px 0px 0px 0px;
  height:936px;
  width: 100%;

  float:right;
}
.interfaceControlFrame_head{
  border-bottom: 2px solid #d9d9d9;
  height:100px;
  background-color: #e8e8e8;
  position: relative;
}
.interfaceControlFrameHostContainer{
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}

.interfaceControlFrame_head img{
  height:100%;
  width:auto;
}

</style>
