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
    }
};
export { Api };