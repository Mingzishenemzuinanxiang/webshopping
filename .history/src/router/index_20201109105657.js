import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/login')
    }
]

//路由静止
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


router.beforeEach((to, form, next) => {
    // document.title = to.meta.title
    // if (!localStorage.getItem('user') && to.name !== 'login' && to.name !== 'register') {
    //     next({ name: "login" })
    // }
    // if (to.path === "/") {
    //     next({ name: "home" })
    // }
    next()
})

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router