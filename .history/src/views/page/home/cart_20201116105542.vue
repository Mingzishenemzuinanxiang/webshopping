<template>
  <div>
    <div>
      <navindex title="购物车"></navindex>
    </div>
    <div class="flex" v-for="item in cartlists" :key="item.cid">
      <van-checkbox v-model="item.check"> </van-checkbox>
      <van-cell center value="内容">
        <van-card
          :num="item.count"
          :price="item.present_price"
          :title="item.name"
          :thumb="item.image_path"
        >
          <template #footer>
            <van-stepper v-model="item.count" min="1" />
          </template>
        </van-card>
      </van-cell>
    </div>

    <div>
      <van-submit-bar
        class="pos-flex"
        :price="total"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checkAll" >全选</van-checkbox>
        <template #tip>
          <van-button v-show="del" type="primary">删除</van-button>
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
      del: false,
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
    total() {
      let price = 0;
      this.cartlists.map((item) => {
        if (item.check) {
          price += item.present_price * item.count;
        }
      });
      return price * 100;
    },
    checkAll() {
      let c= false
      this.cartlists.map((item) => {
        if (item.check) {
            c = true
        }
      });
      return c
    },
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
img {
  width: 100px;
  height: 100px;
}
.van-cell {
  padding: 0;
}
</style>