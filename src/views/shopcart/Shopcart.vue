<!--  -->
<template>
  <div class="cart">
    <cart-nav-bar :length='cartLength'/>
    <scroll class="wrapper">
      <cart-list :cart-list='cartList'/>
    </scroll>
    <cart-bottom-bar :cart-list='cartList'/>
  </div>
</template>

<script>
  import CartNavBar from './childCpn/CartNavBar'
  import CartList from './childCpn/CartList'
  import CartBottomBar from './childCpn/CartBottomBar'

  import Scroll from 'components/common/scroll/Scroll'

  import { mapGetters } from 'vuex'
  export default {
    name: "Shopcart",
    components: {
      CartNavBar,
      CartList,
      CartBottomBar,
      Scroll
    },
    computed: {
      ...mapGetters([
        'cartList',
        'cartLength'
      ])
    }
  }
</script>

<style scoped>
  .cart {
    height: calc(100vh - 49px);
  }

  .wrapper {
    margin-top: 40px;
    height: calc(100% - 40px - 30px);
  }
</style>
