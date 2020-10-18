<!--  -->
<template>
  <div class="tab-ctrl">
    <div v-for="(item, index) of type" :key="item" @click="toActive(index)" :class="{active: index == currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabCtrl",
    props: {
      type: {
        type: Array,
        default() {
          return ['流行', '新款', '精选']
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      toActive(index) {
        this.currentIndex = index
        this.$emit('changeTab', index)
      }

    },
  }
</script>

<style scoped>
  .tab-ctrl {
    display: flex;
    height: 35px;
    line-height: 35px;
    font-size: 13px;
    text-align: center;
    background-color: #fff;
  }
  .tab-ctrl div {
    flex: 1;
  }
  .tab-ctrl span {
    padding: 5px;
  }
  .active span{
    color: var(--color-tint);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
