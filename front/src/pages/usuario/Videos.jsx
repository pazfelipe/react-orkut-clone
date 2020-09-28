import React from 'react'
import BasePage from '../../layouts/BasePage'

export default class PaginaMeusVideos extends React.Component {

  state = {
    title: 'Meus vídeos'
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