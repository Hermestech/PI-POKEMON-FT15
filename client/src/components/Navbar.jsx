import React from 'react';
import { connect } from 'react-redux';
import * as pokemonActions from '../store/actions/actions'

import './styles/Navbar.css'
import logo from '../utils/images/logoPokemon.png'

class Navbar extends React.Component{

    componentDidMount(){
      this.props.getPokemonByName();
    }

    render(){
      console.log(this.props.getPokemonByName)
        return (
         <React.Fragment>
            <header class="header">
            <img class="header__img" src={logo}/>
            <div class="header__menu">
          
              </div>
              
          </header>
        
          <section class="main">
            <h2 class="main__title">¿Qué pokemones estás buscando?</h2>
            <input class="input" type="text" placeholder="Buscar..."/>
            <button type="submit"> Search Pokemon </button>
          </section>  

        </React.Fragment>
           
        )
    }
}

const mapStateToProps = (reducers) => {
  return reducers.pokemonReducers;
}

export default connect (mapStateToProps, pokemonActions)(Navbar);