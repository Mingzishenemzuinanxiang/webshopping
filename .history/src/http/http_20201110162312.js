import axios from "axios";
import { Toast, Dialog } from 'vant'
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 5000; //请求超时5秒

let HttpRequest = {
    getRequest({ url, data = {}, method = "GET" }) {
        return new Promise((resolve, reject) => {
            this._getRequest(url, resolve, reject, data, method);
        });
    },
    _getRequest(url, resolve, reject, data = {}, method = "GET") {
        let format = method.toLocaleLowerCase() === 'get' ? 'params' : 'data';
        axios({
            url: url,
            method: method,
            [format]: data,
            header: {
                "content-type": "application/json"
            }
        }).then(res => {
            if (res.data.code === -1) {

                Dialog.confirm({
                        title: '标题',
                        message: '弹窗内容',
                    })
                    .then(() => {
                        // on confirm
                    })
                    .catch(() => {
                        // on cancel
                    });
                Toast.fail('请登录')
            }
            resolve(res.data)

        }).catch(() => {
            reject();
            Toast.fail('请求出错')
        })
    }
};
export { HttpRequest };