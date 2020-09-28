import React from 'react'
import BasePage from '../layouts/BasePage'

export default class Listas extends React.Component {

  state = {
    title: 'Listas'
  }

  render() {
    return (
      <BasePage title={this.state.title}>
        <div className="main-content card">
          <h1>
            Listas
          </h1>
        </div>
        <aside className="right-content card"></aside>
      </BasePage>
    )
  }
}