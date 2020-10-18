<!--  -->
<template>
  <div class="detail">
    <detail-nav-bar @navClick='navClick' ref="nav"/>
    <scroll class="wrapper"
      :pullUpLoad="true"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3">
      <detail-swiper :banner='banner'/>
      <detail-base-info :goods='itemData'/>
      <detail-shop-info :shop='shopInfo' />
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'/>
      <detail-param-info :param-info='paramInfo' ref="param"/>
      <detail-comment-info :comment-info='comments' ref="comment"/>
      <data-list :dataList='recommend' ref="recommend"/>
    </scroll>
    <detail-bottom-bar class="bottom-bar" :cart='cart'/>
  </div>
</template>

<script>
  import DetailNavBar from './childCompts/DetailNavBar'
  import DetailSwiper from './childCompts/DetailSwiper'
  import DetailBaseInfo from './childCompts/DetailBaseInfo'
  import DetailShopInfo from './childCompts/DetailShopInfo'
  import DetailGoodsInfo from './childCompts/DetailGoodsInfo'
  import DetailParamInfo from './childCompts/DetailParamInfo'
  import DetailCommentInfo from './childCompts/DetailCommentInfo'
  import DetailBottomBar from './childCompts/DetailBottomBar'

  import {getDetail, ItemData, Shop, GoodsParam, getRecommend} from 'network/detail'
  import {imgLoadMixin} from 'common/mixin'
  import {debounce} from 'common/debounce'

  import Scroll from 'components/common/scroll/Scroll'
  import DataList from 'components/context/dataList/DataList'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DataList,
      DetailBottomBar,
      Scroll
    },
    data() {
      return {
        iid: null,
        banner: [],
        itemData: {},
        shopInfo: {},
        detailInfo: {},
        paramInfo: {},
        comments: {},
        recommend: [],
        navTop: [],
        getNavTop: null,
        cart: {}
      }
    },
    created() {
      this.iid = this.$route.params.iid
      
      getDetail(this.iid).then(res => {
        console.log(res)
        const data = res.result
        this.banner = data.itemInfo.topImages
        this.itemData = new ItemData(data.itemInfo, data.columns, data.shopInfo)
        this.shopInfo = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        this.comments = data.rate.list[0]

        //添加购物车信息
        this.cart.title = data.itemInfo.title
        this.cart.price = data.itemInfo.lowNowPrice
        this.cart.desc = data.itemInfo.desc
        this.cart.img = data.itemInfo.topImages[0]
        this.cart.iid = this.iid

        //值不对, 图片没有计算在内
        /* this.$nextTick(() => {
          this.navTop = []
          this.navTop.push(0)
          this.navTop.push(this.$refs.param.$el.offsetTop)
          this.navTop.push(this.$refs.comment.$el.offsetTop)
          this.navTop.push(this.$refs.recommend.$el.offsetTop)
          console.log(this.navTop)
        }) */

      })
        this.getNavTop = () => {
          this.navTop = []
          this.navTop.push(0)
          this.navTop.push(this.$refs.param.$el.offsetTop)
          this.navTop.push(this.$refs.comment.$el.offsetTop)
          this.navTop.push(this.$refs.recommend.$el.offsetTop)
          // console.log(this.navTop)
        }

      getRecommend().then(res => {
        // console.log(res)
        this.recommend = res.data.list
      })
    },
    mixins: [imgLoadMixin],
    mounted() {
      // 将使用混入

      // 根据路由的判断
      // this.$bus.$on('detailImgLoad', () => {
      //   debounce(this.$refs.scroll.refresh(), 50)
      // })
    },
    destroyed() {
      this.$bus.$off('imgLoad', this.imgLoad)
    },
    updated() {
    },
    methods: {
      imageLoad() {
        debounce(this.$refs.scroll.refresh())
        debounce(this.getNavTop())
      },
      navClick(index) {
        this.$refs.scroll.scrollTo(0, -this.navTop[index], 200)
      },
      contentScroll(position) {
        // console.log(position.y)
        const length = this.navTop.length
        const positionY = -position.y
        // 方案一: 通过条件判断
        for (let i = 0; i < length; i++) {
          if (this.$refs.nav.currentIndex !== i && ((i !== length - 1 && (positionY > this.navTop[i] && positionY < this.navTop[i + 1])) || (i === length - 1 && positionY > this.navTop[i]))) {
            console.log(i)
            this.$refs.nav.currentIndex = i
          }
        }

        // 方案二: 增加一个极大值, 将数组元素变为五个
      }
    },
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    overflow: hidden;
  }

  .wrapper {
    height: calc(100% - 40px - 58px);
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .bottom-bar {
    position: relative;
    z-index: 9;
  }
</style>
