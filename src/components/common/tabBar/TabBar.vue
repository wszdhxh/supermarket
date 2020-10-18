<!--  -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  }
</script>

<style scoped>
  #tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    background-color: #f2f2f2;
    text-align: center;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    z-index: 1;
  }
</style>
