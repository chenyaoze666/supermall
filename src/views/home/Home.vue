<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="titles"
      @tabClick="tabClick"></tab-control>
    <good-list :goods="showGoods"></good-list>
  </div> 
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodList from "components/content/goods/GoodsList";


  import {getHomeMultidata,getHomeGoods} from "network/home";
  
  export default {
    name:"Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
    },
    data(){
      return{
        //保存数据
        banners: [],
        recommends: [],
        titles:["流行","新款","精选"],
        goods: {//因为每个的当前页数和当前展示都不相同 所以保存为对象
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created(){
      //请求多个数据   异步操作
      this.getHomeMultidata();

      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
   /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      // backClick() {
      //   this.$refs.scroll.scrollTo(0, 0)
      // },
      // contentScroll(position) {
      //   this.isShowBackTop = (-position.y) > 1000
      // },
      // loadMore() {
      //   this.getHomeGoods(this.currentType)
      // },

      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        // 动态获取页数
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // 保存数据
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    /* 实现固定 */
    position: sticky;
    /* 超过指定高度 自动改成 fixed*/
    top: 44px;
    z-index:9;

  }
</style>