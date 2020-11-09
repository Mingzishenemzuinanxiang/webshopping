<template>
 <div>
     <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in bannerdata" :key="index">
        <img :src="image.image" style="width: 100%" />
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
  //  getData() {
  //     this.$api.getHome().then((res) => {
  //       if (res.code === 200) {
  //         let info = res.data;
  //         this.images = info.slides;
  //       }
  //     });
  //   },
//内部方法
},
 mounted() {
  //  this.getData()
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