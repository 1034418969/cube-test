<template>
  <div class="scroll-list-wrap">
    <ul>
              <li class="swipe-item-wrapper" v-for="item in $store.state.shop.typeIdShop" :key="item._id">

              <div  class="item-inner">
                <div class="icon">
                  <img width="60" height="60" :src="'http://127.0.0.1/'+item.shopPic">
                </div>
                <div class="text">
                  <h2 class="item-name" >店铺名：{{item.shopName}} <i class="iconfont">&#xe621;</i></h2>
                  <p class="item-desc" >店铺类型:{{item.shopTypeName}}</p>
                </div>
                <hr>
              </div>
          </li>
          </ul>
</div>
    
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      swipeData: [
        {
          item: {
            id: "3646653877",
            name: "还不是因为你长得不好看",
            desc: "伤感：歌词再狠，也抵不过现实伤人",
            imgurl:
              "http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1"
          },
          btns: [
            {
              action: "clear",
              text: "不再关注",
              color: "#c8c7cd"
            },
            {
              action: "delete",
              text: "删除",
              color: "#ff3a32"
            }
          ]
        },
        {
          item: {
            id: "1789676645",
            name: "秋水浮萍任飘渺",
            desc: "『武侠配乐』快意恩仇江湖情",
            imgurl:
              "http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1"
          },
          btns: [
            {
              action: "clear",
              text: "不再关注",
              color: "#c8c7cd"
            },
            {
              action: "delete",
              text: "删除",
              color: "#ff3a32"
            }
          ]
        },
        {
          item: {
            id: "3649034125",
            name: "念葳蕊",
            desc: "江海迦：热恋后哼一首歌为自己悲悯的歌",
            imgurl:
              "http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1"
          },
          btns: [
            {
              action: "clear",
              text: "不再关注",
              color: "#c8c7cd"
            },
            {
              action: "delete",
              text: "删除",
              color: "#ff3a32"
            }
          ]
        }
      ],
      shopList:[],
    };
  },
  methods: {
    
  },mounted() {
     this.$store.dispatch("getTypeIdShop",this.$route.params.id)
  },
  // computed: {
  //   test(){
  //     var ss = this.$store.state.shop.typeIdShop;
  //     return ss;
  //   }
  // },
  
};
</script>

<style lang="less" scoped>

.swipe-item-wrapper{
    height: 2rem;
}
.icon{
    float: left;
    img{
        width: 1.8rem;
    }
}
.text{
    float:left;
    h2,p{
        font-size:18px;
    }
}

.ss .scroll-list-wrap{
height: 350px
  
}
  
// .ss  .cube-scroll-content{
//     background: red;
//     display: inline-block;
//   }
    
.ss  .list-wrapper{
    padding: 0 10px;
    line-height: 60px;
    // width: 20rem;
    white-space: nowrap
  }
    
.ss .list-item{
display:inline-block;
  }
  
  

  
</style>