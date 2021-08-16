import {
    GET_POKEMONS,
    GET_POKEMONS_BY_NAME,
    GET_POKEMON_BY_ID,
    CREATE_POKEMON,
    GET_TYPES,
    SORT_POKEMONS,
    FILTER_POKEMONS,
} from '../actions/actionNames';

const initialState = {
    showPokemons: [],
    pokemonsById: null,
    pokemonByName: null,
    createPokemon: {},
    types: [],
    filtered: [],
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state, showPokemons: action.payload,
            };
    
        default:{
            return state;
        }
    }
}

export default reducer;