<template>
  <div class="main">
    <div id="remm"></div>
    <cube-sticky
      :pos="scrollY"
      :check-top="checkTop"
      fixed-show-ani="sticky-fixed-show"
      @diff-change="diffChange"
    >
      <cube-scroll :scroll-events="scrollEvents" @scroll="scrollHandler">
        <cube-sticky-ele>
          <!-- 头部初始内容 -->
          <header class="header">
            <div class="tou">
              <p>北京南站</p>
              <cube-input v-model="value" :clearable="clearable"></cube-input>
            </div>
          </header>
        </cube-sticky-ele>
        <!-- 店铺类型 -->
        <cube-slide
          ref="slide"
          :auto-play="false"
          :data="$store.state.home.slideList"
          @change="changePage"
        >
          <cube-slide-item
            v-for="(item, index) in $store.state.home.slideList"
            :key="index"
            @click.native="clickHandler(item, index)"
          >
            <a :href="item.url" v-for="key in item">
              <img
                :src="'http://127.0.0.1/'+key.shopTypePic"
                @click="$router.push('/shopList/'+key._id)"
              >
              <span>{{key.shopTypeName}}</span>
            </a>
          </cube-slide-item>
        </cube-slide>
        <!-- 轮播图 -->
        <cube-slide :data="items" class="lbt"/>
        <!-- 商品列表 -->
        <typeShopList></typeShopList>
      </cube-scroll>
      <!-- 页面发生滚动时，头部内容 -->
      <ul class="sticky-header" slot="fixed" ref="stickyHeader">
        <!-- <input type="text"> -->
      </ul>
    </cube-sticky>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollEvents: ["scroll"],
      scrollY: -3,
      checkTop: true,
      items: [
        {
          url: "http://www.didichuxing.com/",
          image: "http://127.0.0.1/955bdd098effd615d144441084118jpeg.jpg"
        },
        {
          url: "http://www.didichuxing.com/",
          image: "http://127.0.0.1/12044370746e4b6bf70a985967948jpeg.jpg"
        },
        {
          url: "http://www.didichuxing.com/",
          image: "http://127.0.0.1/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpg"
        }
      ],
      value: "",
      clearable: {
        visible: true,
        blurHidden: true
      },
      options:""
    };
  },
  methods: {
    scrollHandler({ y }) {
      this.scrollY = -y;
    },
    diffChange() {
      // let opacity = 0
      // if (height) {
      //   opacity = diff / height
      // }
      // this.$refs.stickyHeader.style.opacity = opacity
    },
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    },
      onItemClick(item) {
      console.log('click item:', item)
    },
    onBtnClick(btn, index){

    }
  },
  mounted() {
    this.$store.dispatch("getShopTypeNum", 20);
  }
};
</script>

<style lang="less" scoped>


.main {
  overflow: auto;
  flex: 1;
}
header {
  height: 2.667rem;
  background: #0085ff;
  z-index: 3;
}
.tou {
  padding: 4vw 4vw 0;
  p {
    padding-bottom: 2vw;
  }
  .cube-input {
    width: 90vw;
    margin: 0 auto;
    // padding:0 2vw;
  }
}
.sticky-fixed-show-enter,
.sticky-fixed-show-leave-active {
  transform: translate(0, -100%);
}

.sticky-fixed-show-enter-active,
.sticky-fixed-show-leave-active {
  transition: all 0.5s ease-in-out;
}
.cube-slide-item > a {
  display: inline-block;
  text-align: center;
  float: left;
  img {
    width: 17vw;
    height: 20vw;
    margin: 0 1.5vw;
  }
  span {
    font-size: 12px;
  }
}
.lbt a > img {
  width: 5vw;
  height: 20vw;
}
</style>