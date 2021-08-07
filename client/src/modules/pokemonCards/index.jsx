import { useState, useEffect } from "react"
import axios  from "axios"
import { BASE_URL} from "../../constants"

export default function PokemonCards(){
    const [pokemons, setPokemons] = useState([])
    function getPokemons(){
        return axios.get(BASE_URL)
        .then((pokemons) => setPokemons(pokemons.data))
    }

    useEffect(() =>{
        getPokemons();
    }, [])
    return(
        <div>{pokemons.map((pokemon) => {
           return <div>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.image} alt="imagen de pokemon"/>

                </div> 
        })}</div>
    )
}