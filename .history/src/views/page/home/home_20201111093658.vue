<template>
  <div ref="wrapper">
    <!-- 顶部搜索 -->
    <search-data @views="getstatus"></search-data>
    <!-- 顶部搜索 -->
    <div v-show="viewstatus">
      <!-- banner -->
      <bannerlists :bannerdata="bannerdata"></bannerlists>
      <!-- banner -->

      <!-- 商品分类 -->
      <div class="class">
        <classification :shopclass="shopclass"></classification>
      </div>
      <!-- 图片 -->
      <div>
        <van-image width="100%" fit="contain" :src="image" />
      </div>
      <!-- 图片 -->

      <!-- 商品推荐 -->
      <div>
      <recommend :goodslists="goodslists"></recommend>
      </div>
      <!-- 商品推荐 -->

      <!-- 三楼食品分类 -->
      <div>
        
      </div>
      <!-- 三楼食品分类 -->
    </div>
  </div>
</template>

<script>
import searchData from "@/components/search/index"; //顶部搜索
import bannerlists from "@/components/banner/index"; //banner
import classification from "@/components/classification/index"; //classification
import recommend from "@/components/recommend/index"; //classification
import recommend from "@/components/homeclass/index"; //classification

import BScroll from "@better-scroll/core";

export default {
  name: "home",
  props: {},
  data() {
    return {
      value: "",
      image: null,
      bannerdata: [],
      shopclass: [],
      goodslists: [],
      viewstatus:true
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
    getstatus(data){
      this.viewstatus = this.viewstatus ?false:true
      
    },

    getData() {
      this.$api.getHome().then((res) => {
        if (res.code === 200) {
          let info = res.data;
          console.log(info);
          this.image = info.advertesPicture.PICTURE_ADDRESS;
          //轮播图
          this.bannerdata = info.slides;
          //商品分类
          this.shopclass = info.category;
          //商品推荐
          this.goodslists = info.recommend;
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