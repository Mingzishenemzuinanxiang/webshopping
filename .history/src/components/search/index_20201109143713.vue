<template>
  <div>
    <van-row>
      <van-col span="4">
        <van-dropdown-menu title="笛子">
          <van-dropdown-item />
          <van-dropdown-item />
        </van-dropdown-menu>
      </van-col>

      <van-col span="20">
        <van-search
          v-model="value"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template></van-search
        >
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value:"",

    };
  },
  components: {
    //注册组件
  },
  methods: {
    onSearch(){
      
    }
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