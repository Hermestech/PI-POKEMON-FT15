import './App.css';
// import PokemonCards from './modules/pokemonCards';
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      <Card name="bulbasaur" type1="Grass" type2="Poison"/>
    </div>
  );
}

export default App;
