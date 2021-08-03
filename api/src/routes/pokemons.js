const { Type } = require('../db');
const { API_POKEMONS_ENDPOINT} = require('../constants')
const { default: axios } = require("axios");
const {Router} = require('express')



const router = Router()

router.get('/', async (req, res, next) => {
    try{
        const pokemons = await axios(API_POKEMONS_ENDPOINT)
        
        res.status(200).json(pokemons.data)

    }catch(error){
        console.log(error)
    }
})

router.get('/:id',(req,res) => {

})

router.post('/', (req, res) => {

})


module.exports = router