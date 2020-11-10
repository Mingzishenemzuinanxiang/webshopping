import dayjs from 'dayjs';

export function toTime(date, format) {
    format = format || "YYYY-MM-DD HH:mm:ss"
    return dayjs(date).format(format);
};

export function arrGroup(arr, fields) {
    let lists = [];
    arr.map((item) => {
        lists.push({})
    })

}