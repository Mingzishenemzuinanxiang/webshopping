<template>
 <div>
<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</div>
</template>

<script>
export default {
 name: '',
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

</style>