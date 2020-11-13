<template>
  <div>
      <div v-if="list.length===0"><van-empty image="error" description="您还没有收货地址" /></div>
      <div></div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: "addresslists",
  props: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [
        
      ],
      
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onAdd() {
      this.$toast.success("新增地址");
    },
    onEdit(item, index) {
      this.$toast.success("编辑地址:" + item);
    },
    getData(){
        //获取地址列表
        this.$api.getAddressLists().then(res=>{
            console.log(res);
        })
        //获取默认地址列表

    },
    //内部方法
  },
  mounted() {
    this.utils.checkLogin(this.getData)
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