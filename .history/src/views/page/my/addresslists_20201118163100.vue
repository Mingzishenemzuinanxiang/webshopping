<template>
  <div>
    <div v-if="list.length === 0">
      <van-empty image="error" description="您还没有收货地址" />
    </div>
    <div></div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="utils.checkLogin(utils.to, 'editaddress')"
      @edit="onEdit"
      @select="selectaddress"
    />
  </div>
</template>

<script>
export default {
  name: "addresslists",
  props: {},
  data() {
    return {
      chosenAddressId: "-1",
      list: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onEdit(item) {
      console.log(1);
      this.utils.checkLogin(this.utils.todata, {
        url: "editaddress",
        data: JSON.stringify(item),
      });
    },

    selectaddress(item){
      if (this.$route.meta.address&&this.$route.meta.address==="byorder") {
        sessionStorage.setItem('orderaddress',JSON.stringify(item))
        this.utils.go(-1)
      }
      console.log(this.$route);
    },

    getData() {
      //获取地址列表
      this.$api.getAddressLists().then((res) => {
        if (res.code === 200) {
          this.list = res.address;
          this.list.map((item) => {
            this.$set(item, "id", item._id);
          });
        }
      });
      //获取默认地址列表
    },
    //内部方法
  },
  mounted() {
    this.utils.checkLogin(this.getData);
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
</style>