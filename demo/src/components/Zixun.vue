<template lang="html">
  <div>
    <div class="menu_right_head">
      <span style="float:left">当前位置:咨询信息</span>
      <button class="small button" style="float:right; cursor: pointer;"  @click="getData">刷新</button>
    </div>
    <div class="zixun_body">
      <transition name="fade">
        <loading style="position:absolute;height:635px;width:72%;" v-show="isConnecting" name="fade"></loading>
      </transition>
      <div class="zixun_body_items" v-if="isConnected">
        <div v-for="item in data.slice((this.currentPage-1)*4,(this.currentPage-1)*4+4)"  class="zixun_body_item">
          <div class="zixun_head"><a :href = "item.zixun_url">{{item.zixun_title}}</a></div>
          <div class="zixun_info">{{item.zixun_info}}</div>
          <div class="zixun_time">发布时间:{{item.zixun_time}}</div>
        </div>
      </div>
      <img class="noNet_img" v-else src="../assets/404.png">
    </div>
    <paginator v-if="isConnected && !isConnecting" id="tab" v-bind:pageCount="pageCount" @update="togglePage"></paginator>
  </div>
</template>

<script>
  import paginator from '@/components/paginator.vue'
  import Loading from '@/components/loading'

  export default {
    components: {
      paginator,
      Loading,
    },
    data(){
      return {
        data:[],
        pageCount: 1,
        currentPage :1,
        isConnected: false,
        isConnecting: true,
      }
    },
    created() {
      this.getData();
    },
    methods: {
      togglePage(val) {
        this.currentPage = val
      },
      getData:function(){
        var _this= this;
        this.data=[];
        this.isConnecting = true;
        this.requestData('zixun',_this)
      }
    },
    mounted: function (){
      // this.getData();
    }
  }
</script>

<style lang="css">
  .zixun_body{
    width:90%;
    height:auto;
    margin:0 auto 0 auto;
  }
  #tab ul{
    width:60%;
    float:right;
  }
  .menu_right_head{
    height: 4%;
    width:90%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:2% auto 0;
  }
  .zixun_body_items{
    width:100%;
    max-height:700px;
    background-color: white;
  }
  .head span{
    padding:5px;
  }
  .zixun_body_item{
    height: 130px;
    padding:10px 0;
    border: solid 1px #efefef;
    margin:0 0 10px;
  }
  .zixun_body_item:hover{
    border: solid 1px #4078c0;
  }
  .zixun_head{
    font-size: 18px;
    line-height: 32px;
    font-weight: bold;
    text-align:left;
    padding-left: 20px;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .zixun_info{
    color: #999;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align:left;
    padding: 10px 25px 0 25px;
    min-height: 40%;
    max-height: 60px;
  }
  .zixun_time{
    text-align:right;
    padding: 10px 20px 10px 0;
    color: #999;
  }
  a{
    color:black;
    text-decoration: none;
  }
  a:hover{
    color: #4078c0;
  }
</style>
