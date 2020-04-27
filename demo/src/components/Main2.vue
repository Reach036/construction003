<template>
  <div>
    <div class="rol_1">
      <div class="rol_1_head">
        <div style="float:left">
          <img src="../assets/dot.png">
          <span>数据总览</span>
        </div>
          <button class="small button" style="float:right; cursor: pointer;" @click="getData">刷新</button>
      </div>
      <div class="rol_1_body">
        <div>
          <div>
            <p>采集网站数目</p>
            <p>9</p>
          </div>
          <div>
            <img src="../assets/logo.png">
          </div>
        </div>
        <div>
          <div>
            <p>信息条目</p>
            <p>{{this.data}}</p>
          </div>
          <div>
            <img src="../assets/logo.png">
          </div>
        </div>
      </div>
    </div>
    <div class="rol_2">
      <div class="rol_2_head">
        <div style="float:left;">
          <img src="../assets/dot.png">
          <span>开发人员</span>
        </div>
      </div>
      <div class="rol_2_body">
        <div>
          <p>姓名:李兆丰</p>
          <p>学号:2016220205016</p>
        </div>
        <div>
          <p>姓名:李致远</p>
          <p>学号:2016220205015</p>
        </div>
        <div>
          <p>姓名:张梓豪</p>
          <p>学号:2016220205027</p>
        </div>
      </div>
    </div>
    <div class="rol_3">
      <div class="rol_3_head">
        <div style="float:left">
          <img src="../assets/dot.png">
          <span>指导老师</span>
        </div>
      </div>
      <div>
        <p>姓名:苏生</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        data:0,
        isConnected: false,
        isConnecting: true,
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData:function(){
        var _this= this;
        this.isConnecting = true;
        this.requestData('all',_this)
      }
    },
    mounted: function (){
      // this.getData();
    }
  }
</script>

<style scoped>
  .rol_1{
    height:25%;
  }
  .rol_2{
    height:35%;
  }
  .rol_3{
    height:20%;
  }
  .rol_1_head{
    height: 10%;
    width:90%;
    padding-top:25px;
    padding-left:35px;
    padding-bottom:20px;
  }
  .rol_1_body{
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: 50%;
  }
  .rol_1_body>div{
    height:75%;
    width:35%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
  }
  .rol_1_body>div>div{
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    height:60%;
  }
  .rol_1_body img{
    height:70px;
    width:70px;
  }
  .rol_1_body p{
    margin:0;
  }
  .rol_2_head{
    height: 7%;
    width:90%;
    padding-top:25px;
    padding-left:35px;
    padding-bottom:10px;
  }
  .rol_2_body{
    height: 70%;
    width:90%;
    padding-top:5px;
    padding-left:35px;
    padding-bottom:20px;
  }
  .rol_2_body>div{
    height:35%;
    width:75%;
    float:left;
  }
  .rol_2_body p{
    text-align : left;
    margin-left:13px;
  }
  .rol_3_head{
    height: 7%;
    width:90%;
    padding-top:5px;
    padding-left:35px;
    padding-bottom:10px;
  }
  .rol_3 p{
    text-align : left;
    margin-left:50px;
  }
</style>
