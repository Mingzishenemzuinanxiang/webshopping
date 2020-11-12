<template>
  <div>
    <div v-if="!userinfo">你还没有登录</div>
    <div v-else>
      <van-swipe-cell
        v-for="(item, index) in goodsLists"
        :before-close="beforeClose"
        :key="index"
        :name="item.id"
      >
        <van-card
          :price="item.present_price"
          :title="item.name"
          :thumb="item.image"
        />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "collection",
  props: {},
  data() {
    return {
      goodsLists: null,
      userinfo: null,
    };
  },
  components: {
    //注册组件
  },
  methods: {
    beforeClose({ name, position, instance }) {
      switch (position) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: "确定删除吗？",
            })
            .then(() => {
              this.goodsLists = JSON.parse(
                localStorage.getItem(JSON.parse(this.userinfo)._id)
              ).filter(item=>{
                  return item._id!==name
              });
              localStorage.setItem(JSON.parse(this.userinfo)._id,JSON.stringify(this.goodsLists))
              instance.close();
            });
          break;
      }
    },

    del(item) {
      console.log(item);
    },
    //内部方法
  },
  mounted() {
    this.userinfo = localStorage.getItem("user");
    if (this.userinfo) {
      this.goodsLists = JSON.parse(
        localStorage.getItem(JSON.parse(this.userinfo)._id)
      );
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
.goods-card {
  margin: 0;
  // background-color: @white;
}

.delete-button {
  height: 100%;
}
</style>