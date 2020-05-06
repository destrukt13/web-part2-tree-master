const searchRepeat = arr =>
    arr.reduce((acc,el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})

module.exports = {'searchRepeat': searchRepeat};