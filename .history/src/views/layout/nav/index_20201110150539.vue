<template>
 <div>
     <navview></navview>
    <router-view />
</div>
</template>

<script>
import navview from '../../../components/nav/index'
export default {
 name: '',
 props:{},
 data () {
 return {

   }
 },
 components: {
    navview
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

</style>