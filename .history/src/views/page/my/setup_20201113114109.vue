<template>
  <div>
    <van-cell title="头像" center size="5">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-image round width="5rem" height="5rem" :src="userInfo.avatar" />
      </template>
    </van-cell>
    <van-cell-group>
      <van-form @submit="onSubmit">
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
        />
        <van-field
          v-model="userInfo.gender"
          label="性别"
          placeholder="请输入性别"
        />
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
      userInfo: {},
      showPicker: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
    };
  },
  components: {
    //注册组件
  },
  methods: {
    onConfirm(time) {
      this.userInfo.value = time;
      this.showPicker = false;
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