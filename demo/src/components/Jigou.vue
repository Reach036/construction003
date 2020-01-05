<template lang="html">
  <div>
    <div class="menu_right_head">
      <span style="float:left">当前位置:项目信息</span>
      <span style="float:right; cursor: pointer;">刷新</span>
    </div>

      <div class="jigou_body">
        <!--可滚动-->
        <scroll>
          <table class="jigou_body_item" border="0" style="margin-top:0">
            <tr class="jigou_body_item_head">
              <th>供应商名称</th>
              <th>中标金额</th>
              <th>中标项目</th>
              <th>项目时间</th>
            </tr>
            <tr v-for="(item,i) in jigou_data" :key="i" :index="item.id">
              <td>{{item.item[0]}}</td>
              <td>{{item.item[1]}}</td>
              <td class="data_name">{{item.item[2]}}</td>
              <td>{{item.item[3]}}</td>
            </tr>
          </table>
          <table class="jigou_body_item" border="0">
            <tr class="jigou_body_item_head">
              <th>供应商名称</th>
              <th>中标金额</th>
              <th class="data_name">中标项目</th>
              <th>项目时间</th>
            </tr>
            <tr v-for="(item,i) in jigou_data" :key="i" :index="item.id">
              <td>{{item.item[0]}}</td>
              <td>{{item.item[1]}}</td>
              <td class="data_name">{{item.item[2]}}</td>
              <td>{{item.item[3]}}</td>
            </tr>
          </table>
          <table class="jigou_body_item" border="0">
            <tr class="jigou_body_item_head">
              <th>供应商名称</th>
              <th>中标金额</th>
              <th class="data_name">中标项目</th>
              <th>项目时间</th>
            </tr>
            <tr v-for="(item,i) in jigou_data" :key="i" :index="item.id">
              <td>{{item.item[0]}}</td>
              <td>{{item.item[1]}}</td>
              <td class="data_name">{{item.item[2]}}</td>
              <td>{{item.item[3]}}</td>
            </tr>
          </table>
          <table class="jigou_body_item" border="0">
            <tr class="jigou_body_item_head">
              <th>供应商名称</th>
              <th>中标金额</th>
              <th class="data_name">中标项目</th>
              <th>项目时间</th>
            </tr>
            <tr v-for="(item,i) in jigou_data" :key="i" :index="item.id">
              <td>{{item.item[0]}}</td>
              <td>{{item.item[1]}}</td>
              <td class="data_name">{{item.item[2]}}</td>
              <td>{{item.item[3]}}</td>
            </tr>
          </table>
        </scroll>
      </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        jigou_data:[
          {id:1,item:['111111公司','50万','vszsbsb','12-13']},
          {id:2,item:['2222222222','50万','vszsbsb','12-13']},
          {id:3,item:['3333333333','50万','vszsbsb','12-13']},
          {id:4,item:['4444444444','50万','vszsbsb','12-13']},
          {id:5,item:['5555555555','50万','vszsbsb','12-13']},
          {id:6,item:['5666555555','56万','vszsbsb','12-13']},
        ],
      }
    },
    methods: {
    },
  }
</script>

<style lang="css">
  .jigou_body{
    width:90%;
    height:75%;
    margin:0 auto 0 auto;
    overflow: auto;
  }
  .jigou_body_item{
    width:100%;
    height:46%;
    background-color: white;
    margin:3% auto 5px;
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
    max-width:150px;
    max-height:50px;
    overflow:hidden;
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
  .data_name{
    cursor: pointer;
  }
  .data_name:hover{
    color: darkgray;
  }
</style>
