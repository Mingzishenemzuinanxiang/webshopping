<template>
  <div>
    <div v-if="!userinfo">
        你还没有登录
    </div>
    <div v-else>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "collection",
  props: {},
  data() {
    return {
      goodsLists: null,
      userinfo: null,
    };
  },
  components: {
    //注册组件
  },
  methods: {
    //内部方法
  },
  mounted() {
    this.userinfo = localStorage.getItem("user");
    if (this.userinfo) {
      this.goodsLists = localStorage.getItem(JSON.parse(this.userinfo)._id);
    }
    console.log(this.goodsLists);
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