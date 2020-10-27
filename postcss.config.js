module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375,  //视窗宽度
      viewportHeight: 667,
      unitPrecision: 5, //保留小数
      viewportUnit: 'vw', //指定需要转换成的单位
      mediaQuary: false, // 是否允许在媒体查询中转换px
      minPixelValue: 1, //小于1px不转换
      exclude: [/TabBar/],  //不转化的文件, 数组中的元素要用正则
			selectorBlackList: [/^\.cart$/, /^\.bottom-height$/] //不转化的类
    }
  }
}
