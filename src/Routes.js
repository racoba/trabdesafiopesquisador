import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Paginas/Home'
import Contato from './Paginas/Contato'
import Parcerias from './Paginas/Parcerias'
import Sobrenos from './Paginas/SobreNos'


export default function Routes() { 

  return (

    <Router> 
      <div className="App">
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/parcerias" exact component={Parcerias} />
          <Route path="/contato" exact component={Contato} />
          <Route path="/sobrenos" exact component={Sobrenos} />
          </Switch>

      </div>

    </Router>
  );
}