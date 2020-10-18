<!--  -->
<template>
  <div>
    <cart-item v-for="item in cartList" :item='item' :key="item.iid"/>
  </div>
</template>

<script>
  import CartItem from './CartItem'

  export default {
    name: "CartList",
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      CartItem
    }
  }
</script>

<style scoped>
  
</style>
