import React from 'react'
import BasePage from '../../layouts/BasePage'


export default class Perfil extends React.Component {

  state = {
    title: 'Meu perfil'
  }

  render() {
    return (
      <BasePage title={this.state.title}>
        <h1>
          Editando perfil
      </h1>
      </BasePage>
    )
  }
}