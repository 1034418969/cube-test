<template>
  <div class="main">
    <div class=".shopTypeList">
      <div class="scroll-TypeList" :options="options">
        <ul class="list-wrapper">
          <li
          
            v-for="item in $store.state.shop.shopTypeList"
            class="swipe-item-wrapper"
            :key="item._id"
            @click="$store.dispatch('getTypeIdShop',item._id)"
          >{{item.shopTypeName}}</li>
        </ul>
      </div>
    </div>
<div class="" style="overflow:auto">
<typeShopList></typeShopList>
</div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        scrollX: false
      }
    };
  },
  mounted() {
    this.$store.dispatch("getAllShopType");
  }
};
</script>

<style lang="less" scoped>
.main {
  overflow: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
}
.shopTypeList{
  overflow: hidden;
  height: 38px;
}
.scroll-TypeList {
  overflow: auto;
}

.list-wrapper {
  line-height: 40px;
  display: inline-block;
  white-space: nowrap;
  background: #0085ff;
}

.swipe-item-wrapper {
  width: 2.5rem;
  text-align: center;
  // padding: 0 10px;
  display: inline-block;
  font-size: 14px;
  border: none;
}
</style>