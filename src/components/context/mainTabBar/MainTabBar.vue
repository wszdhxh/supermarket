<!--  -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item link='/home'>
        <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="title">首页</div>
      </tab-bar-item>
      <tab-bar-item link='/category'>
        <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="title">分类</div>
      </tab-bar-item>
      <tab-bar-item link='/shopcart'>
        <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="title">购物车</div>
      </tab-bar-item>
      <tab-bar-item link='/profile'>
        <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabBar/TabBar'
  import TabBarItem from 'components/common/tabBar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  
</style>
