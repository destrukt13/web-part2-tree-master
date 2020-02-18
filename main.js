'use strict'

function genRandHex (len) {
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

console.log(genRandHex(3))
