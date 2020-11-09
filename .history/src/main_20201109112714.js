import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//请求
// import { post, get } from './utils/https'
import { Api } from './http/request'
//定义全局变量
Vue.prototype.$api = Api;

//ui
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')