import { HttpRequest } from "./http";
let Api = {
    // 获取评价标签
    getElvaluateTag(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "API地址",
            data: datas
        });
    },

    getAllarticleList(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "article/allArticle",
            data: datas
        });
    },
};
export { Api };