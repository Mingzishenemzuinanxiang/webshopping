<template>
  <div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="标签名1" />
      <van-sidebar-item title="标签名2" />
      <van-sidebar-item title="标签名3" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name: "type",
  props: {},
  data() {
    return {
      activeKey: 0,
      tyleList:[],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onChange(index) {
      this.$notify({ type: "primary", message: index });
    },

    getClass(){
      this.getHome().then(res=>{
        this.tyleList = res.data.category
      })
    },
    //内部方法
  },
  mounted() {
    let c = JSON.parse(localStorage.getItem('class'))
    if (!c) {
      this.getClass()
    }else{
      this.tyleList = c
    }
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