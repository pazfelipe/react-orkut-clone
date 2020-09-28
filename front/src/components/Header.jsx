import React from 'react'
import PesquisaHeader from './HeaderPesquisa'
import { NavLink, useHistory } from 'react-router-dom'


const Header = props => {
  const history = useHistory()

  const logout = event => {
    event.preventDefault()
    window.sessionStorage.removeItem('sessao')
    history.push('/')
  }

  return (
    <header className="main-menu">
      <div className="main-menu--container">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="orkut">
                <span>Orkut</span>
                <span>BR</span>
              </NavLink>
            </li>
            <li>
              <ul style={{ width: '450px' }}>
                <li><NavLink to="/inicio">Início</NavLink></li>
                <li><NavLink to="/perfil">Perfil</NavLink></li>
                <li><NavLink to="/recados">Página de recados</NavLink></li>
                <li><NavLink to="/amigos">Amigos</NavLink></li>
                <li><NavLink to="/comunidades">Comunidades</NavLink></li>
              </ul>
            </li>
            <li className="email-login">
              <span >
                email.logado@gmail.com
              </span>
            </li>
            <li className="logout">
              <NavLink to="/" onClick={logout}>Sair</NavLink>
            </li>
            <li>
              <div className="pesquisa">
                <PesquisaHeader />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header