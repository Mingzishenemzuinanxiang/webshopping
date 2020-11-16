<template>
  <div>
    <div>
      <navindex title="购物车"></navindex>

      <div>
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="checked">全选</van-checkbox>
          <template #tip>
           <van-button v-show="checked" type="primary">删除</van-button>
          </template>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
import navindex from "@/components/nav/nav.vue";

export default {
  name: "cart",
  props: {},
  data() {
    return {};
  },
  components: {
    navindex,
    //注册组件
  },
  methods: {
    onSubmit(){

    },
    checked(){
      
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