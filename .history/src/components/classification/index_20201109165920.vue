<template>
  <div>
    <van-grid>
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div class="scroll-item" v-for="num in nums" :key="num">
            {{ nums - num + 1 }}
          </div>
        </div>
      </div>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {},
  data() {
    return {};
  },
  components: {
    //注册组件
  },
  methods: {
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