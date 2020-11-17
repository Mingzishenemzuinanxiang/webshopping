<template>
 <div>
   <div class=" flex">
       <div><img :src="goods.image_path" alt="" class="w100"></div>
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
     goods:{image_path:''},
     value:0
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
.w100{
    width: 100px;
}
</style>