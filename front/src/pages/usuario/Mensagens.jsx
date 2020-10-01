import React from 'react'
import BasePage from '../../layouts/BasePage'

export default class PaginaMensagens extends React.Component {

  state = {
    title: 'Minhas mensagens'
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