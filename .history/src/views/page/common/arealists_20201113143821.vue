<template>
  <div>
    <div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div></div>
    <div>
      <van-index-bar>
        <van-index-anchor index="A" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import arealists from '@/utils/city'
export default {
  name: "arealists",
  props: {},
  data() {
    return {
        value:null,
        areaLists:arealists.data.cities
    };
  },
  components: {
    //注册组件
  },
  methods: {
      onSearch(){
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