import React from 'react'
import BasePage from '../../layouts/BasePage'


export default class Perfil extends React.Component {

  state = {
    title: 'Meu Perfil'
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