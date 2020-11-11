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
    //修改购物车内参数
    getEditCart(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "/editCart",
            data: datas
        });
    },
    //购物车信息
    getCartLists(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "/getCard",
            data: datas
        });
    },
    //删除购物车
    getDelCart(datas) {
        return HttpRequest.getRequest({
            method: "post",
            url: "/deleteShop",
            data: datas
        });
    },
};
export { Api };