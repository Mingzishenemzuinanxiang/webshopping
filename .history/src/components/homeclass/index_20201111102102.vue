<template>
  <div >
      <div>标题</div>
      <div class="flex">
          <div>
              <img v-for="(item,index) in datas" :key="index" :src="item.image" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      title:{
          type:String,
          required:true
      },
      datas:{
        type:Array,
        required:true
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
.biaodan{
    position: absolute;
    width: 100%;
}
img{ 
    width: 100px;
    height: 100px;
}
</style>