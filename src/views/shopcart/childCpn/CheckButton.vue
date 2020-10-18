<!--  -->
<template>
  <div class="check-button" :class="{active: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button {
    border: 2px solid #ccc;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .check-button img {
    display: block;
  }

  .active {
    border-color: var(--color-tint);
    background-color: var(--color-tint);
  }
</style>
