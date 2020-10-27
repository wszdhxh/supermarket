<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar class="tab-bar" />
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import MainTabBar from "components/context/mainTabBar/MainTabBar";
import Icon from "components/context/Icon/Icon.vue";
import SvgIcon from "components/context/Icon/svg.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
    Icon,
    SvgIcon,
  },
};
</script>

<style>
.tab-bar {
  z-index: 9;
}
@import "assets/css/base.css";

#app {
  position: relative;
}
</style>
