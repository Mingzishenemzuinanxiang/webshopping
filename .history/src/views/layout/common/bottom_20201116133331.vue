<template>
  <div>
    <router-view />
    <van-tabbar v-model="home" @change="onChange" safe-area-inset-bottom>
      <van-tabbar-item name="home" icon="shop-o">商城</van-tabbar-item>
      <van-tabbar-item name="type" icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="shopping-cart-o">购物车{{cartlength}}</van-tabbar-item>
      <van-tabbar-item name="my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      home:''
    };
  },
  components: {
    //注册组件
  },
  created() {
    this.home = this.$route.name
  },
  methods: {
    onChange(index) {
      this.home = index
      this.$router.push({ name: index });
    },
   
    //内部方法
  },
  mounted() {
    setInterval(() => {
      this.home = this.$route.name
    }, 500);
    //生命周期--已加载
  },
  computed: {
    cartlength(){
      let num = 0
      this.$api.getCartLists().then(res=>{
        num = res.shopList.length
      })
      return num
    }
    //计算数学
  },
  watch: {
    //数据监听
  },
  filters: {
    //过滤器
  },
};
</script>

<style lang='scss' scoped>
// .scrollbar {
//   height: 100%;
// }

// .scrollbar-bswrapper {
//   position: relative;
//   height: 100%;
//   padding: 0 10px;
//   border: 1px solid #ccc;
//   overflow: hidden;
// }
// .pullup-list {
//   padding: 0;
// }
</style>