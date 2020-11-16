<template>
  <div>
    <div>
      <navindex title="购物车"></navindex>
    </div>
    <div class="flex" v-for="(item) in cartlists" :key="item.cid">
      <van-checkbox v-model="checked" />
       <van-cell value="内容" is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title"><img v-lazy="item.image_path" alt=""></span>
            <van-tag type="danger">标签</van-tag>
          </template>
        </van-cell>
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
      cartlists: [],
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
    this.$api.getCartLists().then((res) => {
      if (res.code === 200) {
        console.log(res.shopList);
        this.cartlists = res.shopList;
      }
    });
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