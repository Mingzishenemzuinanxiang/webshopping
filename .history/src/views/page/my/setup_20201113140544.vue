<template>
  <div>
    <van-cell title="头像" center size="5">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-image round width="5rem" height="5rem" :src="userInfo.avatar" />
      </template>
    </van-cell>
    <van-cell-group>
      <van-form validate-trigger="onSubmit" ref="user"  @submit="submit">
        <van-field
          v-model="userInfo.username"
          disabled
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="userInfo.nickname"
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true, message: '请输入昵称' }]"
        />
        <van-field
          readonly
          clickable
          label="性别"
            :value="userInfo.gender"
          placeholder="点击选择性别"
          @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm2"
            @cancel="showPicker1 = false"
          />
        </van-popup>
        <van-field
          v-model="userInfo.eamil"
          label="邮箱"
          placeholder="请输入邮箱"
        />
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="userInfo.value"
          label="时间选择"
          placeholder="点击选择时间"
          @click="showPicker = true"
          :rules="[{ required: true, message: '请选择时间' }]"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            type="date"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      columns: ["男", "女", "其他"],
      userInfo: {
        gender: "",
        year: "",
        month: "",
        day: "",
        nickname: "",
        id: "",
      },
      showPicker: false,
      showPicker1: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onConfirm(time) {
      this.userInfo.value = this.utils.dateFormat(time);
      console.log(this.userInfo.value);
      this.showPicker = false;
    },
    onConfirm2(item){
        this.userInfo.gender=item
        this.showPicker1 = false;
    },
    submit(){
      this.userInfo.id = this.userInfo._id
      this.$api.editUserInfo(this.userInfo).then(res=>{
         console.log(res);
         if (res.code===20) {
           this.$toast.success(res.msg)
           this.utils.go(-1)
         } else {
            this.$toast.success(res.msg)
         }
      })
    },
    //内部方法
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));

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