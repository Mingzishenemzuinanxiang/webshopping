<template>
  <div>
    <div class="bei">
      <div class="mag-20">
        <van-button round type="default" @click="gourl"
          ><van-icon name="arrow-left"
        /></van-button>
      </div>
      <div class="form">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
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
      username:'',
      password:'',

    };
  },
  components: {
    //注册组件
  },
  methods: {
    onSubmit(){

    },
    gourl() {
      this.$router.go(-1);
    },
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
.bei {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/login.jpg");
  .mag-20 {
    margin: 20px;
  }
  .form {
    background-color: seashell;
  }
}
</style>