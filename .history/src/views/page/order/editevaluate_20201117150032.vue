<template>
  <div>
    <div class="flex">
      <div><img :src="goods.image_path" alt="" class="w100" /></div>
      <div>
        <div>商品评分</div>
        <div>
          <van-rate v-model="info.value" icon="like" void-icon="like-o" />
        </div>
      </div>
    </div>
    <div>
      <van-field
        v-model="info.message"
        rows="1"
        autosize
        label="留言"
        type="textarea"
        placeholder="请输入留言"
      />

    </div>
    <div>
        <van-button type="info" @click="seve">提交</van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "editevaluate",
  props: {},
  data() {
    return {
      goods: { image_path: "" },
      info:{
          rate:0,
          content:"",
          anonymous:true,
          _id:"",
          order_id:"",
      },
    };
  },
  components: {
    //注册组件
  },
  methods: {
      seve(){
          this.info._id = this.goods._id
          this.info.order_id = this.goods.order_id

      }
    //内部方法
  },
  mounted() {
    this.goods = JSON.parse(this.$store.state.goods);
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
.w100 {
  width: 100px;
}
</style>