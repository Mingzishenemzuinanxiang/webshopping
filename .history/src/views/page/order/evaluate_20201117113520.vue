<template>
  <div>
    <div class="beijing">这里是图片</div>
    <div>
      <div class="kuang">
        <van-tabs v-model="active">
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "evaluate",
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
.beijing {
  background: url("../../../assets/loading.png");
  height: 250px;
}
.kuang {
  width: 69.667vw;
  height: 26.667vw;
  border-radius: 2.933vw;
  position: relative;
  left: 51px;
  top: -24px;
}
</style>