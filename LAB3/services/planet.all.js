const Planet = require('./../models/planet')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
      Planet.find({})
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
