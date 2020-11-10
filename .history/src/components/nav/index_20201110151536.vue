<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      title:{
          type:String,
          
      }
  },
  data() {
    return {};
  },
  components: {
    //注册组件
  },
  methods: {
    onClickLeft() {
        this.$router.go(-1)
    },
    
    //内部方法
  },
  mounted() {
      console.log(this.$route);
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