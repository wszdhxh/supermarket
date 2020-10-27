<!--  -->
<template>
  <div class="bottom-bar bottom-height">
    <div class="selector">
      <check-button :is-checked='allSelect' @click.native="allClick"/>
    </div>
    <span class="all-selector">全选</span>
    <span class="submit">合计:￥{{cartTotal}}</span>
    <span class="pay" @click="countClick">去计算({{cartCount}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  export default {
    name: "CartBottomBar",
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      CheckButton
    },
    computed: {
      cartTotal() {
        let total = 0
        for (const item of this.cartList) {
          total += item.count * item.price
        }
        return total.toFixed(2) || 0
      },
      cartCount() {
        let count = 0
        for (const item of this.cartList) {
          if (item.checked) {
            count += item.count
          }
        }
        return count || 0
      },
      allSelect() {
        let flag = false
        if (this.cartList.length) {
          flag = true
          for (const item of this.cartList) {
            if(!item.checked) {
              flag = false
            }
          }
        }
        return flag
      }
    },
    methods: {
      allClick() {
        if (this.allSelect) { //全部选中
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      },
      countClick() {
        if (!this.allSelect) {
          this.$toast.show('购物车为空')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 30px;
    line-height: 30px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    background-color: #f1f1f1;
    box-shadow: 0 -2px 2px rgba(100, 100, 100, .2);
  }

  .bottom-height {
    bottom: 48px;
  }

  .selector {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }

  .all-selector {
    margin-left: 2px;
    font-size: 13px;
  }

  .submit {
    width: 100px;
    flex: 1;
    margin-left: 20px;
    font-size: 14px;
  }

  .pay {
    width: 80px;
    background-color: #f66;
    color: #fff;
    font-size: 13px;
    padding-left: 10px;
  }
</style>
