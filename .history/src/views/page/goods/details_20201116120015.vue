<template>
  <div ref="wrapper">
    <div class="p-flex z-99 back">
      <van-button round type="default" @click="utils.go(-1)"
        ><van-icon name="arrow-left"
      /></van-button>
    </div>
    <div class="mag-10" v-if="details">
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
            <van-icon
              v-if="isCollection === 0"
              name="like-o"
              @click="collection(true)"
            />
            <van-icon
              class="red"
              v-else-if="isCollection > 0"
              name="like-o"
              @click="collection(false)"
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
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="utils.checkLogin(add, 'cart')"
        />
        <van-goods-action-button type="danger" text="立即购买" @click="push" />
      </van-goods-action>

      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '30%' }"
        round
      >
        <van-card
          :num="1"
          :price="details.present_price"
          desc="描述信息"
          :title="details.name"
          :thumb="details.image"
        />
      </van-popup>
    </div>
    <div v-else>
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description=" 该商品已下架了啊！"
      />
    </div>
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
      show: false,
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

    push() {
      this.show = true;
      console.log(1);
    },

    //添加
    add(url) {
      //添加购物车
      if (url === "cart") {
        this.$api.setCart({ id: this.details.id }).then((res) => {
          if (res.code === 200) {
            this.$toast.success(res.msg);
          }
        });
      }
    },
    //收藏存储在页面上
    is_coll(item, status) {
      this.utils.addLocalStorage("collection", item);
    },
    coll() {
      this.$api.getCollection(this.details).then((res) => {
        this.isCollection = 1;
        this.is_coll(this.details, true);
        this.$toast.success(res.msg);
      });
    },
    //删除收藏
    delcollection() {
      this.$api.getcancelCollection({ id: this.details.id }).then((res) => {
        this.isCollection = 0;
        this.is_coll(this.details, false);
        this.$toast.success(res.msg);
      });
    },
    //收藏/取消收藏
    collection(i) {
      let bl = i ? this.coll : this.delcollection;
      this.utils.checkLogin(bl);
    },
    //添加浏览记录
    addbrowse() {
      this.utils.addLocalStorage("record", this.details);
    },

    getData(id) {
      this.$api.getGoodsData(id).then((res) => {
        if (res.code === 200) {
          this.goods = res.goods;
          this.details = res.goods.goodsOne;
          //添加浏览记录
          this.addbrowse();
          this.utils.checkLogin(this.getshoucang);
        } else {
          this.$toast.fail("该商品已下架");
          this.utils.go(-1);
        }
      });
    },

    //是否收藏
    getshoucang() {
      this.$api.getisCollection({ id: this.details.id }).then((res) => {
        this.isCollection = res.isCollection;
      });
    },

    initview() {
      this.bscroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        scrollbar: true,
        click: true,
      });
    },

    //内部方法
  },
  mounted() {
    this.initview();
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
.back {
  margin: 10px;
}
.z-99 {
  z-index: 9;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>