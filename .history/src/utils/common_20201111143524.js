import dayjs from 'dayjs';

export function toTime(date, format) {
    format = format || "YYYY-MM-DD HH:mm:ss"
    return dayjs(date).format(format);
};

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