<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaLists from '@/utils/area'
export default {
  name: "editaddress",
  props: {},
  data() {
    return {
        areaList:areaLists,
        searchResult: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
      onSave(){},
      onDelete(){},
      onChangeDetail(){},
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
</style>