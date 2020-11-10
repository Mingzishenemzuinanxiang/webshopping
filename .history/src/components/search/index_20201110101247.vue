<template>
  <div>
    <van-row>
      <!-- 地址栏 -->
      <van-col span="5">
        <div>
          <span class="font-s"
            >{{ address.city }} <van-icon name="location"
          /></span>
        </div>
      </van-col>
      <!-- 地址栏 -->
      <van-col span="19">
        <van-search
          v-model="value"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
          @focus="search"
        >
          <template #action slot="soecp">
            <button @click="onSearch"><span class="font-s">搜索</span></button>
          </template>
          </van-search>
      </van-col>
    </van-row>
    <div v-show="viewsStatus">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell ></van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      address: {
        city: "获取中",
      },
      value: "",
      viewsStatus:false
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onSearch() {
      console.log(1);
      if (this.value==="") {
        this.$toask.fail('请输入需要搜索的内容')
      }
      this.$api.getSearchList({value:this.value}).then(res=>{

      })
    },
    search() {
      this.viewsStatus = this.viewsStatus ? false:true
      this.$emit('views',"0")
    },
    onComplete(data) {
      this.$set(this.address, "city", data.addressComponent.city);
    },
    onError(data) {
      this.$toask.fail("没有找到你的位置");
    },

    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
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