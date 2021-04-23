import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Inicio from './Paginas/inicio';
import Login from './Paginas/Login';
import { AuthContextProvider} from './context/auth';
import { DocContextProvider} from './context/docs';
import GuardRoute from './Componentes/guardRoute';
import Root from './Componentes/root';


const root = (
  <BrowserRouter>
    <AuthContextProvider>
      <DocContextProvider>
        <Root>
          <Switch>
            <GuardRoute type = "private" path="/inicio" component={Inicio}/>
            <GuardRoute type = "public" path="/login" component={Login}/>
            <Redirect path="/" to="/inicio"/>
          </Switch>
        </Root>
      </DocContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
 
);

ReactDOM.render(root, document.getElementById('root'));
