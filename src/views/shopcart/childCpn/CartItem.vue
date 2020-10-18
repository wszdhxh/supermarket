<!--  -->
<template>
  <div class="cart-item">
    <div class="cart-selector">
      <check-button @click.native="buttonClick" :is-checked='item.checked'/>
    </div>
    <div class="cart-img">
      <img :src="item.img" alt="">
    </div>
    <div class="cart-info">
      <div class="cart-title">
        {{item.title}}
      </div>
      <div class="cart-desc">
        {{item.desc}}
      </div>
      <div class="cart-bottom">
        <div class="cart-price left">
          {{'￥' + item.price}}
        </div>
        <div class="cart-count right">
          {{'×' + item.count}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  export default {
    name: "CartItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      buttonClick() {
        this.item.checked = !this.item.checked
      }
    }
  }
</script>

<style scoped>
  .cart-item {
    height: 110px;
    display: flex;
    padding: 5px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
  }

  .cart-selector {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-img {
    padding: 5px;
  }

  .cart-img img {
    width: 70px;
    height: 90px;
    display: block;
    border-radius: 5px;
  }

  .cart-info {
    overflow: hidden;
    padding: 5px 10px;
    position: relative;
  }

  .cart-title {
    height: 16px;
    line-height: 16px;
    font-size: 16px;
  }

  .cart-desc {
    height: 13px;
    line-height: 13px;
    font-size: 13px;
    margin-top: 10px;
  }

  .cart-title, .cart-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .cart-bottom {
    position: absolute;
    font-size: 14px;
    right: 10px;
    left: 10px;
    bottom: 5px;
  }

  .cart-price {
    color: orangered;
  }
</style>
