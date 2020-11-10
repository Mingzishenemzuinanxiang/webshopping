import { HttpRequest } from "./http";
let Api = {
    // 主页信息
    getHome(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "/recommend",
            data: datas
        });
    },
    //搜索信息
    getSearchList(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/search",
            data: datas
        });
    },
    //商品信息
    getGoodsData(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "/goods/one?id=" + datas,
            data: datas
        });
    },
    getCollection(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/collection",
            data: datas
        });
    },
    //验证码
    getVerify(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "/verify",
            data: datas
        });
    },
    //注册
    getRegister(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/register",
            data: datas
        });
    },
    //登录
    getLogin(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/login",
            data: datas
        });
    },
    //退出
    getloginOut(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/loginOut",
            data: datas
        });
    },
    //验证收藏
    getisCollection(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/isCollection",
            data: datas
        });
    },
    //取消收藏
    getcancelCollection(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/cancelCollection",
            data: datas
        });
    },
    //用户信息
    getUserInfo(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/queryUser",
            data: datas
        });
    },
};
export { Api };