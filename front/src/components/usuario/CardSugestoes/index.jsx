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
    bloqueado: false,
    activeButtonRight: false,
    activeButtonLeft: false,
    scale: 0
  }

  renderItem = prop => <CardSugestao nome={ prop.nome } key={ prop.nome } />

  onwheel = event => {
    if (!this.state.bloqueado) return
    event.preventDefault()

    this.setState({
      scale: this.state.scale + event.deltaY * -0.01
    })
  }


  onToggleLeft = () => {
    this.setState({
      activeButtonLeft: !this.state.activeButtonLeft
    })
  }
  onToggleRight = () => {
    this.setState({
      activeButtonRight: !this.state.activeButtonRight
    })
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
        <div className={ this.state.activeButtonLeft ? 'move move-left active' : 'move move-left' }
          onMouseDown={ this.onToggleLeft }
          onMouseUp={ this.onToggleLeft }
        >
          <IconButton icon="mdi-chevron-left" />
        </div>
        <div className={ this.state.activeButtonRight ? 'move move-right active' : 'move move-right' }
          onMouseDown={ this.onToggleRight }
          onMouseUp={ this.onToggleRight }
        >
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