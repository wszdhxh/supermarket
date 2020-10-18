<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
  }
</script>

<style scoped>
  .nav-bar {
    height: 40px;
    line-height: 40px;
    display: flex;
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
    z-index: 10;
  }
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
