<template>
  <div class="w100-h100">
    <div class="flex">
      <div>
        <van-sidebar v-model="activeKey" @change="tab">
          <van-sidebar-item
            v-for="(item, index) in tyleList"
            :key="item.mallCategoryId"
            :title="item.mallCategoryName"
            :name="item.mallCategoryId"
          />
        </van-sidebar>
      </div>
      <div class="W100">
        <van-tabs v-model="active" @click="goodstype">
          <van-tab
            v-for="(item, index) in classList"
            :key="item.mallSubId"
            :title="item.mallSubName"
            :name="item.mallSubId"
          >
            
          </van-tab>
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
      classList: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    tab(item) {
      console.log(item);
      this.classList = item.bxMallSubDto;
    },
    onChange(index) {
      console.log(index);
      // this.$notify({ type: "primary", message: index });
    },
    goodstype(e) {
      this.$api.getClassList(e).then(res=>{
        console.log(res);
      })
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
      this.classList = c[0].bxMallSubDto;
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