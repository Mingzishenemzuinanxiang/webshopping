<template>
  <div>
    <van-grid :border="true" :column-num="5">
      <van-grid-item v-for="(item,index) in lists" :key="lists.image">
        <van-image :src="item.image" /> <span class="font-s">{{item.mallCategoryName}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "index",
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
    getData() {
      this.$api.getHome().then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.lists = res.data.category;
        }
      });
    },
    //内部方法
  },
  mounted() {
    this.getData();
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
.font-s{
  font-size: 12px;
}
</style>