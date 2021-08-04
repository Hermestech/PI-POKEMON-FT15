const { Pokemon, Type } = require('../db');
const { API_POKEMONS_ENDPOINT} = require('../constants')
const { default: axios } = require("axios");
const {getPokemons,
       getPokemonById,
       getPokemonByName,
       createPokemon

} = require('../controllers/pokemons.js')
const {Router} = require('express')



const router = Router()

router.get('/',getPokemons);

router.get('/:idPokemon', getPokemonById);

router.get('', getPokemonByName);

router.post('/', createPokemon);


module.exports = router