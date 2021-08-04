const {Pokemon, Type } = require('../db');
const { v4: uuidv4 } = require("uuid");
const {API_POKEMONS_ENDPOINT} = require('../constants');
const axios = require('axios');


async function getPokemons(req, res, next) {

    if(req.query.name) {
        return next();
    }

    try {
        let myPokemon = await Pokemon.findAll({ include: Type });
        myPokemon = myPokemon.map((element) => {
            return {
                id: element.dataValues.id,
                image: element.dataValues.image,
                name: element.dataValues.name,
                attack: element.dataValues.attack,
                type1: element.dataValues.types[0]?.name,
                type2: element.dataValues.types[1]?.name,
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


async function getPokemonById(req, res, next){
    const id = req.params.idPokemon;

    try {
        
        pokemonApi = await axios.get(`${API_POKEMONS_ENDPOINT}${id}/`)
        pokemonApi = pokemonApi.data;
        console.log(pokemonApi)
        
        let showPokemon = {
            image: pokemonApi.sprites.other.dream_world.front_default,
            name: pokemonApi.name,
            type1: pokemonApi.types[0].type.name,
            type2: pokemonApi.types[1].type.name,
            id: pokemonApi.id,
            height: pokemonApi.height,
            weight: pokemonApi.weight,
            life: pokemonApi.stats[0].base_stat,
            attack: pokemonApi.stats[1].base_stat,
            defense:pokemonApi.stats[2].base_stat,
            speed: pokemonApi.stats[5].base_stat,
        };
        console.log(showPokemon)

        res.send(showPokemon);

    }catch(error){
        Pokemon.findByPk(id, { include: Type} )
        .then((pokemon) => {
            res.send(pokemon);
        })
        .catch((error) => {
            res.status(500).send("Not Found!");
        });
    }
}

async function getPokemonByName(req, res, next) {

    const name = req.query.name;

    try{
        let pokemonApi = await axios.get(`${API_POKEMONS_ENDPOINT}${name}`)
        pokemonApi = pokemonApi.data

        let showPokemon = {
            image: pokemonApi.sprites.other.dream_world.front_default,
            name: pokemonApi.name,
            type1: pokemonApi.types[0].type.name,
            type2: pokemonApi.types[1]?.type.name,
            id: pokemonApi.id,
            height: pokemonApi.height,
            weight: pokemonApi.weight,
            life: pokemonApi.stats[0].base_stat,
            attack: pokemonApi.stats[1].base_stat,
            defense:pokemonApi.stats[2].base_stat,
            speed: pokemonApi.stats[5].base_stat,
        };
        res.send(showPokemon);

    }catch(error){
        Pokemon.findOne({ where: {name: name}, include: Type })
        .then((pokemon) => {
            if (pokemon) {
                res.send(pokemon);
            } else {
                res.status(500).send("Not found!");
            }
        })
        .catch((error) => {
            next(error);
        })
    }

}

async function createPokemon (req, res, next) {
    const {
        name,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        type1,
        type2,
        image
    } = req.body

    let newPokemon = {
        id: uuidv4(),
        name: name,
        life: life,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
        image: image,
    }

    let types = [type1, type2 ? type2 : null];
    return Pokemon.create(newPokemon)
    .then((pokemon) => {
        pokemon.addTypes(types);
        res.send({...pokemon, types })
    })
    .catch((error) => next(error));
}
module.exports={
    getPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemon
}