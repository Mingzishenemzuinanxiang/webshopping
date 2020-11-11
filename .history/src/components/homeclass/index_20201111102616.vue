<template>
  <div>
    <div>
      <div class="food"><span>1F</span>{{ title }}</div>
      <table class="tab" style="width: 185px">
        <tr
          v-for="(itme, index) in datas"
          :key="index"
          style="width: 183px"
          :class="{ box: index === 0 }"
        >
          <img :src="itme.image" style="width: 185px" />
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    title: {
      type: String,
      required: true,
    },
    datas: {
      type: Array,
      required: true,
    },
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
    color: #E03730;
    font-weight: 550;
    background-color: #EDEDED;

    span {
        border-radius: 10px;
        background-color: #E03730;
        color: rgb(231, 225, 225);
        font-size: 14px;
    }

}
</style>