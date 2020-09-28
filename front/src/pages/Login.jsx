import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function (props) {

  const history = useHistory()

  useEffect(() => {
    if (window.sessionStorage.getItem('sessao')) {
      return history.replace('/inicio')
    }
  })

  const sessao = {
    usuario: 'idqualquer',
    email: 'emailqualqeur@gmail.com'
  }

  const login = event => {
    event.preventDefault()
    window.sessionStorage.setItem('sessao', JSON.stringify(sessao))
    history.push('/inicio')
  }

  return (
    <React.Fragment>
      <h1>Página de login</h1>
      <a href="/inicio" onClick={event => login(event)}>Início</a>
    </React.Fragment>
  )
}