<template>
  <div>
    <div v-if="!address || address.length === 0">
      <van-contact-card type="add" @click="utils.to('addresslists')" />
    </div>

    <div v-else>
      <div class="flex W100">
        <div class="w100">
          <van-icon name="location-o" size="30" />
        </div>
        <div>
          <div class="flex name mag-10">
            <div>收件人:奥科吉索饭</div>
            <div>18384110672</div>
          </div>
          <div class="mag-10">
            <div>收件地址:{{ address.address }}</div>
          </div>
        </div>
      </div>
      <div class="dibian"></div>
    </div>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>
</template>

<script>
export default {
  name: "byorder",
  props: {},
  data() {
    return {
      address: null,
      order: null,
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onEdit() {},
    getAddress() {
      if (this.$route.meta.address && this.$route.meta.address === "byorder") {
        this.address = JSON.parse(sessionStorage.getItem("orderaddress"));
        sessionStorage.removeItem("orderaddress");
      } else {
        this.$api.getDefaultAddress().then((res) => {
          if (res.code === 200) {
            this.address = res.defaultAdd;
            console.log(this.address);
          }
        });
      }
    },
    getOrder() {
      this.order = this.$route.query.data || this.$route.params.data;
      console.log(this.order);
    },
    //内部方法
  },
  mounted() {
    this.getAddress();
    this.getOrder();
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
.dibian {
  position: absolute;
  width: 100%;
  height: 2px;
  background: repeating-linear-gradient(
    -45deg,
    #ff6c6c,
    #ff6c6c 20%,
    transparent 0,
    transparent 25%,
    #1989fa 0,
    #1989fa 45%,
    transparent 0,
    transparent 50%
  );
  background: -webkit-repeating-linear-gradient(
    135deg,
    #ff6c6c,
    #ff6c6c 20%,
    transparent 0,
    transparent 25%,
    #1989fa 0,
    #1989fa 45%,
    transparent 0,
    transparent 50%
  );
  background-size: 100px;
}
.name {
  justify-content: space-between;
}
.W100 {
  width: 100%;
}
.w100 {
  width: 20px;
  margin: auto;
}
</style>