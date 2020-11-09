import Vue from 'vue'
import VueRouter from 'vue-router'
import bottomView from '../layout/common/bottom.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: bottomView,
        children: [{
            path: 'home',
            name: 'home',
            component: () =>
                import ('@/views/page/'),
            meta: {
                title: "首页",
                path: "home",
            },
        }, {
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home/Home'),
            meta: {
                title: "专业管理系统0.1bate",
                path: "home",
            },
        }, {
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home/Home'),
            meta: {
                title: "专业管理系统0.1bate",
                path: "home",
            },
        }, ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/page/login/login'),
        meta: {
            title: "登录",
        },
    },
]

//路由静止
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


// router.beforeEach((to, form, next) => {
// document.title = to.meta.title
// if (!localStorage.getItem('user') && to.name !== 'login' && to.name !== 'register') {
//     next({ name: "login" })
// }
// if (to.path === "/") {
//     next({ name: "home" })
// }
// next()
// })

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router