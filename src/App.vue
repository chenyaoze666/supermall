<template>
  <div id="app">
   <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name:'App',
    data(){
      return{
        message:"你好",
      }
    },
    components:{

    },
  }
</script>

<style>
  @import url("assets/css/base.css");
</style>
