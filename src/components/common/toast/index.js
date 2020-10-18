import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
  const PlugConstructor = Vue.extend(Toast)
  const plug = new PlugConstructor()

  plug.$mount(document.createElement('div'))
  document.body.appendChild(plug.$el)

  Vue.prototype.$toast = plug
}

export default obj
