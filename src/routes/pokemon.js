const { Router } = require("express");

const { findByName, test, findByColorToCsv } = require("../controllers/controllers.js")

const router = Router()

router.get('/test', test)
router.get('/pokemon/:name', findByName)
router.get('/pokemon-color/:color', findByColorToCsv)


module.exports = router