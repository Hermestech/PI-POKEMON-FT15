const {Router} = require('express')

const router = Router()

router.get('/', (req,res) => {
    res.json('Hola, aquí van los pokemones🐭')
})


module.exports = router