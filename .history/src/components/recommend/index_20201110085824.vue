<template>
  <div ref="wrapper">
    <div>商品推荐</div>
    <van-grid :column-num="3">
      <van-grid-item v-for="(item,index) in goodslists" :key="item.name">
        <van-image :src="item.image" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    goodslists:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
     
    };
  },
  components: {
    //注册组件
  },
  beforeDestroy() {
      this.bscroll.destroy()
    },
  methods: {

    
    initview() {
      this.bscroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
          scrollX: true,
          scrollY: false
      });
    },
    //内部方法
  },
  mounted() {
    this.initview()
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