const Load = require('./../models/load')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const load = new Load({
    name: data.name,
    code: data.code,
    weight: data.weight
  })

  return new Promise((resolve, reject) => {
    load.save(function (err, createdLocation) {
      if (err) {
        reject(err)
      } else {
        resolve(createdLocation)
      }
    })
  })
}
