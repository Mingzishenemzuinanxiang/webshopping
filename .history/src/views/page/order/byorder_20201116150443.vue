<template>
  <div>
    <van-contact-card
      v-if="!address || address.length === 0"
      type="add"
      @click="utils.to('addresslists')"
    />
    <div v-else>
      <div>收件人</div>
    </div>
    <van-contact-card type="edit" :name="address.name" :tel="address.tel" />
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
      this.$api.getDefaultAddress().then((res) => {
        if (res.code === 200) {
          this.address = res.defaultAdd;
        }
      });
    },
    getOrder() {},
    //内部方法
  },
  mounted() {
    this.getAddress();
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
  height: 142px;
  background: red;
  border: repeating-linear-gradient(-45deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);
}
</style>