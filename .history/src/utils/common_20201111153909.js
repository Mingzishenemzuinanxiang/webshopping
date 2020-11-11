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
        url = url ? url : -1
        router.go(url)
    }
}