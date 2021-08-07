import React from 'react';

import './styles/Card.css'
import imagenPokemon from '../utils/images/imagenPokemon.png'


class Card extends React.Component {

    render(){

        return (
    
        <section className="pokemon__container">
            <span> <h3>{this.props.name}</h3></span>
            <span><a>{this.props.type1}</a></span>
            <span><a>{this.props.type2}</a></span>            
            <figure> 
                <img src={imagenPokemon} alt="imagen del pokemón" />
            </figure>

        </section>
        )
    }
}

export default Card;