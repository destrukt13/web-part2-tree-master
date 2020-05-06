const insertToString = (pos, string, stringToIns) => {
    return string.slice(0, pos) + stringToIns + string.slice(pos, string.length)
}

module.exports = {'insertToString': insertToString};