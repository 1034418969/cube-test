<template>
  <cube-scroll-nav
    :side="true"
    :data="data"
    :current="current"
    @change="changeHandler"
    @sticky-change="stickyChangeHandler"
  >
 
    <cube-scroll-nav-panel
      v-for="item in data"
      :key="item.name"
      :label="item.name"
      :title="item.name"
    >
      <ul>
        <li v-for="food in item.foods">
          <div>
            <img :src="food.icon">
            <p>{{food.name}}</p>
          </div>
        </li>
      </ul>
    </cube-scroll-nav-panel>
  </cube-scroll-nav>
</template>

<script>
const goodsData  = {
	"goods": [{
			"name": "热销榜",
			"type": -1,
			"foods": [{
					"name": "皮蛋瘦肉粥",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
					"name": "皮蛋瘦23肉粥",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
					"name": "345",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
				}
			]
		},{
			"name": "sss",
			"type": -1,
			"foods": [{
					"name": "皮蛋瘦肉粥",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
				},{
					"name": "皮蛋瘦肉粥",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
					"name": "皮蛋瘦23肉粥",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
					"name": "345",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
				}
			]
		},{
			"name": "qqq",
			"type": -1,
			"foods": [{
					"name": "皮蛋瘦肉粥",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
				},{
					"name": "皮蛋瘦肉粥",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
					"name": "皮蛋瘦23肉粥",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {
					"name": "345",
					"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
					"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
				}
			]
		}

	]
}
const goods = goodsData.goods;
export default {
  name: "shop",
  data() {
    return {
      data: goods,
      current: goods[0].name
    };
  },
  mounted() {
    this.$store.dispatch("goShopIdGoods", this.$route.params.id);
  },
  components: {
    // CubePage
  },
  methods: {
      changeHandler(label) {
    //   console.log('changed to:', label)
    },
    stickyChangeHandler(current) {
    //   console.log('sticky-change', current)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>