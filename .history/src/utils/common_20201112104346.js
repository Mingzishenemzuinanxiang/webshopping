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
        console.log(id);
        if (id >= 0) {
            return arr.filter(item => {
                return item !== i
            })
        } else {
            return arr.push(i)
        }
    }
}