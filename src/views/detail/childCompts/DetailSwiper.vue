<!--  -->
<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in banner" :key="index">
        <img :src="item" alt="" class="detail-img">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
  }
</style>
