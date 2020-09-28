import React from 'react'
import { NavLink } from 'react-router-dom'

const CardTips = props => {
  return (
    <aside className="menu card">
      <nav>
        <ul>
          <li>
            <NavLink to="/inicio">
              <img src="/default.jpg" alt="Imagem do usuário" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/perfil">João da Silva</NavLink>
          </li>
          <li>
            <p>masculino</p>
            <p>solteiro</p>
            <p>Brasil</p>
          </li>
          <li>
            <ul>
              <li style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <NavLink to="/perfil">perfil</NavLink>
                <NavLink to="/perfil/editar">editar</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/recados">recados</NavLink>
          </li>
          <li>
            <NavLink to="/fotos">fotos</NavLink>
          </li>
          <li>
            <NavLink to="/videos">videos</NavLink>
          </li>
          <li>
            <NavLink to="/depoimentos">depoimentos</NavLink>
          </li>
          <li>Apps</li>
          <li>
            <NavLink to="/apps">adicionar apps</NavLink>
          </li>
          <li>
            <NavLink to="/listas">listas</NavLink>
          </li>
          <li>
            <NavLink to="/atualizacoes">atualizações</NavLink>
          </li>
          <li>
            <NavLink to="/minha-conta">configurações</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default CardTips