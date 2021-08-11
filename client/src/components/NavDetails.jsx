import React from 'react'
import logo from '../utils/images/logoPokemon.png'
import './styles/PokemonDetails.css'
import { Link } from 'react-router-dom'

function NavDetails(){
    return(
        <nav class="navbar">
            <div class="navbar__content">
            <Link to="/pokemons"><img src={logo} alt=""/></Link> 
                <ul>
                    {/* <li><a href="/">EXCLUSIVO</a></li>
                    <li><a href="/">NUEVOS</a></li>
                    <li><a href="/">GIFT CARDS</a></li>
                    <li><a href="/">FIND A STORE</a></li> */}
                </ul>
            </div>
        </nav>
    )
   
}

export default NavDetails;