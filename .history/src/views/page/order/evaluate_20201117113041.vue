<template>
 <div>
     <div class="beijing">这里是图片</div>
     <div>
         <div>商品</div>
     </div>
</div>
</template>

<script>
export default {
 name: 'evaluate',
 props:{},
 data () {
 return {

   }
 },
 components: {
//注册组件
},
 methods: {
//内部方法
},
 mounted() {
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
.beijing{
    background: url('../../../assets/loading.png');
    height: 250px;
}
.kuang{
        width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 11px;
}
</style>