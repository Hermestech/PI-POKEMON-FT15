import axios from "axios";
import { BASE_URL } from "../../constants";
export const GET_POKEMONS = 'GET_POKEMONS'

export function getPokemons(){
    return function(dispatch) {
        return axios.get(BASE_URL)
        .then((response) => {
            dispatch({
                type: GET_POKEMONS,
                payload: response.data
            });
        });
    };
}