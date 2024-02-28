const { Router } = require("express");

const { findByName, test, findByColor } = require("../controllers/controllers.js")

const router = Router()

router.get('/pokemon/:name', findByName)
router.get('/PRUEBA', test)
router.get('/pokemon-color/:color', findByColor)


module.exports = router