import router from '../router/index';
import { Toast, Dialog } from 'vant';

export default {
    goDetails(ids) {
        router.push({
            name: 'goodsdetails',
            params: {
                id: ids,
            },
            query: {
                id: ids,
            },
        })
    },
    go(url) {
        router.go(url)
    },
    to(url) {
        router.push({
            name: url,
        })
    },
    //判断数组中是否存在，存在即删除，没有则添加
    delEeidList(arr, i, status) {
        let id = arr.findIndex(itme => itme._id === i._id);
        if (id < 0 && status) {
            arr.push(i);
        } else {
            arr.splice(id, 1);
        }
        return arr;
    },
    checkLogin(next, params) {
        let user = localStorage.getItem('user')
        if (!user) {
            Dialog.confirm({
                title: '未登录',
                message: '请问是否登录',
            }).then(
                this.to('login')
            ).catch(err => {

            })
        } else {
            next(params)
        }
    },
}