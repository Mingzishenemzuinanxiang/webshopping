<template>
 <div>
   这里是首页
</div>
</template>

<script>
export default {
 name: 'home',
 props:{},
 data () {
 return {

   }
 },
 components: {
//注册组件
},
 methods: {
    getData(){
         this.$api.getHome().then(res=>{
             console.log(res);
         })
     }
//内部方法
},
 mounted() {
   this.getData()
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