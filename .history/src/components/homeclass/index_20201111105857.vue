<template>
  <div>
    <div>
      <div class="food">
        <span>{{ title.loft }}</span> {{ title.title }}
      </div>
      <table class="tab">
        <tr
          v-for="(itme, index) in datas"
          :key="index"
          style="width: 183px"
          :class="{ box: index === 0 }"
        >
          <van-image
            :src="itme.image"
            @click="tourl(itme)"
            class="img"
          />
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    datas: {
      type: Array,
    },
    title: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    tourl(item) {
      console.log(item);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.tab tr {
  border: 1px solid rgb(231, 225, 225);
  float: left;
}

.box {
  height: 201.8px;
}

.food {
  text-align: center;
  padding: 10px 0;
  font-size: 15px;
  color: #e03730;
  font-weight: 550;
  background-color: #ededed;

  span {
    border-radius: 10px;
    background-color: #e03730;
    color: rgb(231, 225, 225);
    font-size: 14px;
  }
}
.img{
    width: 185px
}
</style>
