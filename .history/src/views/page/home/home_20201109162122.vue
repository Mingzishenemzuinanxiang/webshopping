<template>
  <div ref="wrapper">
    <!-- 顶部搜索 -->
    <search-data></search-data>
    <!-- 顶部搜索 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.image" style="width: 100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import searchData from "@/components/search/index";

import BScroll from "better-scroll";

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
    Bscroll 
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
          this.images = info.slides;
          console.log(this.images);
        }

        this.$nextTick(() => {
          this.scroll = new Bscroll(this.$refs.wrapper, {});
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