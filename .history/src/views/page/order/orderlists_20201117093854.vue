<template>
  <div>
    <van-tabs>
      <van-tab title="全部">
        <div v-for="(item, index) in lists" :key="index" class="mag-10">
          <div>订单编号:{{ item.order_id }}</div>
          <div v-for="i in item.order_list" :key="i.cid" class="flex">
            <div><img :src="i.image_path" alt="" /></div>
            <div>{{ i.name }}</div>
            <div>¥ {{ i.mallPrice|two }}</div>
          </div>
          <div>
            <div>创建时间:{{ item.add_time }}</div>
            <div>收货地址:{{ item.address }}</div>
            <div>
              共{{ item.order_list.length }}件商品，合计：¥{{ item.mallPrice }}
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待支付"> 内容 </van-tab>
      <van-tab title="待发货"> 内容 </van-tab>
      <van-tab title="待收货"> 内容 </van-tab>
      <van-tab title="已完成"> 内容 </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "orderlists",
  props: {},
  data() {
    return {
      lists: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    //内部方法
  },
  mounted() {
    let i= 0,b = 0;
    this.$api.gemyOrder().then((res) => {
      if (res.code === 200) {
        // res.list.map(item=>{
        //   [i,b] = item.mallPrice.toString().split('.') 
        //   this.$set(item,'price', Number(`${i}.${b.substring(0,2)}`))
        // })
        this.lists = res.list
      }
    });
    //生命周期--已加载
  },
  computed: {
    //计算数学
  },
  watch: {
   
    //数据监听
  },
  filters: {
     two(val){
      return Number(val.toFixed(3))
    }
    //过滤器
  },
};
</script>

<style lang='scss' scoped>
img {
  width: 100px;
  height: 100px;
}
</style>