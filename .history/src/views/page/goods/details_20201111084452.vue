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
          <van-col>
            <span class="font red">¥{{ details.present_price }}</span>
          </van-col>
        </van-row>
      </div>
      <div>
        <van-row>
          <van-col span="8">运费：0</van-col>
          <van-col span="8">剩余: 1000</van-col>
          <van-col span="8"
            >收藏：
            <van-icon v-if="!isCollection" name="like-o" @click="collection" />
            <van-icon
              class="red"
              v-else-if="isCollection > 0"
              name="like-o"
              @click="delcollection"
            />
          </van-col>
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
      isCollection: 0,
    };
  },
  components: {
    //注册组件
  },
  methods: {
    //删除收藏
    delcollection() {
      this.$api.getcancelCollection({ id: this.details.id }).then((res) => {
        this.isCollection = 0;
        this.$toast(res.msg);
      });
    },
    //收藏
    collection() {
      this.$api.getCollection(this.details).then((res) => {
        this.isCollection = 1;
        this.$toast(res.msg);
      });
    },
    getData(id) {
      this.$api.getGoodsData(id).then((res) => {
        this.goods = res.goods;
        this.details = res.goods.goodsOne;
        this.getshoucang();
      });
    },
    //是否收藏
    getshoucang() {
      let info = JSON.parse(localStorage.getItem("user"));
      this.$api.getUserInfo().then((res) => {
        if (res.code === 200 && !Object.is(info, res.userInfo)) {
          localStorage.setItem("user", JSON.stringify(res.userInfo));
        }
      });
      this.$api.getisCollection({ id: this.details.id }).then((res) => {
        this.isCollection = res.isCollection;
      });
    },
    //内部方法
  },
  mounted() {
    this.getData(this.$route.query.id);
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
.mag-10 {
  margin: 25px;
}
</style>