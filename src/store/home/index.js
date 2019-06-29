import axios from 'axios'

export default {
    state:{
        slideList:[]
    },
    actions:{
        getShopTypeNum({state},num){
            axios.get("/getShopType/"+num).then((data)=>{
                state.slideList = data.slideList
                console.log(data)
            })
        }
    }
}