import router from '../router/index';
import { Toast, Dialog } from 'vant';
import { Api } from '../http/request'

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
    //返回这一页
    go(url) {
        router.go(url)
    },
    //去哪个页面
    to(url) {
        router.push({
            name: url,
        });
    },
    //验证是否登录
    checkLogin() {
        let user = localStorage.getItem('user');
        let info = null;
        Api.getUserInfo().then(res => {
            if (res.code === 200) {
                localStorage.setItem('user', JSON.stringify(res.userInfo))
                info = true;
            }
        });
        if (!user && !info) {
            Dialog.confirm({
                title: '未登录',
                message: '请问是否登录',
            }).then(res => {
                this.to('login')
            }).catch(err => {
                return;
            })
        } else {
            // next(params)
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
        let name = `local-${user.username}${key}`;
        let info = localStorage.getItem(name);
        if (!info) {
            localStorage.setItem(name, JSON.stringify([value]))
        } else {
            let k = true;
            let arr = JSON.parse(info)
            switch (key) {
                case 'search':
                case 'record':
                    arr.map(item => {
                        if (item === value) {
                            k = false
                        }
                    })
                    k && arr.push(value);
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
        if (!user) {
            return []
        }
        let arr = JSON.parse(localStorage.getItem(`local-${user.username}${key}`)) ? JSON.parse(localStorage.getItem(`local-${user.username}${key}`)) : []
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