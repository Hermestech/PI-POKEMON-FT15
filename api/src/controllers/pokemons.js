const {Pokemon, Type } = require('../db');
const { V4: uuidv4 } = require('uuid');
const {API_POKEMONS_ENDPOINT} = require('../constants');
const axios = require('axios');

async function getPokemons(req, res, next) {

    if(req.query.name) {
        return next();
    }

    try {
        let myPokemon = await Pokemon.findAll({ include: Type });
        console.log(myPokemon);
        myPokemon = myPokemon.map((element) => {
            return {
                id: element.dataValues.id,
                image: element.dataValues.image,
                name: element.dataValues.name,
                attack: element.dataValues.attack,
                type1: element.dataValues.types[0].name,
                type2: element.dataValues.types[1].name,
            };
        });

        let pokemonsPendingPromises = [];
        for(let i = 1; i <= 40; i++){
            pokemonsPendingPromises.push(axios(`${API_POKEMONS_ENDPOINT}/${i}`));
        }

        Promise.all(pokemonsPendingPromises)
        .then((pokemon) => {
            let pokemonsArray = pokemon.map((element) => {
                return {
                    id: element.data.id,
                    image: element.data.sprites.versions['generation-v']['black-white']
                    .animated.front_default,
                    name:element.data.name,
                    attack: element.data.stats[1].base_stat,
                    type1: element.data.types[0].type.name,
                    type2: element.data.types[1]?.type.name,
                };
            });
            pokemonsArray = pokemonsArray.concat(myPokemon);
            res.send(pokemonsArray);
        })
        .catch((error) => {
            console.log(error)
        })

    }
    catch(error){
        next(error)
    }

}

module.exports={
    getPokemons
}