import React from 'react'
import BasePage from '../layouts/BasePage'

export default class Atualizacoes extends React.Component {

  state = {
    title: 'Atualizações'
  }

  render() {
    return (
      <BasePage title={this.state.title}>
        <div className="main-content card">
          <h1>
            Atualizações
          </h1>
        </div>
        {/* <aside className="right-content card"></aside> */}
      </BasePage>
    )
  }
}