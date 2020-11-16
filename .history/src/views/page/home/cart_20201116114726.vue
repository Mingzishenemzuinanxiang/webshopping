<template>
  <div ref="wrapper">
    <div>
      <navindex title="购物车"></navindex>
    </div>
    <div>
      <div class="flex mag-10" v-for="item in cartlists" :key="item.cid">
        <van-checkbox v-model="item.check"> </van-checkbox>
        <van-cell center value="内容">
          <van-card
            :num="item.count"
            :price="item.present_price"
            :title="item.name"
            :thumb="item.image_path"
          >
            <template #footer>
              <van-stepper v-model="item.count" min="1" @change="edit(item)" />
            </template>
          </van-card>
        </van-cell>
      </div>
    </div>

    <div>
      <van-submit-bar
        class="pos-flex"
        :price="total"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checkAll" @click="checkAll">全选</van-checkbox>
        <template #tip>
          <van-button type="danger" size="small" @click="delcheck"
            >删除</van-button
          >
        </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import navindex from "@/components/nav/nav.vue";

import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
BScroll.use(Pullup);
BScroll.use(MouseWheel);
export default {
  name: "cart",
  props: {},
  data() {
    return {
      checkAll:false,
      cartlists: [],
      del: false,
      isPullUpLoad: false,
    };
  },
  components: {
    navindex,
    //注册组件
  },
  methods: {
    //修改数量
    edit(item) {
      this.$api.getEditCart(item).then((res) => {
        this.utils.message(res);
      });
    },
    //删除选中项
    delcheck() {
      this.$dialog.confirm({
        message: "确定删除该商品吗",
      }).then(() => {
        let cid = [];
        this.cartlists.map((item) => {
          if (item.check) {
            cid.push(item.cid);
          }
        });
        this.$api.getDelCart(cid).then((res) => {
          if (res.code === 200) {
            this.$toast.success(res.msg);
            this.cartlists = this.cartlists.filter((item) => {
              return item.check === false;
            });
          }
        });
      });
    },
    onSubmit() {},
    initview() {
      this.bscroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        scrollbar: true,
        click: true,
      });
    },
    //内部方法
  },
  created() {
    this.bscroll = null;
  },
  mounted() {
    this.initview();
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