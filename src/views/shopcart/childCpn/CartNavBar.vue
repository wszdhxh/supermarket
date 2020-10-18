<!--  -->
<template>
  <div class="nav-bar">
    <nav-bar>
      <div slot="center">
        购物车({{length}})
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: "CartNavBar",
    components: {
      NavBar
    },
    props: {
      length: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
