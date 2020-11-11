<template>
  <div>
    <div>
      <div class="food">热销商品</div>
      <div class="flex k">
        <div v-for="(itme, index) in datas" :key="index" class="img">
          <van-image :src="itme.image" @click="tourl(itme)" />
          <div>
            <span class="font-s">{{ itme.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    datas: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  components: {
    //注册组件
  },
  methods: {
    tourl(item) {
      this.$router.push({
        name: "goodsdetails",
        params: {
          id: item.goodsId,
        },
        query: {
          id: item.goodsId,
        },
      });
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

.k {
  justify-content: space-around;
  flex-wrap: wrap;
}
.img {
  width: 150px;
}
</style>