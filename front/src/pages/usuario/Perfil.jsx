import React from 'react'
import BasePage from '../../layouts/BasePage'
import Breadcrumbs from '../../components/ui/Breadcrumbs'

export default class Perfil extends React.Component {

  state = {
    title: 'Meu Perfil',
    breadcrumbs: [
      { label: 'Início', url: '/inicio' },
      { label: 'Meu Perfil', url: '/perfil' },
    ]
  }

  render() {
    return (
      <BasePage title={this.state.title}>
        <div className="main-content">
          <div className="main-content--user">
            <div className="card">
              Formulári oaqui
              <Breadcrumbs
                itens={this.state.breadcrumbs}
              />
            </div>
          </div>
        </div>
        <aside className="right-content card"></aside>
      </BasePage>
    )
  }
}