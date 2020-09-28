import React, { useState } from 'react'
import IconButton from './ui/IconButton'

const PesquisaHeader = () => {
  const [pesquisa, setPesquisa] = useState('')

  const onPesquisa = (event) => setPesquisa(event.target.value)

  const onSubmit = event => {
    event.preventDefault()
    alert('Pesquisado')
  }

  return (
    <form className="input-pesquisa" onSubmit={onSubmit}>
      <input type="search" placeholder="Pesquisa do orkut"
        value={pesquisa}
        onChange={onPesquisa}
      />
      <IconButton
        type="submit"
        icon="mdi-magnify"
        classes={['pa-xs', 'bo']}
      />
    </form>
  )

}

export default PesquisaHeader