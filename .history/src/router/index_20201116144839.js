import Vue from 'vue'
import VueRouter from 'vue-router'
import bottomView from '../views/layout/common/bottom.vue'
import navView from '../views/layout/nav/index.vue'

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
                    import ('@/views/page/home/type.vue'),
                meta: {
                    title: "商品分类",
                    path: "type",
                },
            }, {
                path: '/cart',
                name: 'cart',
                component: () =>
                    import ('@/views/page/home/cart.vue'),
                meta: {
                    title: "购物车",
                    path: "cart",
                },
            }, {
                path: '/my',
                name: 'my',
                component: () =>
                    import ('@/views/page/home/my'),
                meta: {
                    title: "个人中心",
                    path: "my",
                },
            },
        ]
    },
    {
        path: '/details',
        name: 'goodsdetails',
        component: () =>
            import ('@/views/page/goods/details'),
        meta: {
            title: "商品详情",
            path: "details",
        },
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

    {
        path: '/goos',
        component: navView,
        children: [{
                path: '/collection',
                name: 'collection',
                component: () =>
                    import ('@/views/page/my/collection'),
                meta: {
                    title: "我的收藏",
                },
            }, {
                path: '/addresslists',
                name: 'addresslists',
                component: () =>
                    import ('@/views/page/my/addresslists'),
                meta: {
                    title: "地址列表",
                },
            },
            {
                path: '/editaddress',
                name: 'editaddress',
                component: () =>
                    import ('@/views/page/my/editaddress'),
                meta: {
                    title: "编辑地址",
                },
            },
            {
                path: '/byorder',
                name: 'byorder',
                component: () =>
                    import ('@/views/page/order/byorder'),
                meta: {
                    title: "订单结算",
                },
            },
            {
                path: '/editaddress',
                name: 'editaddress',
                component: () =>
                    import ('@/views/page/my/editaddress'),
                meta: {
                    title: "修改地址",
                },
            },
            {
                path: '/setup',
                name: 'setup',
                component: () =>
                    import ('@/views/page/my/setup'),
                meta: {
                    title: "个人资料",
                },
            },
            {
                path: '/browse',
                name: 'browse',
                component: () =>
                    import ('@/views/page/my/browse'),
                meta: {
                    title: "我的浏览",
                    message: "您还没有浏览过商品详情,快去看看吧"

                },
            },

        ]
    },


    {
        path: '*',
        name: 'error',
        component: () =>
            import ('@/views/error/index.vue'),
        meta: {
            title: "跑错地方了",
        },
    }
]

//路由静止
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


router.beforeEach((to, from, next) => {

        next();
    }),


    const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })

export default router