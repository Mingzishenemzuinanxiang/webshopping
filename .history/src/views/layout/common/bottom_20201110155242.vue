<template>
  <div>
    <div  ref="wrapper">
    <router-view />
    </div>
    <van-tabbar v-model="$route.meta.path" @change="onChange">
      <van-tabbar-item name="home" icon="shop-o">商城</van-tabbar-item>
      <van-tabbar-item name="type" icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    //注册组件
  },
  created() {
    this.bscroll = null;
  },
  methods: {
    onChange(index) {
      this.$router.push({ name: index });
    },
    initview() {
      this.bscroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        scrollbar: true,
      });
    },
    //内部方法
  },
  mounted() {
    this.initview();

    //生命周期--已加载
  },
  computed: {
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
</style>