<template>
  <div>
    <!-- 顶部搜索 -->
<search-data></search-data>
    <!-- 顶部搜索 -->
  </div>
</template>

<script>
import searchData from '@/components/search/'


export default {
  name: "home",
  props: {},
  data() {
    return {
      value: "",
    };
  },
  components: {
    searchData
    //注册组件
  },
  methods: {
    onSearch() {
      console.log(1);
    },

    getData() {
      this.$api.getHome().then((res) => {
        console.log(res);
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