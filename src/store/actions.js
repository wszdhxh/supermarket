import Vue from 'vue'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const item = context.state.cartList.find(item => item.iid === payload.iid)
      if (item) {
        context.commit('addCount', item)

        resolve('当前商品数量加1')
      } else {
        Vue.set(payload, 'count', 1)
        Vue.set(payload, 'checked', true)
        
        context.commit('addToCart', payload)

        resolve('成功添加到购物车')
      }
    })
  }
}
