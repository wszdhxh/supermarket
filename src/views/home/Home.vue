<!--  -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <slot slot="center">
        <span>购物街</span>
      </slot>
    </nav-bar>
    <tab-ctrl class="tab-ctrl" @changeTab="changeTab" ref="tabCtrl1" v-show="isShowOffsetTop"/>
    <scroll class="wrapper"
            :probe-type="3"
            @scroll="scrollPosition"
            ref="scroll"
            :pullUpLoad="true"
            @pullingUp="pullUpLoad">
      <main-swiper :banners="banners" @swiperImgLoad='swiperImgLoad'/>
      <recommend :recommends="recommends"/>
      <feature/>
      <tab-ctrl class="tab-ctrl" @changeTab="changeTab" ref="tabCtrl2"/>
      <data-list :dataList="getType"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowTop"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabCtrl from 'components/context/tabCtrl/TabCtrl'
  import DataList from 'components/context/dataList/DataList'
  import BackTop from 'components/context/backTop/BackTop'

  import MainSwiper from './homeCpn/MainSwiper'
  import Recommend from './homeCpn/Recommend'
  import Feature from './homeCpn/Feature'

  import {getHomeMultiData, getHomeDataList} from '@/network/home'
  import {debounce} from 'common/debounce'
  import {imgLoadMixin} from 'common/mixin'

  export default {
    components: {
      NavBar,
      MainSwiper,
      Recommend,
      Feature,
      TabCtrl,
      DataList,
      Scroll,
      BackTop
    },
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        dataList: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          },
        },
        currentType: 'pop',
        isShowTop: false,
        tabCtrlOffsetTop: 0,
        isShowOffsetTop: false,
        saveY: 0
      }
    },
    computed: {
      getType() {
        return this.dataList[this.currentType].list
      }
    },
    created() {
      this.getHomeMultiData()

      this.getData('pop')
      this.getData('new')
      this.getData('sell')
    },
    mixins: [imgLoadMixin],
    mounted() {
      // 将使用混入

      // 根据路由的判断
      // this.$bus.$on('homeImgLoad', () => {
      //   debounce(this.$refs.scroll.refresh(), 50)
      // })
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 获取离开时滚动位置
      this.saveY = this.$refs.scroll.getY()

      //离开时关闭事件总线
      this.$bus.$off('imgLoad', this.imgLoad)

      //关闭上拉加载
      // this.$refs.scroll.scroll.closePullUp()
    },
    methods: {
      swiperImgLoad() {
        this.tabCtrlOffsetTop = this.$refs.tabCtrl2.$el.offsetTop
      },
      pullUpLoad() {
        this.getData(this.currentType)
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      scrollPosition(position) {
        this.isShowTop = (-position.y) > 1000
        this.isShowOffsetTop = (-position.y) > this.tabCtrlOffsetTop
      },
      changeTab(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1: 
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabCtrl1.currentIndex = index
        this.$refs.tabCtrl2.currentIndex = index
      },

      //以下为网络请求
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },

      getData(type) {
        const page = this.dataList[type].page + 1

        getHomeDataList(type, page).then(res => {
          this.dataList[type].page += 1
          this.dataList[type].list.push(...res.data.list)

          this.$refs.scroll.finished()
        })
      }
    },
  }
</script>

<style scoped>
  .home {
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
  }

  .tab-ctrl {
    position: sticky;
    top: 40px;
    z-index: 9;
  }

  .wrapper {
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
