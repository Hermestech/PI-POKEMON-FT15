import React from 'react';
import './App.css';
// import PokemonCards from './modules/pokemonCards';
import Card from './components/Card'
import CardNew  from './pages/CardNew';

function App() {
  return (
    <React.Fragment className="App">
      <CardNew/>
    </React.Fragment>
  );
}

export default App;
