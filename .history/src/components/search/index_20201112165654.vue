<template>
  <div>
    <van-row>
      <!-- 地址栏 -->
      <van-col span="5">
        <div class="map">
          <span class="font-s font-weizhi"
            >{{ address.city }} <van-icon name="location"
          /></span>
        </div>
      </van-col>
      <!-- 地址栏 -->
      <van-col span="19">
        <van-search
          v-model.trim="value"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
          disabled
          @click="search"
        >
          <template #action>
            <div><span class="font-s">搜索</span></div>
          </template>
        </van-search>
      </van-col>
    </van-row>

    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '100%' }"
      @close="close"
    >
      <van-row>
        <van-col>
          <van-search
            v-model="value"
            show-action
            :label="address.city"
            placeholder="请输入搜索关键词"
            @search="onSearch"
          >
            <template #action>
              <div @click="onSearch"><span class="font-s">搜索</span></div>
            </template>
          </van-search>
        </van-col>
      </van-row>
      <div>
        <van-row>
          <van-col span="20">
            <van-button
              plain
              hairline
              type="default"
              v-for="item in history"
              :key="item"
              @click="dianji(item)"
              >{{ item }}</van-button
            >
          </van-col>
          <van-col span="4">
            <van-button
              v-show="history.length > 0"
              icon="delete"
              type="warning"
              @click="delhistory"
          /></van-col>
        </van-row>
        <van-list>
          <van-button
            plain
            hairline
            type="default"
            v-for="(item, index) in list"
            :key="index"
            @click="utils.goDetails(item.id)"
          >
            <!-- <div>
              <img :src="item.image" alt="" width="100" height="100" />
            </div> -->
            <div><span class="font-s " v-html="item.nickname"></span></div>
          </van-button>
        </van-list>
      </div>
    </van-popup>
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
      viewsStatus: false,
      history: [], //搜索历史
      show: false,
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onSearch() {
      if (this.value == "") {
        this.$toast.fail("请输入需要搜索的内容");
        return;
      } else {
        this.$api.getSearchList({ value: this.value }).then((res) => {
          if (res.code === 200) {
            this.list = res.data.list;
            this.list.map((item) => {
              this.$set(
                item,
                "nickname",
                item.name.replace(
                 eval(`/${this.value}/g`),
                  `<span style="color:red">${this.value}</span>`
                )
              );
            });
            this.utils.addLocalStorage('search',this.value);
            this.history.push(this.value)
          }
        });
      }
    },
    dianji(item) {
      this.value = item;
      this.onSearch();
    },

    close() {
      console.log(2);
    },
    delhistory() {
      this.utils.delLocalStorage('search')
      this.history = [];
    },

    search() {
      this.list = [];
      this.show = this.show = true;
      // this.$emit("views", "0");
    },
    //添加历史
    addlishi() {
      this.history = this.utils.getLocalStorage('search')
    },
    //获取地址
    onComplete(data) {
      this.$set(this.address, "city", data.addressComponent.city);
    },
  },

  mounted() {
    this.addlishi();
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
.via {
  border-bottom: 1px solid #ccc !important;
  padding: 14px;
  border-color: #7c7878 !important;
}
.map {
  position: absolute;
  width: 83px;
  height: 54px;
  text-align: center;
  line-height: 27px;
  .font-weizhi{
    position: relative;
    top: 12px;
  }
}

</style>