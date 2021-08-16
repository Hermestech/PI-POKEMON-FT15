import React from 'react';
import { connect } from 'react-redux';
import * as pokemonActions from '../store/actions/actions'

import './styles/CarouselItem.css'
class  CarouselItem extends React.Component{

    componentDidMount(){
        this.props.getPokemons();
    }

    render(){
        console.log(this.props.showPokemons)
        return(
        <React.Fragment>
        {this.props.showPokemons.map((pokemon) => {
            return <div className="carousel-item">
            <span> <h3>{pokemon.name}</h3></span>
            <span><a>{pokemon.type1}</a></span>
            <span><a>{pokemon.type2}</a></span>
            <figure> 
                <img src={pokemon.image} alt="imagen del pokemón"/>
            </figure>    
        
            </div>
        })};
        </React.Fragment>
        )
    }
}

    
const mapStateToProps = (reducers) => {
    return reducers.pokemonReducers;
}
   


export default connect (mapStateToProps, pokemonActions)(CarouselItem);