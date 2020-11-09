import { HttpRequest } from "./http";
let Api = {
    getAllarticleList(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "article/allArticle",
            data: datas
        });
    },
};
export { Api };