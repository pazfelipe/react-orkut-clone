import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './private'
import HomeUsuario from '../pages/usuario/Index'
import Perfil from '../pages/usuario/Perfil'
import EditarPerfil from '../pages/usuario/EditarPerfil'
import MeusRecados from '../pages/usuario/Recados'
import Amigos from '../pages/usuario/Amigos'
import Comunidades from '../pages/Comunidades'
import Login from '../pages/Login'
import NotFound404 from '../pages/NotFound404.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/inicio" component={HomeUsuario} />
        <PrivateRoute path="/perfil/editar" exact={true} component={EditarPerfil} />
        <PrivateRoute path="/perfil" exact={true} component={Perfil} />
        <PrivateRoute path="/recados" component={MeusRecados} />
        <PrivateRoute path="/amigos" component={Amigos} />
        <PrivateRoute path="/comunidades" component={Comunidades} />
        <Route path="/" exact={true} component={Login} />
        <Route path="/not-found" component={NotFound404} />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router