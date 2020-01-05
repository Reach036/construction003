<template lang="html">
  <div>
    <div class="menu_right_head">
      <span style="float:left">当前位置:招标信息</span>
      <span style="float:right; cursor: pointer;" >刷新</span>
    </div>
    <div class="zhaobiao_body">
        <table class="zhaobiao_body_item" border="0" style="margin-top:0" cellspacing="0">
          <tr class="zhaobiao_body_item_head">
            <th>项目类型</th>
            <th>项目名称</th>
            <th>项目地区</th>
            <th>项目时间</th>
          </tr>
          <tr v-for="(item,i) in zhaobiao_data.slice((this.currentPage-1)*15,(this.currentPage-1)*15+14)" :key="i" :index="item.id" :class="'cell'+(i%2)">
            <td>{{item.item[0]}}</td>
            <td class="data_name">{{item.item[1]}}</td>
            <td>{{item.item[2]}}</td>
            <td>{{item.item[3]}}</td>
          </tr>
        </table>
    </div>
    <paginator id="tab" v-bind:pageCount="pageCount" @update="togglePage"></paginator>
  </div>

</template>

<script>
  import paginator from '@/components/paginator.vue'
  export default {
    components: {
      paginator,
    },
    data(){
    return {
      zhaobiao_data:[
        {id:1,item:['111111公司','50万','vszsbsb','12-13']},
        {id:2,item:['2222222222','50万','vszsbsb','12-13']},
        {id:3,item:['3333333333','50万','vszsbsb','12-13']},
        {id:4,item:['4444444444','50万','vszsbsb','12-13']},
        {id:5,item:['5555555555','50万','vszsbsb','12-13']},
        {id:6,item:['5555555555','50万','vszsbsb','12-13']},
        {id:7,item:['5555555555','50万','vszsbsb','12-13']},
        {id:8,item:['5555555555','50万','vszsbsb','12-13']},
        {id:9,item:['5555555555','50万','vszsbsb','12-13']},
        {id:10,item:['5555555555','50万','vszsbsb','12-13']},
        {id:11,item:['5555555555','50万','vszsbsb','12-13']},
        {id:12,item:['5555555555','50万','vszsbsb','12-13']},
        {id:13,item:['5555555555','50万','vszsbsb','12-13']},
        {id:13,item:['5555555555','50万','vszsbsb','12-13']},
        {id:13,item:['5555555555','50万','vszsbsb','12-13']},
        {id:13,item:['5555555555','50万','vszsbsb','12-13']},
        {id:13,item:['512555555','50万','vszsbsb','12-13']},
      ],
      pageCount: 1,
      currentPage :1,
      }
    },
    created() {
      this.pageCount =Math.ceil(this.zhaobiao_data.length/12);
    },
    methods: {
      togglePage(val) {
        this.currentPage = val
      },
    }
  }
</script>

<style lang="css">
  .zhaobiao_body{
    width:90%;
    height:auto;
    margin:0 auto 0 auto;
    background-color: white;
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
    padding:10px 0;
    margin:0;
  }
  .cell0{
    background-color: #f2f2f2;
  }
  .data_name{
    cursor: pointer;
  }
  .data_name:hover{
    color: darkgray;
  }
</style>
