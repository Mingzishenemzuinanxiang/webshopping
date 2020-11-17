<template>
 <div>
   
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
 name: 'editevaluate',
 props:{},
 data () {
 return {
     goods:null
   }
 },
 components: {
     
//注册组件
},
 methods: {

//内部方法
},
 mounted() {
     this.goods = JSON.parse(this.$store.state.goods)
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