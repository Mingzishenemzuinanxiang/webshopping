<template>
  <div ref="wrapper">
    <!-- 顶部搜索 -->
    <search-data></search-data>
    <!-- 顶部搜索 -->
    <!-- banner -->
    <bannerlists></bannerlists>
    <!-- banner -->
  </div>
</template>

<script>
import searchData from "@/components/search/index";//顶部搜索
import bannerlists from "@/components/banner/index";//banner

import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
BScroll.use(ScrollBar)

export default {
  name: "home",
  props: {},
  data() {
    return {
      value: "",
      images: null,
    };
  },
  components: {
    searchData,
    bannerlists,
    //注册组件
  },
  methods: {
    onSearch() {
      console.log(1);
    },

    getData() {
      this.$api.getHome().then((res) => {
        if (res.code === 200) {
          let info = res.data;
          console.log(info);
        }

        this.$nextTick(() => {
          let bs = new BScroll(this.$refs.wrapper, {})
        });
      });
    },
    //内部方法
  },
  mounted() {
    this.getData();

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