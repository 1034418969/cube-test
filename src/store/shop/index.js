import axios from 'axios';

export default {
    state:{
        shopList:[],
        shopTypeList:[],
        typeIdShop:[]
    },
    actions:{
        getShopList({state},id){
            axios.get("/shopList/"+id).then((data)=>{
                state.shopList = data.shopList;
                console.log(data)
            })
        },
        getAllShopType({state}){
            axios.get("/allShopType").then((data)=>{
                state.shopTypeList = data.shopTypeList
                console.log(data)
            })
        },
        getTypeIdShop({state},id){
            axios.get("/shopList/"+id).then((data)=>{
                console.log(data)
                state.typeIdShop = data.shopList
            })
        }
    }
}