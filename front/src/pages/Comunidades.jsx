import React from 'react'
import BasePage from '../layouts/BasePage'

export default class PaginaRecados extends React.Component {

  state = {
    title: 'Comunidades'
  }

  render() {
    return (
      <BasePage title={this.state.title}>
        <div className="main-content card">
          <h1>
            Comunidades
          </h1>
        </div>
        <aside className="right-content card"></aside>
      </BasePage>
    )
  }
}