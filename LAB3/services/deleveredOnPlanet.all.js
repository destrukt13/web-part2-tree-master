const Location = require('./../models/deliveredOnPlanet')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
    Location.find({})
      .populate('load')
      .populate('planet')
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
