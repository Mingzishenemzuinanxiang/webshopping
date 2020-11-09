import Vue from 'vue'
import VueRouter from 'vue-router'
import bottomView from '../views/layout/common/bottom.vue'

Vue.use(VueRouter)

const routes = [{
        path: '',
        component: bottomView,
        children: [{
                path: '',
                name: 'home',
                component: () =>
                    import ('@/views/page/home/home'),
                meta: {
                    title: "首页",
                    path: "home",
                },
            },
            {
                path: '/type',
                name: 'type',
                component: () =>
                    import ('@/views/home/Home'),
                meta: {
                    title: "商品分类",
                    path: "type",
                },
            }, {
                path: '/cart',
                name: 'cart',
                component: () =>
                    import ('@/views/home/Home'),
                meta: {
                    title: "购物车",
                    path: "cart",
                },
            }, {
                path: '/my',
                name: 'my',
                component: () =>
                    import ('@/views/home/Home'),
                meta: {
                    title: "个人中心",
                    path: "cart",
                },
            },
        ]
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