import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './private'
import HomeUsuario from '../pages/usuario/Index'
import Perfil from '../pages/usuario/Perfil'
import EditarPerfil from '../pages/usuario/EditarPerfil'
import MeusRecados from '../pages/usuario/Recados'
import MinhasFotos from '../pages/usuario/Fotos'
import MeusVideos from '../pages/usuario/Videos'
import MeusDepoimentos from '../pages/usuario/Depoimentos'
import MeusFas from '../pages/usuario/Fas'
import MinhasMensagens from '../pages/usuario/Mensagens'
import Amigos from '../pages/usuario/Amigos'
import Comunidades from '../pages/Comunidades'
import Listas from '../pages/Listas'
import Atualizacoes from '../pages/Atualizacoes'
import Configuracoes from '../pages/Configs'
import Apps from '../pages/Apps'
import Login from '../pages/Login'
import NotFound404 from '../pages/NotFound404.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/inicio" component={ HomeUsuario } />
        <PrivateRoute path="/perfil/editar" exact={ true } component={ EditarPerfil } />
        <PrivateRoute path="/perfil" exact={ true } component={ Perfil } />
        <PrivateRoute path="/recados" component={ MeusRecados } />
        <PrivateRoute path="/amigos" component={ Amigos } />
        <PrivateRoute path="/fotos" component={ MinhasFotos } />
        <PrivateRoute path="/videos" component={ MeusVideos } />
        <PrivateRoute path="/depoimentos" component={ MeusDepoimentos } />
        <PrivateRoute path="/fas" component={ MeusFas } />
        <PrivateRoute path="/apps" component={ Apps } />
        <PrivateRoute path="/mensagens" component={ MinhasMensagens } />
        <PrivateRoute path="/comunidades" component={ Comunidades } />
        <PrivateRoute path="/listas" component={ Listas } />
        <PrivateRoute path="/atualizacoes" component={ Atualizacoes } />
        <PrivateRoute path="/configuracoes" component={ Configuracoes } />
        <Route path="/" exact={ true } component={ Login } />
        <Route path="/not-found" component={ NotFound404 } />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router