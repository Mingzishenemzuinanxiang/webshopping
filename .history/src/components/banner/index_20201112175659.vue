<template>
 <div>
     <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in bannerdata" :key="index">
        <img v-lazy="image.image" style="width: 100%" />
      </van-swipe-item>
    </van-swipe>
</div>
</template>

<script>
export default {
 name: '',
 props:{
   bannerdata:{
     type:Array,
     required:true
   }
 },
 data () {
 return {
      // images:[]
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