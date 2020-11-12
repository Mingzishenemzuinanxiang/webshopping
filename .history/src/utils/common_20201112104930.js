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
    delEeidList(arr, i) {
        let id = arr.findIndex(itme => {
            return i === itme
        })
        console.log(i);
        console.log(id);
        console.log(arr);
        if (id >= 0) {
            return arr.splice(id, 1)
        } else {
            return arr.push(i)
        }
    }
}