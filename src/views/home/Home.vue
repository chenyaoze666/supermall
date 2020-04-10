<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";

  import {getHomeMultidata} from "network/home";
  
  export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
    },
    data(){
      return{
        //保存数据
        banners: [],
        recommends: [],
      }
    },
    created(){
      //请求多个数据   异步操作
      getHomeMultidata().then(res => {
        console.log(res.data.banner.list)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>