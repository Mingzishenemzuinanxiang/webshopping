<template>
  <div>
    <div>商品推荐</div>
    <div class="observe-dom-container">
      <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
          <div
            class="scroll-item"
            v-for="(item, index) in goodslists"
            :key="index"
            @click="goxiangqing(item)"
          >
              <img class="imgclass" :src="item.image" alt="" srcset="" />
              <div class="van-ellipsis imgclass">
                <span class="font-s"> {{ item.goodsName }}</span>
              </div>
              <div>
                <span class="font-17"> ¥{{ item.mallPrice }}</span>
                <span class="font-s">¥{{ item.mallPrice }}</span>
              </div>

            <div class="flex">
              <van-button
                color="linear-gradient(to right, #ff6034, #ee0a24)"
                icon="shopping-cart-o"
                @click="addcart(item)"
              >
              </van-button>
              <van-button
                color="linear-gradient(to right, #ff6034, #ee0a24)"
                @click="gouwu(item)"
              >
                直接购买
              </van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";

BScroll.use(ObserveDOM);

export default {
  name: "index",
  props: {
    goodslists: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {
    //注册组件
  },
  beforeDestroy() {
    this.bscroll.destroy();
  },
  methods: {
    //详情
    goxiangqing(){},
    // 添加购物车
    addcart(item){
      let info = {
        count: 1,
        id:item.goodsId
        ,mallPrice: item.mallPrice
      }
      this.$api.getEditCart(info).then(res=>{
          console.log('res :>> ', res);
          if (res.code===200) {
            this.$toast.success(res.msg)
          }else{
            this.$toast.fail(res.msg)
          }
          
      })
    },
    // 直接购买
    gouwu(item){
      console.log(item);
    },
    initview() {
      this.bscroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
        scrollX: true,
        scrollY: false,
      });
    },
    //内部方法
  },
  mounted() {
    this.initview();
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
.observe-dom-container {
  text-align: center;

  .scroll-wrapper {
    width: 90%;
    white-space: nowrap;
    border-radius: 5px;
    overflow: hidden;

    .scroll-content {
      display: inline-block;
      .scroll-item {
        line-height: 50px;
        font-size: 24px;
        display: inline-block;
        text-align: center;
        padding: 0 10px;
      }
    }
  }
}

.imgclass {
  width: 100px;
}
.font-17 {
  font-size: 17px;
}
</style>