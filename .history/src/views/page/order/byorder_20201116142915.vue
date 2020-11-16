<template>
  <div>
    
    <van-contact-card type="add" @click="utils.to('addresslists')" />
    <van-contact-card
      type="edit"
      name="currentContact.name"
      tel="currentContact.tel"
      @click="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: "byorder",
  props: {},
  data() {
    return {
        address:null,
        order:null,
    };
  },
  components: {
    //注册组件
  },
  methods: {
      
      getAddress(){
          this.$api.getDefaultAddress().then(res=>{
              console.log(res);
          })
      }
      ,getOrder(){

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