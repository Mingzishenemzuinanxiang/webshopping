<template>
  <div>
    <router-view />
    <van-tabbar v-model="active" @change="onChange" >
      <van-tabbar-item home="shop"  icon="shop-o">商城</van-tabbar-item>
      <van-tabbar-item home="type"  icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item home="cart"  icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item home="my"  icon="contact">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      active: "shop",
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onChange(index) {
      console.log(index);
    },
    //内部方法
  },
  mounted() {
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