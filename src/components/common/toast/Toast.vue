<!--  -->
<template>
  <div class="toast" v-show="isShow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message='默认文字', duration='2000') {
        console.log('这是toast插件的内容')
        this.message = message
        this.isShow = true

        setTimeout(() => {
          this.message = ''
          this.isShow = false
        }, duration);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    z-index: 999;
    padding: 8px 10px;
    border-radius: 4px;
  }
</style>
