const { Pokemon, Type } = require('../db');
const { API_POKEMONS_ENDPOINT} = require('../constants')
const { default: axios } = require("axios");
const {getPokemons} = require('../controllers/pokemons.js')
const {Router} = require('express')



const router = Router()

router.get('/',getPokemons);

router.get('/:id',(req,res) => {

})

router.post('/', (req, res) => {

})


module.exports = router