<template>
  <div ref="wrapper">
    <!-- 顶部搜索 -->
    <search-data></search-data>
    <!-- 顶部搜索 -->
    <!-- banner -->
    <bannerlists></bannerlists>
    <!-- banner -->

    <!-- 商品分类 -->
    <div class="class">
      <classification></classification>
    </div>
    <!-- 图片 -->
    <div>
      <van-image
        width="100%"
        fit="contain"
        :src="images"
      />
    </div>
    <!-- 图片 -->

    <!-- 商品推荐 -->
    <recommend></recommend>
    <!-- 商品推荐 -->
  </div>
</template>

<script>
import searchData from "@/components/search/index"; //顶部搜索
import bannerlists from "@/components/banner/index"; //banner
import classification from "@/components/classification/index"; //classification
import recommend from "@/components/recommend/index"; //classification

import BScroll from "@better-scroll/core";

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
    classification,
    recommend,
    //注册组件
  },
  created() {
    this.bscroll = null;
  },

  methods: {
    onSearch() {
      console.log(1);
    },

    getData() {
      this.$api.getHome().then((res) => {
        if (res.code === 200) {
          let info = res.data;
          this.images = info.advertesPicture.PICTURE_ADDRESS
          // console.log(info);
        }
      });
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
// .scrollbar-list-item {
//   padding: 10px 0;
//   list-style: none;
//   border-bottom: 1px solid #ccc;
// }
// .scrollbar-wrapper {
//   padding: 15px;
//   text-align: center;
//   color: #999;
// }
.class {
  border: 1px solid #ccc !important;
  // padding:7px;
  border-radius: 16px !important;
}
</style>