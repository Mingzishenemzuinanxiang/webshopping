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
    //商品分类
    getClassList(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "/classification?mallSubId=" + datas,
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
            method: "post",
            url: "/getCard",
            data: datas
        });
    },
    //添加到购物车
    setCart(datas) {
        return HttpRequest.getRequest({
            method: "post",
            url: "/addShop",
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
    //地址列表
    getAddressLists(datas) {
        return HttpRequest.getRequest({
            method: "get",
            url: "/getAddress",
            data: datas
        });
    },
    //默认地址
    getDefaultAddress(datas) {
        return HttpRequest.getRequest({
            method: "get",
            url: "/getDefaultAddress",
            data: datas
        });
    },
    //修改用户信息
    editUserInfo(datas) {
        return HttpRequest.getRequest({
            method: "post",
            url: "/saveUser",
            data: datas
        });
    },
    //提交订单
    getBybuy(datas) {
        return HttpRequest.getRequest({
            method: "post",
            url: "/order",
            data: datas
        });
    },
    gemyOrder(datas) {
        return HttpRequest.getRequest({
            method: "get",
            url: "/myOrder",
            data: datas
        });
    },
    getEvaluated(datas) {
        return HttpRequest.getRequest({
            method: "get",
            url: "/tobeEvaluated",
            data: datas
        });
    },

};
export { Api };