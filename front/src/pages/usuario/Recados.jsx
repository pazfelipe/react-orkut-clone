import React from 'react'
import BasePage from '../../layouts/BasePage'

export default class PaginaRecados extends React.Component {

  state = {
    title: 'Meus recados'
  }

  render() {
    return (
      <BasePage title={this.state.title}>
        <h1>
          Teste qualquer aqui
      </h1>
      </BasePage>
    )
  }
}