<template lang="html">
  <paginator :pageCount="pageCount" :initPage="initPage" @togglePage="togglePage($event)"></paginator>
</template>

<script>
  import vuePaginator from '../../node_modules/vue-paginator-simple/dist/vue-paginator-simple';

  export default {
    data(){
      return {
        initPage: 1, //初始页[optional],可为null
      };
    },
    components:{
      'paginator': vuePaginator,
    },
   props:['pageCount'],  //总页数
    methods:{
      togglePage(indexPage){
        console.log(indexPage);
        this.$emit('update', indexPage);
      },
    }
  }
</script>

<style lang="css">
  @import '../../node_modules/vue-paginator-simple/dist/vue-paginator-simple.css';
</style>
