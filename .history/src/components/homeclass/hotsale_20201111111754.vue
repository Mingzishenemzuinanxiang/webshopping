<template>
  <div>
    <div>
      <div class="food">
          热销商品
      </div>
      <table class="tab">
        <tr
          v-for="(itme, index) in datas"
          :key="index"
          :class="{ box: index === 0 }"
        >
          <van-image
            :src="itme.image"
            @click="tourl(itme)"
          />
         {{itme.name}}
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      datas:{
          type:Array
      }
  },
  data() {
    return {};
  },
  components: {
    //注册组件
  },
  methods: {
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
.tab tr {
  border: 1px solid rgb(231, 225, 225);
  float: left;
}

.box {
  height: 201.8px;
}

.food {
  text-align: center;
  padding: 10px 0;
  font-size: 15px;
  color: #e03730;
  font-weight: 550;
  background-color: #ededed;

  span {
    border-radius: 10px;
    background-color: #e03730;
    color: rgb(231, 225, 225);
    font-size: 14px;
  }
}
</style>