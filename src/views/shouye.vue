<template>
  <div>
    <mt-header title :fixed="false">
      <div slot="left" class="header-address" v-show="address">
        <i class="el-icon-location"></i>
        <span>地址</span>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <mt-search :value.sync="value" slot="left"></mt-search>
    </mt-header>
    <div class="main">
      <p>aaaa</p>
      <p>aaaa</p>
      <p>aaaa</p>
      <p>aaaa</p>
      <p>aaaa</p>
      <p>aaaa</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "shouye",
  data() {
    return {
      address: true,
      value: ""
    };
  },
  methods: {}
};
</script>

<style lang="less">
#app .mint-header {
  align-items: flex-start;
  height: 1rem;
  .header-address {
    padding: 20px 0;
    font-size: 18px;
    font-weight: 700;
    span {
      padding: 0 10px;
    }
    .el-icon-caret-bottom {
      font-size: 12px;
    }
  }
}
#app .mint-search {
  height: 0.5rem;
  margin-top: -0.1rem;
  .mint-searchbar {
    background-color: #26a2ff;
  }
  .mint-searchbar-core {
    width: 3.4rem;
  }
}
.main {
  height: 2rem;
  overflow: scroll;
}
</style>