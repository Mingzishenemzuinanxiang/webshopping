import router from '../router/index';

export default {
    goDetails(ids) {
        router.push({
            name: 'goodsdetails',
            params: {
                id: ids,
            },
            query: {
                id: ids,
            },
        })
    },
    go(url) {
        router.go(url)
    },
    to(url) {
        router.push({
            name: url,
        })
    },
    delEeidList(arr, i, status) {
        let id = arr.findIndex(itme => itme._id === i._id);
        if (id < 0 && status) {
            arr.push(i);
        } else {
            arr.splice(id, 1);
        }
        return arr;
    },
}