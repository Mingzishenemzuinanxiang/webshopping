<template>
  <div>
    <!-- 顶部搜索 -->

    <van-row>
      <van-col span="8">span: 8</van-col>

      <van-col span="16">
        <van-search
          v-model="value"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template></van-search
        >
      </van-col>
    </van-row>

    <!-- 顶部搜索 -->
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      value: "",
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onSearch() {},

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