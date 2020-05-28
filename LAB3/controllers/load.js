'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
const locationTypeAllService = require('./../services/load.all')
const locationTypeCreateService = require('./../services/load.create')
// const locationTypeByIdService = require('./../services/load.byId')
// const locationTypeUpdateService = require('./../services/load.update')
// const locationTypeDeleteService = require('./../services/load.delete')

module.exports = {
  index (req, res) {
    res.render('pages/load/index')
  },
  locationTypeList (req, res) {
    locationTypeAllService()
      .then(planets => {
        res.render('pages/load/list', {
          planets: planets
        })
      })
      .catch(error => {
        res.render('pages/load/list', {
          planets: [],
          errors: [{ msg: error.message }]
        })
      })
  },
  createLocationTypeForm (req, res) {
    res.render('pages/load/add')
  },
  postCreateLocationType: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    body('weight')
        .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res) => {
      const locationTypeData = req.body
      const errors = validationResult(req)

      if (errors.isEmpty()) {
        locationTypeCreateService(req.body)
          .then(locationTypeData => {
            req.flash('info', `Location Type "${locationTypeData.name}" is Added`)
            res.redirect('/load/list')
          })
          .catch(error => {
            res.render('pages/load/add', {
              newLocationType: locationTypeData,
              errors: [{ msg: error.message }]
            })
          })
      } else {
        res.render('pages/load/add', {
          newLocationType: locationTypeData,
          errors: errors.array()
        })
      }
    }
  ],
  updateLocationTypeForm (req, res, next) {
    locationTypeByIdService(req.params.id)
      .then(locationType => {
        if (locationType) {
          res.render('pages/load/update', { locationType: locationType })
        } else {
          const errorNotFound = new Error('Not found')
          errorNotFound.status = 404
          next(errorNotFound)
        }
      })
      .catch(error => {
        const errorServer = new Error(`Internal server error: ${error.message}`)
        errorServer.status = 500
        next(errorServer)
      })
  },
  putUpdateLocationType: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res, next) => {
      const locationTypeData = req.body

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        locationTypeUpdateService(locationTypeData)
          .then(locationType => {
            req.flash('info', `Location Type "#${locationType.id} ${locationType.name}" is Updated`)
            res.redirect('/load/list')
          })
          .catch(error => {
            res.render('pages/load/update', {
              locationType: {},
              newLocationType: locationTypeData,
              errors: [{ msg: error.message }]
            })
          })
      } else {
        res.render('pages/load/update', {
          locationType: {},
          newLocationType: locationTypeData,
          errors: errors.array()
        })
      }
    }
  ],
  deleteLocationTypeFrom (req, res, next) {
    locationTypeByIdService(req.params.id)
      .then(locationType => {
        if (locationType) {
          res.render('pages/load/delete', { locationType: locationType })
        } else {
          const errorNotFound = new Error('Not found')
          errorNotFound.status = 404
          next(errorNotFound)
        }
      })
      .catch(error => {
        const errorServer = new Error(`Internal server error: ${error.message}`)
        errorServer.status = 500
        next(errorServer)
      })
  },
  deleteLocationType (req, res, next) {
    locationTypeDeleteService(req.body)
      .then(locationType => {
        req.flash('info', `Location Type "#${locationType.id} ${locationType.name}" is Deleted`)
        res.redirect('/load/list')
      })
      .catch(error => {
        res.render('pages/load/delete', {
          locationType: req.body,
          errors: [{ msg: error.message }]
        })
      })
  }
}
