const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const typeRoutes = require('./types');
const pokemonRoutes = require('./pokemons');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonRoutes)
router.use('/types', typeRoutes)

router.get('/', (req, res) => {
    res.status(200).send('Página de inicio')
})

module.exports = router;
