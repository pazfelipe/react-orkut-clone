import React from 'react'
import { Link } from 'react-router-dom'
import BasePage from '../layouts/BasePage'

export default function () {

  return (
    <BasePage title='Página não encontrada'>
      <div className="main-content card">
        <div className="card-section">
          <h1>
            Ops, parece que o que vocês procurava foi embora...
            <Link to="/">Voltar</Link>
          </h1>
        </div>
      </div>
      <aside className="right-content card"></aside>
    </BasePage>
  )
}