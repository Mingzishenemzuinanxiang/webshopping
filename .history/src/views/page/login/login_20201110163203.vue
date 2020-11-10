<template>
 <div>
    <div class="bei">
      <van-button round type="info"><van-icon name="arrow-left" /></van-button>

    </div>
</div>
</template>

<script>
export default {
 name: 'login',
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
.bei{
  position:absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/login.jpg');
}
</style>