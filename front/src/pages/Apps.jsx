import React from 'react'
import BasePage from '../layouts/BasePage'

export default class Apps extends React.Component {

  state = {
    title: 'Apps'
  }

  render() {
    return (
      <BasePage title={this.state.title}>
        <div className="main-content card">
          <h1>
            Apps
          </h1>
        </div>
        {/* <aside className="right-content card"></aside> */}
      </BasePage>
    )
  }
}