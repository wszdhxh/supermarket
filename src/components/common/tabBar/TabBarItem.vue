<!--  -->
<template>
  <div class="tab-bar-item" @click="linkClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>
    <div :style="activeColor">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#ff5777'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeColor() {
        return this.isActive ? { color: this.color } : {}
      }
    },
    methods: {
      linkClick() {
        this.$router.push(this.link)
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>
