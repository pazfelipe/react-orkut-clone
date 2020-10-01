import React from 'react'
import { Link } from 'react-router-dom'

const CardResumo = props => {
  return (
    <div className="card user-resumo">

      <div className="row welcome">
        <h1>Bem-vindo João da Silva</h1>
      </div>
      <div className="row">
        <div className="icones">
          <ul>
            <li>
              <Link to="/recados">
                <span>recados</span>
                <span>
                  <i className="mdi mdi-notebook-edit"></i>
                  0
                  </span>
              </Link>
            </li>
            <li>
              <Link to="/fotos">
                <span>fotos</span>
                <span>
                  <i className="mdi mdi-camera"></i>
                  0
                  </span>
              </Link>
            </li>
            <li>
              <Link to="/videos">
                <span>vídeos</span>
                <span>
                  <i className="mdi mdi-video-vintage"></i>
                  0
                  </span>
              </Link>
            </li>
            <li>
              <Link to="/fas">
                <span>fãs</span>
                <span>
                  <i className="mdi mdi-star"></i>
                  0
                  </span>
              </Link>
            </li>
            <li>
              <Link to="/mensagens">
                <span>mensagens</span>
                <span>
                  <i className="mdi mdi-forum"></i>
                  0
                  </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p><strong>Visualizações de seu perfil</strong>: Desde Jul. 2017: 0 , Semana passada: 0 , Ontem: 0</p>
      </div>
      <div className="row">
        <p><strong>Seus visitantes recentes</strong>: nenhum </p>
      </div>
      <div className="row">
        <p><strong>Sorte de hoje</strong>: Você vai herdar uma grande quantia em dinheiro</p>
      </div>

    </div>
  )
}

export default CardResumo