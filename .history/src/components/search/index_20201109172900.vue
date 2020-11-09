<template>
  <div>
    <van-row>
      <!-- 地址栏 -->
      <van-col span="5">
          <div>
              <span class="搜索">{{ address.city }} <van-icon name="location" /></span>
          </div>
          
      </van-col>
      <!-- 地址栏 -->
      <van-col span="19">
        <van-search
          v-model="value"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
        >
          <template #action>
            <div @click="onSearch"><span class="font-s">搜索</span> </div>
          </template></van-search
        >
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      address: {
        city: "获取中",
      },
      value: "",
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onSearch() {},
    onComplete(data) {
      this.$set(this.address, "city", data.addressComponent.city);
    },
    onError(data) {
      this.$toask.fail("没有找到你的位置");
    },
    //内部方法
  },

  mounted() {
    //生命周期--已加载
    AMap.plugin("AMap.Geolocation", () => {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB",
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", this.onComplete);
      AMap.event.addListener(geolocation, "error", this.onError);

      // function onComplete(data) {
      //   // data是具体的定位信息
      //   this.$set(this.address, "city", data.addressComponent.city);
      //   console.log(this.address);
      // }
    });
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