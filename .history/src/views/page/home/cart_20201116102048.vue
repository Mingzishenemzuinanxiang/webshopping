<template>
  <div>
    <div>
      <navindex title="购物车"></navindex>
    </div>
    <div>
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

    <div>
      <van-submit-bar
        class="pos-flex"
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
          <van-button v-show="checked" type="primary">删除</van-button>
        </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import navindex from "@/components/nav/nav.vue";

export default {
  name: "cart",
  props: {},
  data() {
    return {
      checked: false,
      cartlists:[],
    };
  },
  components: {
    navindex,
    //注册组件
  },
  methods: {
    onSubmit() {},
    //内部方法
  },
  mounted() {
    this.$api.getCartLists().then(res=>{
      if (res.code===200) {
        console.log(res.shopList);
      this.cartlists = res.shopList
        
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
.pos-flex {
  position: fixed;
  bottom: 53px;
  border: 1px red solid;
}
</style>