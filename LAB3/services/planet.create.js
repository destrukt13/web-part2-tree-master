const Planet = require('./../models/planet')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const planet = new Planet({
    name: data.name,
    cap: data.cap,
    weight: data.weight
  })

  return new Promise((resolve, reject) => {
    planet.save(function (err, createdLocation) {
      if (err) {
        reject(err)
      } else {
        resolve(createdLocation)
      }
    })
  })
}
