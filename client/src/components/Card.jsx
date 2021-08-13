import React from 'react';

import './styles/Card.css'
import imagenPokemon from '../utils/images/imagenPokemon.png'


class Card extends React.Component {

    render(){

        return (
    
        <section className="pokemon__container">
            <span> <h3>Nombre del pokemon</h3></span>
            <span><a>tipo1</a></span>
            <span><a>tipo2</a></span>            
            <figure> 
                <img src={imagenPokemon} alt="imagen del pokemón" />
            </figure>

        </section>
        )
    }
}

export default Card;