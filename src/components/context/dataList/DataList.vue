<!--  -->
<template>
  <div class="data-list">
    <data-list-item class="item" v-for="item in dataList" :key="item.title" :item="item">

    </data-list-item>
  </div>
</template>

<script>
  import DataListItem from './DataListItem.vue'
  export default {
    name: "DataList",
    components: {
      DataListItem
    },
    props: {
      dataList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .data-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .data-list .item {
    width: 48%;
  }
</style>
