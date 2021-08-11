import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { BASE_URL } from '../constants';


import './styles/CarouselItem.css'
function  CarouselItem(){

    const [pokemons, setPokemons] = useState([])

    function getPokemons(){
        return axios.get(BASE_URL)
        .then((pokemons) => setPokemons(pokemons.data))
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return(
        <React.Fragment>
        {pokemons.map((pokemon) => {
            return <div className="carousel-item">
            <span> <h3>{pokemon.name}</h3></span>
            <span><a>{pokemon.type1}</a></span>
            <span><a>{pokemon.type2}</a></span>
            <figure> 
                <img src={pokemon.image} alt="imagen del pokemón"/>
            </figure>    
        
            </div>
        } )}
        </React.Fragment>
        
    )
}

    

   


export default CarouselItem;