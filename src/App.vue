<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar class="tab-bar"/>
  </div>
</template>

<script>
  
  import MainTabBar from 'components/context/mainTabBar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  .tab-bar {
    z-index: 9;
  }
  @import 'assets/css/base.css'
</style>
