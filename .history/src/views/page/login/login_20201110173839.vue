<template>
  <div>
    <div class="bei">
      <div class="mag-20">
        <van-button round type="default" @click="gourl"
          ><van-icon name="arrow-left"
        /></van-button>
      </div>
      <div class="form">
        <van-form ref="form">
          <van-field
            v-model="info.nickname"
            name="用户名"
            placeholder="用户名"
          />
          <van-field
            v-model="info.password"
            type="password"
            name="密码"
            placeholder="密码"
          />

          <van-field
            v-model="info.mobile"
            name="手机号码"
            label="手机号码"
            placeholder="仅注册使用"
          />
          <van-field
            type="text"
            name="验证码"
            label="短信验证码"
            placeholder="仅注册使用"
          />
          <div class="butt">
            <van-button type="primary" > 发送验证码 </van-button>
          </div>

          <van-field
            v-model="info.verify"
            type="text"
            name="验证码"
            label="验证码"
            placeholder="验证码"
          />
          <p v-html="img" class="ver-img"></p>

          <div style="margin: 16px">
            <van-button type="primary" native-type="submit" @click="save"> 提交 </van-button>
            <van-button type="info" native-type="submit" @click="reg"> 注册 </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
  data() {
    return {
      info: {
        username: "",
        password: "",
        verify:""
      },
      img: "",
    };
  },
  components: {
    //注册组件
  },
  methods: {
    save(){
      console.log(1);
    },
    reg(){
       this.$api.getRegister(this.info).then(res=>{
          if (res.coode===200) {
            this.$toask(res.msg)
            localStorage.setItem('user',JSON.stringify(res.userInfo))
          }
       })
    },
    gourl() {
      this.$router.go(-1);
    },
    //内部方法
  },
  mounted() {
    this.$api.getVerify().then((res) => {
      this.img = res;
    });
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
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/login.jpg");
  .mag-20 {
    margin: 20px;
  }
  .form {
    position: relative;
    top: 26%;
    background-color: seashell;
    width: 294px;
    margin: 0 auto;
  }
}
.ver-img {
  position: absolute;
  right: 1px;
  bottom: 67px;
}
.butt {
  position: absolute;
  width: 122px;
  z-index: 9;
  bottom: 111px;
  right: -20px;
}
</style>