<!--  -->
<template>
  <div class="recommend">
    <div v-for="item of recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding-bottom: 25px;
    border-bottom: 10px solid #f2f2f2;
    margin-top: 8px;
  }
  .recommend-item {
    font-size: 12px;
    flex: 1;
  }
  .recommend-item img{
    width: 68px;
    height: 68px;
    margin-bottom: 5px;
  }
</style>
