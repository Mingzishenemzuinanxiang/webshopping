<template>
  <div ref="wrapper">
    <div>商品推荐</div>

    <div class="scroll-content">
      <div class="scroll-item" v-for="(item, index) in goodslists" :key="item.name">
       <van-image :src="item.image" />
        <span class="font-s">
          {{ item.goodsName }} <span>{{ item.mallPrice }}</span></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";

BScroll.use(ObserveDOM);

export default {
  name: "index",
  props: {
    goodslists: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {
    //注册组件
  },
  beforeDestroy() {
    this.bscroll.destroy();
  },
  methods: {
    initview() {
      this.bscroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
        scrollX: true,
        scrollY: false,
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
.scroll-content {
  display: inline-block;
  .scroll-item {
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    display: inline-block;
    text-align: center;
    padding: 0 20px;
  }
}
</style>