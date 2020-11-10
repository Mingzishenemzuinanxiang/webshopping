<template>
  <div>
    <div>商品推荐</div>
    <van-grid :column-num="6">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    
  },
  data() {
    return {
      goods: [],
    };
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