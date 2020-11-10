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

   }
 },
 components: {
//注册组件
},
 methods: {
   getData(id){
     this.$api.getGoodsData(id).then(res=>{
       console.log(res);
     })
   }
//内部方法
},
 mounted() {
   this.getData(this.$route.params.id);
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