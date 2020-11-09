import { HttpRequest } from "./http";
let Api = {
    getHome(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "/recommend",
            data: datas
        });
    },
};
export { Api };