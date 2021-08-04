const {Router} = require('express')
const {getAllTypes, getApiTypes} = require('../controllers/types')

const router = Router()

router.get('/', getAllTypes)


module.exports = router