<template>
  <div class="w100-h100">
    <div class="flex">
      <div>
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="(item, index) in tyleList"
            :key="item.mallCategoryId"
            :title="item.mallCategoryName"
            @click="tab(item)"
          />
        </van-sidebar>
      </div>
      <div>
        <van-tabs v-model="active">
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
          <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "type",
  props: {},
  data() {
    return {
      activeKey: 0,
      tyleList: [],
      active: 0,
      classList:[],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    tab(item){
      
    },
    onChange(index) {
      console.log(index);
      // this.$notify({ type: "primary", message: index });
    },

    getClass() {
      this.$api.getHome().then((res) => {
        this.tyleList = res.data.category;
        localStorage.setItem("class", JSON.stringify(res.data.category));
      });
    },
    //内部方法
  },
  mounted() {
    let c = JSON.parse(localStorage.getItem("class"));
    if (!c) {
      this.getClass();
    } else {
      this.tyleList = c;
    }
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