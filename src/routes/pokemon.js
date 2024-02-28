const { Router } = require("express");

const { findByName, getPokemonMovesByName, findByColorToCsv } = require("../controllers/controllers.js")

const router = Router()

router.get('/pokemon-moves/:name', getPokemonMovesByName)
router.get('/pokemon/:name', findByName)
router.get('/pokemon-color/:color', findByColorToCsv)


module.exports = router