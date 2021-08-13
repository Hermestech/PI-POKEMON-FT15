import React from 'react';
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Pokeball from './components/Pokeball'
import CardNew  from './pages/CardNew';
import CreateCard from './pages/CreateCard';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Pokeball}/>
        <Route exact path="/pokemons" component={CardNew}/>
        <Route exact path="/pokemon-details" component={Details}/>
        <Route path="/create-pokemon" component={CreateCard} />
      </Switch>
    </BrowserRouter>
    // <React.Fragment className="App">
    //   <CardNew/>
    // </React.Fragment>
  );
}

export default App;
