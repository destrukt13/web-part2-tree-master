'use strict'

const express = require('express')
const router = express.Router()

const planetController = require('./../controllers/planet')

router.get('/', planetController.index)
router.get('/list', planetController.locationTypeList)
router.get('/add', planetController.createLocationTypeForm)
router.post('/add', planetController.postCreateLocationType)
router.get('/edit/:id', planetController.updateLocationTypeForm)
router.post('/edit/:id', planetController.putUpdateLocationType)
router.get('/remove/:id', planetController.deleteLocationTypeFrom)
router.post('/remove/:id', planetController.deleteLocationType)

module.exports = router
