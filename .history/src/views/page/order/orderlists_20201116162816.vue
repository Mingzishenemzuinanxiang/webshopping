<template>
  <div>
    <van-tabs>
      <van-tab title="全部">
       
      </van-tab>
      <van-tab title="待支付">
        内容
      </van-tab>
      <van-tab title="待发货">
        内容
      </van-tab>
      <van-tab title="待收货">
        内容
      </van-tab>
      <van-tab title="已完成">
        内容
      </van-tab>
     
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "orderlists",
  props: {},
  data() {
    return {
        lists:[],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    //内部方法
  },
  mounted() {
      this.$api.gemyOrder().then(res=>{
          console.log(res);
          if (res.code===200) {
              this.lists = res.list
          }
      })
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