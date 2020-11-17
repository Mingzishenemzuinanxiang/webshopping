<template>
 <div>
   <div>
       <div><img :src="goods.image_path" alt=""></div>
       <div>
           <div>商品评分</div>
           <div>
               <van-rate v-model="value" icon="like" void-icon="like-o" />
           </div>
       </div>
   </div>
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
     console.log(this.$store.state);
    //  this.goods = JSON.parse(this.$store.state.goods)
    //  console.log(this.goods);
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