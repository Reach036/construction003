<template lang="html">
  <div>
    <div class="menu_right_head">
      <span style="float:left">当前位置:咨询信息</span>
      <span style="float:right; cursor: pointer;">刷新</span>
    </div>
    <div class="zixun_body">
      <div v-for="(item,i) in zixun_data.slice((this.currentPage-1)*4,(this.currentPage-1)*4+4)" :key="i" :index="item.id" class="zixun_body_item">
        <div class="zixun_head">{{item.item[0]}}</div>
        <div class="zixun_info">{{item.item[1]}}</div>
        <div class="zixun_time">发布时间:{{item.item[2]}}</div>
      </div>
    </div>
    <paginator id="tab" v-bind:pageCount="pageCount" @update="togglePage"></paginator>
  </div>

</template>

<script>
  import paginator from '@/components/paginator.vue'
  export default {
    components: {
      paginator
    },
    data(){
      return {
        zixun_data:[
          {id:1,item:['111111公司','50万','12-13']},
          {id:2,item:['2222222222','50万','12-13']},
          {id:3,item:['3333333333','50万','12-13']},
          {id:4,item:['4444444444','50万','12-13']},
          {id:5,item:['5555555555','50万','12-13']},
          {id:6,item:['5555555555','50万','12-13']},
          {id:7,item:['5555555555','50万','12-13']},
          {id:8,item:['5555555555','50万','12-13']},
          {id:9,item:['5555555555','50万','12-13']},
          {id:10,item:['5555555555','50万','12-13']},
          {id:11,item:['5555555555','50万','12-13']},
          {id:12,item:['5555555555','50万','12-13']},
          {id:13,item:['5555555555','50万','12-13']},
          {id:13,item:['5555555555','50万','12-13']},
          {id:13,item:['5555555555','50万','12-13']},
          {id:13,item:['5555555555','50万','12-13']},
          {id:13,item:['512555555','50万','12-13']},
        ],
        pageCount: 1,
        currentPage :1,
      }
    },
    created() {
      this.pageCount =Math.ceil(this.zixun_data.length/4);
    },
    methods: {
      togglePage(val) {
        this.currentPage = val
      },
    }
  }
</script>

<style lang="css">
  .zixun_body{
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
  .zixun_body_item{
    height: 130px;
    padding:10px 0;
    border: solid 1px #efefef;
    margin:10px 0;
  }
  .zixun_body_item:hover{
    border: solid 1px #4078c0;
  }
  .zixun_body_item:hover .zixun_head{
    color: #4078c0;
  }
  .zixun_head{
    font-size: 18px;
    line-height: 32px;
    font-weight: bold;
    text-align:left;
    padding-left: 20px;
  }
  .zixun_info{
    color: #999;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align:left;
    padding: 10px 25px 0 25px;
    min-height: 40%;
  }
  .zixun_time{
    text-align:right;
    padding: 10px 20px 10px 0;
    color: #999;
  }
</style>
