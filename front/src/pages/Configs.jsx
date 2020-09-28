import React from 'react'
import BasePage from '../layouts/BasePage'

export default class Configuracoes extends React.Component {

  state = {
    title: 'Configurações'
  }

  render() {
    return (
      <BasePage title={this.state.title}>
        <div className="main-content card">
          <h1>
            Configurações
          </h1>
        </div>
        {/* <aside className="right-content card"></aside> */}
      </BasePage>
    )
  }
}