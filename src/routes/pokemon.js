const { Router } = require("express");

const { findByName, getPokemonMovesByName, findByColorToCsv, getPokemonDetailsByName } = require("../controllers/controllers.js")

const router = Router()

router.get('/pokemon-moves/:name', getPokemonMovesByName)
router.get('/pokemon/:name', findByName)
router.get('/pokemon-color/:color', findByColorToCsv)
router.get('/pokemonDetailByName/:name', getPokemonDetailsByName)


module.exports = router