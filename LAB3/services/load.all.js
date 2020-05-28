const Load = require('./../models/load')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
      Load.find({})
      .exec(function (err, locations) {
        if (err) {
          reject(err)
        } else {
          console.log(locations)
          resolve(locations)
        }
      })
  })
}
