<template>
  <div>

    <!-- 顶部搜索 -->
    <div>
      <van-search
        v-model="value"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
      />


    </div>
    <!-- 顶部搜索 -->

<van-search
  v-model="value"
  show-action
  label="地址"
  placeholder="请输入搜索关键词"
  @search="onSearch"
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>




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