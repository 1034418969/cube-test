<template>
<cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler">
    <i slot="icon"></i>
  </cube-tab-bar>


</template>

<script>



export default {

  data () {
    return {
      selectedLabelDefault: '首页',
       tabs: [
        {
          label: "首页",
          icon: "iconfont icon-E",
          value:"/Home"
        },
        {
          label: "发现",
          icon: "iconfont icon-iconfontzhizuobiaozhun023103",
          value:"/find"
        },
        {
          label: "订单",
          icon: " iconfont icon-order_icon",
          value:"/order"
        },
        {
          label: "我的",
          icon: "iconfont icon-my",
          value:"/my"
        }
      ]
    }
  },
  methods: {
    clickHandler(value) {
      console.log(value)
      this.$router.push(value)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }



}
</script>

<style lang="less">
.cube-tab-bar{
  z-index: 1;
}
.cube-tab{
  font-size: 16px;  
  i{
    font-size: 20px;
    line-height: 1rem;
  }
}
.cube-tab-bar>.cube-tab_active{
  color: #0089dc;
}
</style>