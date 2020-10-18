<!--  -->
<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left">
        <img src="~assets/img/common/back.svg" alt="" class="back" @click="backClick">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) of titles" 
             :key="index" 
             class="title-item"
             @click="itemClick(index)"
             :class="{active: index === currentIndex}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('navClick', index)
      },
      backClick() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
    position: relative;
    z-index: 10;
  }

  .title {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-tint)
  }

  .back {
    margin-top: 10px;
  }
</style>
