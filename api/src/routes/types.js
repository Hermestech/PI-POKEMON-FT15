const {Router} = require('express')

const {API_BASE_URL, API_TYPES_ENDPOINT} = require('../constants')
const { default: axios } = require("axios");

const router = Router()

router.get('/', async (req, res, next) => {
    try{
        const types = await axios(API_TYPES_ENDPOINT)
        res.status(200).json(types.data.results)

    }catch(error){
        next(error)
    }
})


module.exports = router