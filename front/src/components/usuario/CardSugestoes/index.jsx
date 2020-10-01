import React from 'react'
import CardSugestao from './CardSugestao'
import IconButton from '../../ui/IconButton'
import { } from 'react'

export default class CardSugestoes extends React.Component {

  state = {
    usuarios: [
      { nome: 'João da Silva' },
      { nome: 'Renata Amarante' },
      { nome: 'Lucileia Catarina' },
      { nome: 'Olivio Berdon' },
      { nome: 'Amarildo Josavildo' },
      { nome: 'Ingrid Olarina' },
    ],
    bloqueado: false
  }

  renderItem = prop => <CardSugestao nome={ prop.nome } key={ prop.nome } />

  onwheel = event => {
    if (!this.state.bloqueado) return
    event.preventDefault()

    console.warn('foi usado a bolinha do mouse')
  }

  componentDidMount () {
    window.addEventListener('wheel', this.onwheel)
  }

  render () {
    return (
      <div className="card user-sugestoes"
        onMouseEnter={ () => this.setState({ bloqueado: true }) }
        onMouseLeave={ () => this.setState({ bloqueado: false }) }
      >
        <div className="move move-left">
          <IconButton icon="mdi-chevron-left" />
        </div>
        <div className="move move-right">
          <IconButton icon="mdi-chevron-right" />
        </div>
        <p>Sugestões</p>
        <div className="user-sugestoes--container">
          { this.state.usuarios.map((user) => this.renderItem(user)) }
        </div>
      </div>
    )
  }
}