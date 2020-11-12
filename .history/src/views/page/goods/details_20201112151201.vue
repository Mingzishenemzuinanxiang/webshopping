<template>
  <div ref="wrapper">
    <div class="mag-10">
      <div class="p-flex">
        <van-button round type="default" @click="utils.go(-1)"
          ><van-icon name="arrow-left"
        /></van-button>
      </div>
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
      <div>
        <van-tabs>
          <van-tab title="商品详情"
            ><div v-html="details.detail"></div
          ></van-tab>
          <van-tab title="商品评价"></van-tab>
        </van-tabs>
      </div>
    </div>
  

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" @click="push" />
    </van-goods-action>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "goodsdetails",
  props: {},
  data() {
    return {
      goods: [],
      details: [],
      isCollection: 0,
      model: "商品详情",

      //弹出层
      show: true,
      sku: {
        // 数据结构见下方文档
      },
      good: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
    };
  },
  components: {
    //注册组件
  },
  created() {
    this.bscroll = null;
  },

  methods: {
    //点击购买
    onBuyClicked(item) {
      console.log("item :>> ", item);
    },

    //收藏存储在页面上
    is_coll(item, status) {
      let info = JSON.parse(localStorage.getItem("user"));
      let is_coll = localStorage.getItem(info._id);
      if (!is_coll) {
        localStorage.setItem(info._id, JSON.stringify([item]));
      } else {
        let coll = JSON.parse(is_coll);
        let i = this.utils.delEeidList(coll, item, status);
        localStorage.setItem(info._id, JSON.stringify(i));
      }
    },
    //删除收藏
    delcollection() {
      this.$api.getcancelCollection({ id: this.details.id }).then((res) => {
        this.isCollection = 0;
        this.is_coll(this.details, false);
        this.$toast.success(res.msg);
      });
    },
    //收藏
    collection() {
      this.$api.getCollection(this.details).then((res) => {
        this.isCollection = 1;
        this.is_coll(this.details, true);

        this.$toast.success(res.msg);
      });
    },
    getData(id) {
      this.$api.getGoodsData(id).then((res) => {
        this.goods = res.goods;
        this.details = res.goods.goodsOne;
        // this.add();
        // console.log(this.details);
        // this.getshoucang();
      });
    },
    //直接购买赋值
    add() {
      this.good.picture = this.details.image_path;
    },

    //是否收藏
    getshoucang() {
      this.getuserinfo();
      this.$api.getisCollection({ id: this.details.id }).then((res) => {
        this.isCollection = res.isCollection;
      });
    },
    getuserinfo() {
      let info = JSON.parse(localStorage.getItem("user"));
      this.$api.getUserInfo().then((res) => {
        if (res.code === 200 && !Object.is(info, res.userInfo)) {
          localStorage.setItem("user", JSON.stringify(res.userInfo));
        }
      });
    },

    initview() {
      this.bscroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        scrollbar: true,
        click: true,
      });
    },
    push() {
      this.show = true;
    },
    //内部方法
  },
  mounted() {
    // this.initview();
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