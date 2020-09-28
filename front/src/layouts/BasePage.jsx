import React, { useEffect } from 'react'
import Header from '../components/Header'
import CardMenu from '../components/usuario/CardMenu'

export default function BasePage(props) {

  useEffect(() => {
    document.title = props.title ? 'Orkut - ' + props.title : 'Orkut'
  })

  const logado = window.sessionStorage.getItem('sessao')
  const header = logado ? <Header /> : null
  const menu = logado ? <CardMenu /> : null

  return (
    <React.Fragment>
      {header}
      <div className="container">
        <div className="container--content">
          {menu}
          <main>
            {props.children}
          </main>
        </div>
      </div>
    </React.Fragment>
  )
}