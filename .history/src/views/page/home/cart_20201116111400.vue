<template>
  <div>
    <div>
      <navindex title="购物车"></navindex>
    </div>

    <div ref="scroll" class="pullup-wrapper">
      <div class="pullup-content">
        <ul class="pullup-list">
          <li v-for="i of data" :key="i" class="pullup-list-item">
            {{
              i % 5 === 0 ? "use your mousewheel please 👆🏻" : `I am item ${i} `
            }}
          </li>
        </ul>
        <div class="pullup-tips">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span class="pullup-txt"
              >mousewheel trigger pullingup and load more</span
            >
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">Loading...</span>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="scroll"
      class="flex mag-10"
      v-for="item in cartlists"
      :key="item.cid"
    >
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
        <van-checkbox v-model="checkAll">全选</van-checkbox>
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
      checked: false,
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
    //删除选中项
    delcheck() {
      let cid = [];
      this.cartlists.map((item) => {
        if (item.check) {
          cid.push(item.cid);
        }
      });
      this.$api.getDelCart(cid).then((res) => {
        if (res.code === 200) {
          this.$toast.success(res.msg);
          this.cartlists = this.cartlists.filte((item) => {
            return item.check === false;
          });
        }
      });
    },
    onSubmit() {},

    initBscroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 3,
        pullUpLoad: true,
        mouseWheel: true,
        click: true,
      });

      this.scroll.on("pullingUp", this.pullingUpHandler);
    },
    async pullingUpHandler() {
      this.isPullUpLoad = true;


      this.scroll.finishPullUp();
      this.scroll.refresh();
      this.isPullUpLoad = false;
    },
    
    //内部方法
  },
  mounted() {
    this.initBscroll();
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
      let c = true;
      this.cartlists.map((item) => {
        if (!item.check) {
          c = false;
        }
      });
      return c;
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
<style lang="stylus">
.mouse-wheel-pullup, height: 100%, .pullup-wrapper {
  height: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}

.pullup-list {
  padding: 0;
}

.pullup-list-item {
  padding: 10px 0;
  list-style: none;
  border-bottom: 1px solid #ccc;
}

.pullup-tips {
  padding: 20px;
  text-align: center;
  color: #999;
}
</style>