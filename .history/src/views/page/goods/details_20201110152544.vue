<template>
 <div>
    这里是详情
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