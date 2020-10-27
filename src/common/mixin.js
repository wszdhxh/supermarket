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

import {POP, NEW, SELL} from "./const";

export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}

