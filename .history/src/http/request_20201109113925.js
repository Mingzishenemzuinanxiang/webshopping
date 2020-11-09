import { HttpRequest } from "./http";
let Api = {
    getAllarticleList(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "article/allArticle",
            data: datas
        });
    },
};
export { Api };