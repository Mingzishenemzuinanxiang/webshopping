import { HttpRequest } from "./http";
let Api = {
    getHome(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "/recommend",
            data: datas
        });
    },
    getSearchList(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/search",
            data: datas
        });
    },
    getGoodsData(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "/goods/one?id=" + datas,
            data: datas
        });
    }
};
export { Api };