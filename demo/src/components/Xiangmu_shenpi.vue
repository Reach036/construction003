<template lang="html">
  <div>
    <div class="menu_right_head">
      <span style="float:left">当前位置:项目信息>审批项目</span>
      <button class="small button" style="float:right; cursor: pointer;"  @click="getData">刷新</button>
    </div>
    <div class="zhaobiao_body">
      <transition  name="fade">
        <loading style="position:absolute;height:700px;width:72%;" v-show="isConnecting" name="fade"></loading>
      </transition>
      <table v-if="isConnected" class="zhaobiao_body_item" border="0" style="margin-top:0" cellspacing="0">
        <tr class="zhaobiao_body_item_head">
          <th>项目类型</th>
          <th>项目名称</th>
          <th>项目地区</th>
          <th>项目时间</th>
        </tr>
        <tr v-for="(item,i) in data.slice((this.currentPage-1)*15,(this.currentPage-1)*15+14)" :key="i"  :class="'cell'+(i%2)">
          <!--<td>{{item.project_type}}</td>-->
          <td>审批项目</td>
          <td class="data_name" style="min-width:450px; text-align:left;"><a :href = "item.project_url">{{item.project_name}}</a></td>
          <td>{{item.project_area}}</td>
          <td>{{item.project_time}}</td>
        </tr>
      </table>
      <img class="noNet_img" v-else src="../assets/404.png">
    </div>
    <paginator v-if="isConnected && !isConnecting" id="tab" v-bind:pageCount="pageCount" @update="togglePage"></paginator>
  </div>

</template>

<script>
  import Vue from 'vue';
  import paginator from '@/components/paginator.vue'
  import VueResource  from '../../node_modules/vue-resource';
  import Loading from '@/components/loading'

  Vue.use(VueResource);

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
        this.requestData('shenpi',_this)
      }
    },
    mounted: function (){
      // this.getData();
    }
  }
</script>

<style lang="css">
  .zhaobiao_body{
    width:90%;
    height:auto;
    margin:0 auto 0 auto;
    background-color: white;
    max-height:700px;
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
  .head span{
    padding:5px;
  }

  .zhaobiao_body_item{
    width:100%;
    height:100%;
    max-height:700px;
    background-color: white;
    margin:3% auto 5px;
  }
  .zhaobiao_body_item_head{
    width:100%;
    height:7%;
    padding:10px;
    background-color: white;
  }
  .zhaobiao_body_item_head th{
    min-width:80px;
    overflow:hidden;
    padding:10px 0;
  }
  .zhaobiao_body_item tr{
    max-height:50px;
    min-height:40px;
  }
  .zhaobiao_body_item td{
    max-width:150px;
    max-height:50px;
    min-height:30px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    padding:10px 0;
    margin:0;
  }
  .cell0{
    background-color: #f2f2f2;
  }
  .data_name{
    cursor: pointer;
  }
  .data_name a:hover{
    color: darkgray;
  }
  .data_name a{
    color:black;
    text-decoration: none;
  }
</style>
