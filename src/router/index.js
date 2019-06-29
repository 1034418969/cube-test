import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import my from '../views/my';
import order from '../views/order';
import find from '../views/find';
import shopList from '../views/shopList';
import shop from '../views/shop';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      alias:"/Home",
      component: Home,
      meta: {
        isFooter: true
      }
    },
    {
      path: "/my",
      name: "my",
      component: my,
      meta: {
        isFooter: true
      }
    },
    {
      path: "/order",
      name: "order",
      component: order,
      meta: {
        isFooter: true
      }
    },
    {
      path: "/find",
      name: "find",
      component: find,
      meta: {
        isFooter: true
      }
    },
    {
      path: "/shopList/:id",
      name: "shopList",
      component: shopList,
      meta: {
        isFooter: true
      }
    },
    {
      path:"/shop/:id",
      name:"shop",
      component:shop,
      meta:{
        isFooter: true
      }
    }

  ]
})
