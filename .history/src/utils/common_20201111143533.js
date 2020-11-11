import router from '../router/index';

export function goDetails(ids) {
    router.push({
        name: 'goodsdetails',
        params: {
            id: ids,
        },
        query: {
            id: ids,
        },
    })
}