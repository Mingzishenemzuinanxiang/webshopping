import router from '../router/index';
import { Toast, Dialog } from 'vant';
import dayjs from 'dayjs';

export default {
    // 去详情
    goDetails(ids) {
        router.push({
            name: 'goodsdetails',
            params: {
                id: ids,
            },
            query: {
                id: ids,
            },
        });
    },
    //时间格式化
    dateFormat(date, format = "YYYY-MM-DD") {
        return dayjs(date).format(format);
    },
    todata({ url, data }) {
        router.push({
            name: url,
            query: {
                data,
            },
            params: {
                data
            }
        });
    },
    //提示信息
    message(res, go) {
        if (res.code === 200) {
            Toast.success(res.msg)
            if (go) {
                setTimeout(() => { router.go(go); }, 1000)
            }
        } else {
            Toast.fail(res.msg)
        }
    },
    //返回这一页
    go(url) {
        setTimeout(() => {
            router.go(url)
        }, 1000)
    },
    //去哪个页面
    to(url) {
        router.push({
            name: url,
        });
    },

    checkLogin(next, params) {
        let user = localStorage.getItem('user')
        if (!user) {
            Dialog.confirm({
                title: '未登录',
                message: '请问是否登录',
            }).then(res => {
                this.to('login')
            }).catch(err => {
                return;
            })
        } else {
            next(params)
        }
    },
    //判断数组中是否存在，存在即删除，没有则添加
    delEeidList(arr, i) {
        let id = arr.findIndex(itme => itme._id === i._id);
        if (id < 0) {
            arr.push(i);
        } else {
            arr.splice(id, 1);
        }
        return arr;
    },
    //添加资料到本地缓存
    //搜索，浏览记录
    addLocalStorage(key, value) {

        let user = JSON.parse(localStorage.getItem('user'))
        let name = user ? `local-${user.username}${key}` : `local-localhost${key}`;
        let info = localStorage.getItem(name);
        if (!info) {
            localStorage.setItem(name, JSON.stringify([value]))
        } else {
            let k = false;
            let arr = JSON.parse(info)
            switch (key) {
                case 'search':
                case 'record':
                    let i = {
                        _id: "5fa8dde17fa51c19d8f26895",
                        amount: 10000,
                        create_time: "1512208900930",
                        detail: "<img src="
                        http: //images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083412_9293.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083413_8828.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083413_7855.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083413_6011.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083413_1189.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083413_2952.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083414_9479.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083414_3434.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083414_9342.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083414_9808.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083414_7532.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083415_6988.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083415_2933.jpg" width="100%" height="auto" alt="" /><img src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180411/20180411083415_8392.jpg" width="100%" height="auto" alt="" />",
                            goods_serlal_number: "6933179230104",
                        id: "238bc2e023844769a6b67d9a4c04b2ea",
                        image: "http://images.baixingliangfan.cn/shopGoodsImg/20180411/20180411083404_6619.jpg",
                        image_path: "http://images.baixingliangfan.cn/compressedPic/20180411083404_6619.jpg",
                        name: "纳美小苏打源生护龈牙膏3010/支",
                        orl_price: 16.8,
                        present_price: 16.8,
                        shop_id: "402880e860166f3c0160167897d60002",
                        sub_id: "2c9f6c94621970a801626a363e5a0176",
                        update_time: "1524532141539",
                        __v: 0,
                        _id: "5fa8dde17fa51c19d8f26895"
                    }


                    // arr.map(item => {
                    //     if (item == value) {
                    //         k = false
                    //     } else {
                    //         k = true
                    //     }
                    // })
                    if (k) arr.push(value);
                    break;
                case 'collection':
                    arr = this.delEeidList(arr, value);
                    break;
                default:
                    break;
            }
            localStorage.setItem(name, JSON.stringify(arr));
        }
    },
    //查找缓存
    getLocalStorage(key) {
        let user = JSON.parse(localStorage.getItem('user'))
        let arr = [];
        if (user) {
            arr = JSON.parse(localStorage.getItem(`local-${user.username}${key}`));
        }
        return arr;
    },
    delLocalStorage(key, val = null) {
        let user = JSON.parse(localStorage.getItem('user'))
        let name = `local-${user.username}${key}`;
        if (val) {
            let info = JSON.parse(localStorage.getItem(name));
            info.splice(val, 1)
            localStorage.setItem(name, JSON.stringify(info));
        } else {
            localStorage.removeItem(name);
        }
    },
}