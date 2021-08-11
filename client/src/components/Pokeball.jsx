import React from 'react'
import {Link}from 'react-router-dom'

import './styles/Pokeball.css'
class Pokeball extends React.Component{
    render(){
        return(

        <div className="center-on-page">
  
            <div className="pokeball">
            <Link className="pokeball__button" to="/pokemons"></Link>
            </div>
        
        </div>
        )
    }
    
}

export default Pokeball;