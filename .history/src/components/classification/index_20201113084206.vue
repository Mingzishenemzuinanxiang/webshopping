<template>
  <div>
    <van-grid :border="true" :column-num="5">
      <van-grid-item v-for="(item) in shopclass" :key="item.image">
        <van-image :src.lazy="item.image" @click="tiao(index)" />
        <span class="font-s">{{ item.mallCategoryName }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    shopclass: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      lists: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    tiao(item) {
      // console.log(item);return
      this.$router.push({
        name: "type",
        params: {
          class:item+1
        },
      });
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