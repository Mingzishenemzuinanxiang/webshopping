<template>
  <div>
      <div v-if="list.length===0"><van-empty image="search" description="您还没有收藏" /></div>
      <div></div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
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
    //内部方法
  },
  mounted() {
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