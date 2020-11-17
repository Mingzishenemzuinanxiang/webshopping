<template>
  <div>
    <div class="beijing">这里是图片</div>
    <div>
      <div class="kuang">
        <div >
          <van-tabs v-model="active">
            <van-tab title="未评价">
              <van-card v-for="(item,index) in lists.list" :key="index"
                desc="描述信息"
                :title="item.name"
                :thumb="item.image_path"
              >
                <template #footer>
                  <van-button type="danger" size="mini" @click="add(item)">点击评价</van-button>
                </template>
              </van-card>
            </van-tab>
            <van-tab title="已评价">
                
                <van-card v-for="(item,index) in lists1.list" :key="index"
                desc="描述信息"
                :title="item.name"
                :thumb="item.image_path"
              />
               </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "evaluate",
  props: {},
  data() {
    return {
      lists: [],
      active: 0,
      lists1:[]
    };
  },
  components: {
    //注册组件
  },
  methods: {
      add(item){
          this.$store.commit('add',item)
        console.log(this.store);
        
      },
    //内部方法
  },
  mounted() {
    this.$api.getEvaluated().then((res) => {
      if (res.code === 200) {
        this.lists = res.data;
      }
    });
    this.$api.getalreadyEvaluated().then(res=>{
        if (res.code === 200) {
        this.lists1 = res.data;
      }
    })
   
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
.beijing {
  background: url("../../../assets/loading.png");
  height: 250px;
}
.kuang {
  width: 69.667vw;
  height: 26.667vw;
  border-radius: 2.933vw;
  background-color: red;
  border: 1px solid red;
  position: relative;
  left: 51px;
  top: -24px;
}
</style>