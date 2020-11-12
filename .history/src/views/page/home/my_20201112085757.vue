<template>
  <div>
    <div>
      <navindex title="个人中心"></navindex>
    </div>
    <div class="bei">
      <div v-if="userinfo">
        <div class="set"><van-icon name="setting-o" size="30" /></div>
        <div class="pho">
          <!-- <img :src="userinfo.avatar" alt="" /> -->
          <!-- <van-image round :src="userinfo.avatar" /> -->
          <van-image
            round
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=911096125,954471894&fm=26&gp=0.jpg"
          />

          <div class="font">欢迎你:{{ userinfo.nickname }}</div>
          <div>
            <van-button plain hairline type="warning" @click="signout"
              >退出登录</van-button
            >
          </div>
        </div>
      </div>
      <div v-else>
        <div class="pho">
          <!-- <img :src="userinfo.avatar" alt="" /> -->
          <van-image
            round
            src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
          />

          <div>
            <van-button plain hairline type="warning" @click="utils.to('login')"
              >注册/登录</van-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="biaoti">
        <van-row>
          <van-col span="5">span: 8</van-col>
          <van-col span="5">span: 8</van-col>
          <van-col span="5">span: 8</van-col>
          <van-col span="5">span: 8</van-col>
          <van-col span="5">span: 8</van-col>
        </van-row>
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
        if (res.code === 200) {
          this.userinfo = res.userInfo;
          localStorage.setItem("user", JSON.stringify(this.userinfo));
        }
      });
    },
    signout() {
      this.$api.getloginOut().then((res) => {
        this.$toast.success("退出成功");
        localStorage.removeItem("user");
        this.userinfo = "";
      });
    },
    //内部方法
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (user !== "undefined" && user) {
      this.userinfo = JSON.parse(user);
    } else {
      this.getUser();
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
.bei {
  position: absolute;
  background-color: #f37766;
  width: 100%;
  height: 40%;
  .set {
    position: absolute;
    right: 15px;
    top: 16px;
  }
}
.pho {
  position: absolute;
  width: 100px;
  height: 100px;
  // background-color: rebeccapurple;
  border-radius: 50%;
  top: 20px;
  left: 134px;

  img {
    width: 100%;
    border-radius: 50%;
  }
}
.biaoti {
  position: absolute;
  top: 48%;
  width: 100%;
  background-color: red;
  height: 10%;
}
.font {
  font-size: 16px;
}
</style>