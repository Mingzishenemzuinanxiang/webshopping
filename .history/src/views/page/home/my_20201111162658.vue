<template>
  <div>
    <div>
      <navindex title="个人中心"></navindex>
    </div>
    <div class="bei">这里是背景</div>
  </div>
</template>

<script>
import navindex from "@/components/nav/nav.vue";

export default {
  name: "my",
  props: {},
  data() {
    return {};
  },
  components: {
    navindex,
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
.bei {
  position: absolute;
  background-color: red;
  width: 100%;
  height: 40%;
}
</style>