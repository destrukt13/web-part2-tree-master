'use strict'

const genRandHex = (len) => {
    const maxlen = 8
    const min = Math.pow(16, Math.min(len, maxlen) - 1)
    const max = Math.pow(16, Math.min(len, maxlen)) - 1
    const n = Math.floor(Math.random() * (max - min + 1)) + min

    let r = n.toString(16)

    while (r.length < len) {
        r = r + genRandHex(len - maxlen)
    }

    return r
}

const insertToString = (pos, string, stringToIns) => {
    return string.slice(0, pos) + stringToIns + string.slice(pos, string.length)
}

const insertionSort = nums => {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let tmp = nums[i]
        while (j >= 0 && nums[j] > tmp) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = tmp
    }

    return nums
}

const searchRepeat = arr =>
    arr.reduce((acc,el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})

const dayFromStartYear = () => {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}

//console.log(dayFromStartYear());
//console.log(searchRepeat(['a','a','b','c']))
//console.log(insertionSort([1,4,2,3,5]))
//console.log(insertToString(3, 'hello', 'hell'))
//console.log('#' + genRandHex(3))
