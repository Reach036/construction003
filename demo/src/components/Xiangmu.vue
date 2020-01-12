<template lang="html">
  <div>
    <div class="menu_right_head">
      <span style="float:left">当前位置:项目信息</span>
      <button class="small button" style="float:right; cursor: pointer;"  @click="getData">刷新</button>
    </div>
    <div class="xiangmu_body">
      <transition name="fade">
        <loading style="position:absolute;height:700px;width:72%;" v-show="isConnecting" name="fade"></loading>
      </transition>
      <div class="xiangmu_body_items" v-if="isConnected">
        <div v-for="items in data" class="xiangmu_body_item">
          <div class="xiangmu_body_item_head">
            <span>{{items.type}}</span>
            <span style="cursor: pointer;" @click="gotoMenu(items.msg)">更多>>></span>
          </div>
          <ul>
            <li v-for="item_self in items.item">
              <span class="xiangmu_name"><a :href = "item_self.project_url">{{item_self.project_name}}</a></span>
              <span>{{item_self.project_time}}</span>
            </li>
          </ul>
        </div>
      </div>
      <img class="noNet_img" v-else src="../assets/404.png">
    </div>
  </div>
</template>

<script>
  import Loading from '@/components/loading'

  export default {
    components: {
      Loading,
    },
    data() {
      return {
        data:[
          {type:'独家vip项目',msg:'vip',item:[]},
          {type:'审批项目',msg:'shenpi',item: []},
          {type:'拟在建项目',msg:'nizaijian',item: []},
          {type:'ppp项目',msg:'ppp',item:[]},
        ],
        isConnected: false,
        isConnecting: true,
    }
  },
    created() {
      this.getData();
    },
    methods: {
      gotoMenu:function(msg){
        this.$router.push('/components/Xiangmu/Xiangmu_' + msg);
      },
      getData:function(){
        var _this= this;
        this.data[0].item = [];
        this.data[1].item = [];
        this.data[2].item = [];
        this.data[3].item = [];
        this.isConnecting = true;
        this.requestData('xiangmu',_this)
      }
    },
    mounted: function (){
      // this.getData();
    }
  }
</script>

<style lang="css">
  span{
    overflow:hidden;
    min-width: 60px;
  }
  .xiangmu_body{
    width:90%;
    height:auto;
    margin:0 auto 0 auto;
    max-height:700px;
  }
  .xiangmu_body ul{
    height:90%;
  }
  .xiangmu_body li{
    height:18.8%;
    width:90%;
    margin:0 auto 0;
    border-bottom: 1px solid #f7f7f7;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .xiangmu_body_items{
    width:100%;
    height:600px;
  }
  .xiangmu_body_item{
    width:44%;
    height:50%;
    background-color: white;
    float:left;
    margin:0 3% 3%;
  }
  .xiangmu_body_item_head{
    display:flex;
    justify-content: space-between;
    height:7%;
    padding:10px;
    background-color: #c9c9c9;
  }

  .menu_right_head{
    height: 4%;
    width:90%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:2% auto 0;
  }
  .head span{
    padding:5px;
  }
  .xiangmu_name{
    cursor: pointer;
    max-height:45px;
  }
  .xiangmu_name a:hover{
    color: darkgray;
  }
  .xiangmu_name a{
    color:black;
    display:block;
    text-decoration: none;
    text-overflow: ellipsis;
    max-height:45px;
    text-align:left;
    max-width:400px;
    overflow:hidden;
    white-space: nowrap;
  }
</style>
