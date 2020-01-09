<template lang="html">
  <div>
    <div class="menu_right_head">
      <span style="float:left">当前位置:项目信息</span>
      <button class="small button" style="float:right; cursor: pointer;"  @click="getData">刷新</button>
    </div>
      <div class="jigou_body">
        <transition name="fade">
          <loading style="position:absolute;height:700px;width:72%;" v-show="isConnecting" name="fade"></loading>
        </transition>
        <div v-if="isConnected" class="jigou_body_items">
          <table v-for="items in data"  class="jigou_body_item" border="0" style="margin-top:0">
            <tr class="jigou_body_item_head">
              <th>{{items.type}}</th>
              <th>{{items.second_title}}</th>
              <th>中标项目</th>
              <th>项目时间</th>
            </tr>
            <tr v-for="item_self in items.item">
              <td style="max-width:60px;padding:0px 20px">{{item_self.name}}</td>
              <td style="max-width:40px;">{{item_self.cash_or_area}}</td>
              <td class="jigou_name"><a :href = "item_self.zixun_url">{{item_self.project_name}}</a></td>
              <td style="max-width:40px;">{{item_self.zixun_time}}</td>
            </tr>
          </table>
        </div>
        <img class="noNet_img" v-else src="../assets/404.png">
      </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueResource  from '../../node_modules/vue-resource';
  import Loading from '@/components/loading'

  Vue.use(VueResource);

  export default {
    components: {
      Loading,
    },
    data() {
      return {
        data:[
          {type:'供应商名称', second_title:'中标金额', item:[]},
          {type:'业主名称',second_title:'招标金额',item: []},
          {type:'机构名称',second_title:'所属地区',item: []},
          {type:'设计院名称',second_title:'所属行业',item: []},
        ],
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
        this.data[0].item = [];
        this.data[1].item = [];
        this.data[2].item = [];
        this.data[3].item = [];
        this.isConnecting = true;
        this.requestData('jigou',_this)
      }
    },
    mounted: function (){
      // this.getData();
    }
  }
</script>

<style lang="css">
  .jigou_body{
    width:90%;
    height:75%;
    margin:0 auto 0 auto;
    overflow: auto;
  }
  .jigou_body_items{
    width:100%;
    max-height:700px;
  }
  .jigou_body_item{
    width:100%;
    height:46%;
    background-color: white;
    margin:5% auto 15px;
  }
  .jigou_body_item_head{
    width:100%;
    height:7%;
    padding:10px;
    background-color: white;
  }
  .jigou_body_item_head th{
    min-width:80px;
    overflow:hidden;
  }
  .jigou_body_item td{
    max-height:50px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    padding: 7px 0;
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
  .jigou_body ul{
    height:93%;
  }
  .jigou_body li{
    height:15.5%;
    width:90%;
    margin:0 auto 0;
    border-bottom: 1px solid #f7f7f7;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .jigou_name{
    cursor: pointer;
    max-width:200px;
  }
  .jigou_name a:hover{
    color: darkgray;
  }
  .jigou_name a{
    color:black;
    text-decoration: none;
  }
</style>
