<template>
 <div>
    
    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
</div>
</template>

<script>
export default {
 name: 'details',
 props:{},
 data () {
 return {
    goods:[],
    details:[],
   }
 },
 components: {
//注册组件
},
 methods: {
   getData(id){
     this.$api.getGoodsData(id).then(res=>{
       console.log(res);
       console.log(id);
       this.goods = goods
       this.details = goods.goodsOne
     })
   }
//内部方法
},
 mounted() {
  //  this.getData(this.$route.params.id);
   this.getData('29b1e3da15de4ebfb5e2ea37823a3ef2&0=29b1e3da15de4ebfb5e2ea37823a3ef2');
//生命周期--已加载
},
 computed:{
//计算数学
},
 watch: {
//数据监听
},
 filters:{
//过滤器
},
}
</script>

<style lang='scss' scoped>

</style>