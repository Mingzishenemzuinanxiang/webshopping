import axios from "axios";
import { Toast } from 'vant'
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
        axios.defaults
        axios({
            url: url,
            method: method,
            [format]: data,
            header: {
                "content-type": "application/json"
            }
        }).then(res => {
            resolve(res.data)
        }).catch(() => {
            reject();
            Toast.fail('请求出错')
        })
    }
};
export { HttpRequest };