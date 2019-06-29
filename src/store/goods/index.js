import axios from 'axios';

export default {
    state:{
        goodsTypeList:[]
    },
    actions:{
        // 根据店铺id获取商品类型
        goShopIdGoods({state},id){

            axios.get("/goodsTypeList/"+id).then((data)=>{
                state.shopList = data.shopList;
                console.log(data)
            })
            console.log(id)
            
        }
    }
}