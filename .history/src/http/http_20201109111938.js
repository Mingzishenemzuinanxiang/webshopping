import axios from "axios";
import vant from ''

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
            resolve(res.data)
        }).catch(() => {
            reject();

        })
    }
};
export { HttpRequest };