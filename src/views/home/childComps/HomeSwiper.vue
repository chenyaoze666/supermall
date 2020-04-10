<template>
  <swiper>
      <swiper-item :key="index" v-for="(item,index) in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
// import Swiper from 'components/common/swiper/Swiper';
  // import SwiperItem from 'components/common/swiper/SwiperItem';
  //统一导出的 导入方式
import {Swiper,SwiperItem} from 'components/common/swiper';


  export default {
    name:"HomeSwiper",
    props:{
      banners:{
        type: Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem,
    },
  }
</script>

<style scoped>

</style>