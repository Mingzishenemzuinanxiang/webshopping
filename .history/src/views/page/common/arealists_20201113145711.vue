<template>
  <div>
    <div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
        />
      </form>
    </div>
    <div></div>
    <div>
      <van-grid :column-num="3">
        <van-grid-item
        border
          v-for="(item,index) in hotArea"
          :key="index"
          :text="item.name"
        />
      </van-grid>
    </div>
    <div>
      <van-index-bar>
        <van-index-anchor
          sticky-offset-top="100px"
          v-for="(item, index) in areaLists"
          :key="index"
          :index="index"
        >
          {{ index }}
          <van-cell v-for="(i, index) in item" :title="i.name" @click="" />
        </van-index-anchor>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import arealists from "@/utils/city";
export default {
  name: "arealists",
  props: {},
  data() {
    return {
      value: null,
      areaLists: arealists.data.cities,
      hotArea: arealists.data.hotCities,
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onSearch() {
      console.log(1);
    },
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