import {debounce} from 'common/debounce'

export const imgLoadMixin = {
  data() {
    return {
      imgLoad: null
    }
  },
  mounted() {
    this.imgLoad = () => {
      debounce(this.$refs.scroll.refresh(), 50)
    }
    this.$bus.$on('imgLoad', this.imgLoad)
    // console.log('这里是混入')
  }
}
