<template>
  <div>
    <div class="mag-10">
      <div>
        <img class="img-100" :src="details.image" alt="" />
      </div>
      <div>
          <van-row>
        <van-col class="font-s"> {{ details.name }} </van-col>
          </van-row>
      </div>
      <div>
        <van-row>
        <van-col >  <span class="font red">¥{{ details.present_price }}</span> </van-col>
          </van-row>
       
      </div>
      <div>
        <van-row>
          <van-col span="8">运费：0</van-col>
          <van-col span="8">剩余: 1000</van-col>
          <van-col span="8">span: 8</van-col>
        </van-row>
      </div>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "goodsdetails",
  props: {},
  data() {
    return {
      goods: [],
      details: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    getData(id) {
      this.$api.getGoodsData(id).then((res) => {
        console.log(res.goods.goodsOne);
        this.goods = res.goods;
        this.details = res.goods.goodsOne;
      });
    },
    //内部方法
  },
  mounted() {
    //  this.getData(this.$route.params.id);
    this.getData(
      "29b1e3da15de4ebfb5e2ea37823a3ef2&0=29b1e3da15de4ebfb5e2ea37823a3ef2"
    );
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
.img-100 {
  width: 100%;
}
.mag-10{
  margin: 25px;
}
</style>