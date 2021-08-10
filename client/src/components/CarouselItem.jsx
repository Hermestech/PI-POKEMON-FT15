import React from 'react';
import pokemon from '../utils/images/imagenPokemon.png'

import './styles/CarouselItem.css'
const CarouselItem=() => (
    <div className="carousel-item">
            <span> <h3>Nombre del pokemon</h3></span>
            <span><a>Grass</a></span>
            <span><a>Poison</a></span>            
            <figure> 
                <img src={pokemon} alt="imagen del pokemón"/>
            </figure>
     </div>
);

export default CarouselItem;