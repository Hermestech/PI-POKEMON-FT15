import axios from 'axios';
import { POKEMONS_ENDPOINT, TYPES_ENDPOINT } from '../../constants';
import { CREATE_POKEMON, FILTER_POKEMONS, GET_POKEMONS, GET_POKEMONS_BY_NAME, GET_POKEMON_BY_ID, GET_TYPES, SORT_POKEMONS } from './actionNames';

export const getTypes = () => async(dispatch) => {
    try{   
        const response = await axios.get(TYPES_ENDPOINT);
        dispatch({
            type: GET_TYPES,
            payload: response.data
        })
    }catch(error){
        console.log('error')
    }
}
export const getPokemons = () => async (dispatch) => {
    try{
        const response = await axios.get(POKEMONS_ENDPOINT);
        dispatch({
            type: GET_POKEMONS,
            payload: response.data
        })

    }catch(error){
        console.error('error:')
    }
}

export const getPokemonByName = (name) => async(dispatch) => {
    try{
        const response = await axios.get(`${POKEMONS_ENDPOINT}/?name=${name}`)
        console.log(response.data)
        dispatch({
            type: GET_POKEMONS_BY_NAME,
            payload: response.data
        })

    }catch(error){
        console.log(error)
    }
}

export const getPokemonById = (id) => async(dispatch) => {
    try{
        const response = await axios.get(`${POKEMONS_ENDPOINT}/${id}`)
        dispatch({
            type: GET_POKEMON_BY_ID,
            payload: response.data
        })
    }catch(error){
        console.error(error)
    }
};

export const createPokemon = (pokemon) => async(dispatch) => {
    try{
        const response = await axios.post(POKEMONS_ENDPOINT, pokemon)
        dispatch({
            type: CREATE_POKEMON,
            payload: response.data
        })
    } catch(error){
        console.error(error)
    }
}

export function sortPokemos(pokemons, order, typeOrder){
    if(order === 'alphabetic' && typeOrder === 'ascending'){
        pokemons.sort(function (a, b) {
            if (a.name > b.name){
                return 1;
            }
            if (a.name < b.name){
                return -1;
            }

            return 0;
        });
    } else if (order === 'alphabetic' && typeOrder === 'descending'){
        pokemons.sort(function(a,b) {
            if (a.name < b.name){
                return 1;
            }
            if (a.name > b.name){
                return -1;
            }

            return 0;
        });
    } else if (order === 'attack' && typeOrder === 'asceding'){
        pokemons.sort(function(a,b){
            return a.attack - b.attack;
        });
    } else if(order === 'attack' && typeOrder === 'descending'){
        pokemons.sort(function (b, a){
            return a.attack - b.attack;
        });
    }

    return {
        type: SORT_POKEMONS,
        payload: pokemons,
    };
}

export function pokemonFilter(pokemons, filter) {
    let filtered = [];
    if (filter === 'database'){
        filtered = pokemons.filter((e) => typeof e.id !== 'number');
    } else if (filter === 'api') {
        filtered = pokemons.filter((e) => typeof e.id === 'number');
    } else {
        filtered = pokemons.filter((e) => e.type1 === filter || e.type2 === filter);
    }

    return {
        type: FILTER_POKEMONS,
        payload: filtered,
    };
}