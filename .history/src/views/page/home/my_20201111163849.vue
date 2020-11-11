<template>
  <div>
    <div>
      <navindex title="个人中心"></navindex>
    </div>
    <div class="bei">
      <div class="pho"><img :src="userinfo.avatar" alt="" /></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import navindex from "@/components/nav/nav.vue";

export default {
  name: "my",
  props: {},
  data() {
    return {
      userinfo: "",
    };
  },
  components: {
    navindex,
    //注册组件
  },
  methods: {
    getUser() {
      this.$api.getUserInfo().then((res) => {
        this.userinfo = res.data;
      });
    },
    //内部方法
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    user ? (this.userinfo = user) : getUser();
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
.bei {
  position: absolute;
  background-color: #f37766;
  width: 100%;
  height: 40%;
}
.pho {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  border-radius: 50%;
  top: 20px;
  left: 134px;

  img {
    width: 100%;
    border-radius: 50%;
  }
}
</style>