import React from 'react';
import NavDetails from './NavDetails';
import './styles/PokemonDetails.css'

function PokemonDetails(){
    return(
    <div class="page">
        <NavDetails />
        <section class="container">

            <section class="main-content">
                <p>Diseña tu</p>
                <h1>Súper Héroe!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam in maiores tempore nesciunt dicta, labore reiciendis facilis vitae, consequuntur reprehenderit rem quaerat doloremque suscipit cupiditate assumenda. Iste minus ullam ipsa!</p>
            </section>

            <section class="side-content">
                <div></div>
                <p>Superman</p>
                <img src="https://i.ibb.co/x16pz1x/super-man.png" alt=""/>
            </section>

            <section class="footer">
                <div>
                    <img src="" alt=""/>
                </div>

                <div>
                    <img src="" alt=""/>
                </div>

                <div>
                    <img src="" alt=""/>
                </div>
            </section>
         </section>

        {/* <!-- Loader --> */}
        <section class="loader">
            <div></div>
            <div></div>
            <div></div>
        </section>

     </div>

    )
}

export default PokemonDetails;