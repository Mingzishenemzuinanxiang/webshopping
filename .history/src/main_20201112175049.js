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

import utils from './utils/common'
Vue.prototype.utils = utils;
//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './assets/error.png',
    loading: './assets/loading.gif',
    attempt: 1
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')