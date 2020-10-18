import Swipper from './Swipper.vue'

const obj = {}

obj.install = function (Vue) {
  const PlugConstructor = Vue.extend(Swipper)
  const plug = new PlugConstructor()

  plug.$mount(document.createElement('div'))
  document.body.appendChild(plug.$el)

  Vue.prototype.$swipper = plug
}

export default obj
