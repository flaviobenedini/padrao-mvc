const express = require("express")
const seriesController = require("../Controllers/seriesController")
const router = express.Router()

router.get('/', seriesController.index)
router.get('/:genero', seriesController.porGenero)


module.exports = router

