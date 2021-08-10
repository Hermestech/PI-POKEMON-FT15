import React from 'react'
import './styles/Navbar.css'
import logo from '../utils/images/logoPokemon.png'

class Navbar extends React.Component{
    render(){
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
          </section>  

        </React.Fragment>
           
        )
    }
}

export default Navbar;