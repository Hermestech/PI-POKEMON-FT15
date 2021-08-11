import React from 'react';
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Pokeball from './components/Pokeball'
import CardNew  from './pages/CardNew';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Pokeball}/>
        <Route exact path="/pokemons" component={CardNew}/>
      </Switch>
    </BrowserRouter>
    // <React.Fragment className="App">
    //   <CardNew/>
    // </React.Fragment>
  );
}

export default App;
