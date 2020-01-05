<template lang="html">
  <div>
    <div class="menu_right_head">
      <span style="float:left">当前位置:项目信息</span>
      <span style="float:right; cursor: pointer;">刷新</span>
    </div>
    <div class="xiangmu_body">
      <div class="xiangmu_body_item">
        <div class="xiangmu_body_item_head">
          <span>独家VIP项目</span>
          <span style="cursor: pointer;">更多>>></span>
        </div>
        <ul>
          <li v-for="(item,i) in shenpi_data" :key="i" :index="item.id">
            <span class="data_name">{{item.item[0]}}</span>
            <span>{{item.item[1]}}</span>
          </li>
        </ul>
      </div>
      <div class="xiangmu_body_item">
        <div class="xiangmu_body_item_head">
          <span>审批项目</span>
          <span style="cursor: pointer;">更多>>></span>
        </div>
        <ul>
          <li v-for="(item,i) in vip_data" :key="i" :index="item.id">
            <span class="data_name">{{item.item[0]}}</span>
            <span>{{item.item[1]}}</span>
          </li>
        </ul>
      </div>
      <div class="xiangmu_body_item" style="clear:left">
        <div class="xiangmu_body_item_head">
          <span>拟在建项目</span>
          <span style="cursor: pointer;">更多>>></span>
        </div>
        <ul>
          <li v-for="(item,i) in nizaijian_data" :key="i" :index="item.id">
            <span class="data_name">{{item.item[0]}}</span>
            <span>{{item.item[1]}}</span>
          </li>
        </ul>
      </div>
      <div class="xiangmu_body_item">
        <div class="xiangmu_body_item_head">
          <span>PPP项目</span>
          <span style="cursor: pointer;">更多>>></span>
        </div>
        <ul>
          <li v-for="(item,i) in ppp_data" :key="i" :index="item.id">
            <span class="data_name">{{item.item[0]}}</span>
            <span>{{item.item[1]}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        vip_data:[
          {id:1,item:['1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111','12-13']},
          {id:2,item:['2222222222','12-13']},
          {id:3,item:['3333333333','12-13']},
          {id:4,item:['4444444444','12-13']},
          {id:5,item:['5555555555','12-13']},
          {id:6,item:['5666555555','12-13']},
        ],
        shenpi_data:[
          {id:1,item:['111审批1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111','12-13']},
          {id:2,item:['2222222222','12-13']},
          {id:3,item:['3333333333','12-13']},
          {id:4,item:['4444444444','12-13']},
          {id:5,item:['5555555555','12-13']},
          {id:6,item:['5666555555','12-13']},
        ],
        nizaijian_data:[
          {id:1,item:['111拟在建111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111','12-13']},
          {id:2,item:['2222222222','12-13']},
          {id:3,item:['3333333333','12-13']},
          {id:4,item:['4444444444','12-13']},
          {id:5,item:['5555555555','12-13']},
          {id:6,item:['5666555555','12-13']},
        ],
        ppp_data:[
          {id:1,item:['111PPP1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111','12-13']},
          {id:2,item:['2222222222','12-13']},
          {id:3,item:['3333333333','12-13']},
          {id:4,item:['4444444444','12-13']},
          {id:5,item:['5555555555','12-13']},
          {id:6,item:['5666555555','12-13']},
        ],
    }
  },
    methods: {
    },
  }
</script>

<style lang="css">
  span{
    overflow:hidden;
    min-width: 60px;
  }
  .xiangmu_body{
    width:90%;
    height:70%;
    margin:0 auto 0 auto;
  }
  .xiangmu_body ul{
    height:93%;
  }
  .xiangmu_body li{
    height:15.5%;
    width:90%;
    margin:0 auto 0;
    border-bottom: 1px solid #f7f7f7;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .xiangmu_body_item{
    width:44%;
    height:52%;
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
  .data_name{
    cursor: pointer;
  }
  .data_name:hover{
    color: darkgray;
  }
</style>
