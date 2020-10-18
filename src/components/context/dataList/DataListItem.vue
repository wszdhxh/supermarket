<!--  -->
<template>
  <div class="item" @click="itemDetail">
      <img v-lazy="showImg" alt="" @load="imgLoad">
      <div class="item-info">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
      </div>
  </div>
</template>

<script>
  import Scroll from '@better-scroll/core'
  import { EventBus } from "@/common/event-bus.js"
  export default {
    name: "DataListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImg() {
        return this.item.image ? this.item.image : this.item.show.img
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit("imgLoad");

        // 使用路由判断, 分别发出对应的事件
        // if (this.$route.path.indexOf('/home') !== -1) {
        //   this.$bus.$emit("homeImgLoad");
        // } else if (this.$route.path.indexOf('/detail') !== -1) {
        //   this.$bus.$emit("detailImgLoad")
        // }
      },
      itemDetail() {
        this.$router.push('/detail/' + this.item.iid)
      }
    }
  }
</script>

<style scoped>
  .item {
    padding-bottom: 40px;
    position: relative;
  }

  .item img {
    width: 100%;
    border-radius: 5px;
  }

  .item-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .item-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .item-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .item-info .cfav {
    position: relative;
  }

  .item-info .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
