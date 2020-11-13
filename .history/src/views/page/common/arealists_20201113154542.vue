<template>
  <div class="w100-h100">
    <div>
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
        />
      </form>
    </div>
    <div v-if="!show">
      <div v-show="userAddress">
        <div class="mag-10"><span class="font-s">当前城市</span></div>
        <van-grid :column-num="3" :border="true" :clickable="true">
          <van-grid-item :text="userAddress" />
        </van-grid>
      </div>
      <div>
        <div class="mag-10"><span class="font-s">热门城市</span></div>
        <van-grid :column-num="3" :border="true" :clickable="true">
          <van-grid-item
            v-for="(item, index) in hotArea"
            :key="index"
            :text="item.name"
            @click="addArea(item)"
          />
        </van-grid>
      </div>
      <div>
        <van-index-bar>
          <van-index-anchor
            sticky-offset-top="100px"
            v-for="(item, index) in areaLists"
            :key="index"
            :index="index"
          >
            {{ index }}
            <van-cell
              v-for="(i, index) in item"
              :key="index"
              :title="i.name"
              @click="addArea(i)"
            />
          </van-index-anchor>
        </van-index-bar>
      </div>
    </div>
    <div v-else>
      <van-list>
        <van-cell  />
      </van-list>
    </div>
  </div>
</template>

<script>
import arealists from "@/utils/city";
export default {
  name: "arealists",
  props: {},
  data() {
    return {
      value: null,
      show: false,
      areaLists: arealists.data.cities,
      hotArea: arealists.data.hotCities,
      userAddress: null,
      saechaddress:[]
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onSearch() {
      this.saechaddress = []
      this.value
      this.areaLists.map(item=>{
        console.log(item);
      })
    },
    addArea(item) {
      sessionStorage.setItem("area", item.name);
      this.userAddress = item.name;
      this.utils.go(-1);
      this.$toast.success("选择成功");
    },
    //内部方法
  },
  mounted() {
    this.userAddress = sessionStorage.getItem("area");
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