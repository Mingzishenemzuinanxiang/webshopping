<template>
  <div class="w100-h100">
    <div class="flex">
      <div>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item) in tyleList"
            :key="item.mallCategoryId"
            :title="item.mallCategoryName"
            @click="tab(item)"
          />
        </van-sidebar>
      </div>
     <!---> <div class="W100">
        <van-tabs v-model="active" @click="goodstype">
          <van-tab
            v-for="(item) in classList"
            :key="item.mallSubId"
            :title="item.mallSubName"
            :name="item.mallSubId"
          >
            <van-card
              v-for="(item, index) in goodsData"
              :key="index"
              :price="item.present_price"
              desc="描述信息"
              :title="item.name"
              :thumb="item.image"
              :origin-price="item.orl_price"
              @click="utils.goDetails(item.id)"
            >
            </van-card>
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
      goodsData: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    tab(item) {
      this.classList = item.bxMallSubDto;
      this.goodstype(item.bxMallSubDto[0].mallSubId);
    },
    goodstype(e) {
      this.$api.getClassList(e).then((res) => {
        if (res.code === 200) {
          this.goodsData = res.dataList;
        }
      });
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
    this.activeKey = this.$route.params.class;
    let c = JSON.parse(localStorage.getItem("class"));
    c ?this.tyleList = c:this.getClass();
    this.activeKey =  this.activeKey ? this.activeKey-1:0
    this.classList = c[this.activeKey].bxMallSubDto
    this.goodstype(c[this.activeKey].bxMallSubDto[0].mallSubId);

    

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
};<!--->
</script>

<style lang='scss' scoped>
</style>