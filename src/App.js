
import React from 'react';
import Router from './router/index'
import { HashRouter,Route } from 'react-router-dom';
import './App.css'



function App() {
  return (
    <HashRouter basename='/'>
      <Route path='' component={Router} />
    </HashRouter>
  );
}

export default App;
