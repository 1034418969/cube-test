export default {
    conm:{
       elefooter:()=>import('./common/elefooter') ,
       typeShopList:()=>import('./common/typeShopList') 
    },
    install(Vue){
        for(let key in this.conm){
            Vue.component(key,this.conm[key]);
        }
    }
}