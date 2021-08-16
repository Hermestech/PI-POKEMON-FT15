import axios from 'axios';
import { BASE_URL } from '../../constants';
import { GET_POKEMONS } from './actionNames';


export const getPokemons = () => async (dispatch) => {
    try{
        const response = await axios.get(BASE_URL);
        dispatch({
            type: GET_POKEMONS,
            payload: response.data
        })

    }catch(error){
        console.error('error:')
    }
}