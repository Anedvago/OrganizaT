import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-dom';
import './App.css';
import {Col ,Row, Container} from 'react-bootstrap';
import Inicio from './Paginas/inicio/index'

function App() {
  return (
    <Inicio></Inicio>
  );
}

export default App;
