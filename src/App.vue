<template>
  <div id="app">
    <router-view></router-view>
    <elefooter v-if="$route.meta.isFooter"></elefooter>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less" scoped>
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
