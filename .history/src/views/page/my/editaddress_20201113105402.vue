<template>
  <div>
    <van-address-edit ref="addressFrom"
      :area-list="areaList"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      :address-info="form"
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
        form:{}
    };
  },
  components: {
    //注册组件
  },
  methods: {
      onSave(form){
        //   let form = this.$refs.addressFrom.data
        //   form.address = `${form.province}${form.city}${form.county}${form.addressDetail}`
          this.$api.setAddress(form).then(res=>{
              console.log(res);
              if(res.code===200){
                  this.$toast.success(res.msg)
                  this.utils.go(-1)
              }
          })
      },
    //内部方法
  },
  mounted() {
      this.form = JSON.parse(this.$route.params.data||this.$route.query.data) 
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