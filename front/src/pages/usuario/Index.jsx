import React from 'react'
import BasePage from '../../layouts/BasePage'
import CardResumo from '../../components/usuario/CardResumo'
import CardTips from '../../components/usuario/CardTips'
import CardSugestoes from '../../components/usuario/CardSugestoes'
import CardDepoimentos from '../../components/usuario/CardDepoimentos'

export default class Home extends React.Component {
  render () {
    return (
      <BasePage>
        <div className="main-content">
          <div className="main-content--user">
            <CardResumo />
            <CardTips />
            <CardSugestoes />
            <CardDepoimentos />
            <div className="card user-explorar"></div>
          </div>
        </div>
        <aside className="right-content card"></aside>
      </BasePage>
    )
  }
}