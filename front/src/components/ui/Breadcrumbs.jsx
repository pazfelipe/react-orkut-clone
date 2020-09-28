import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = props => {

  const li = (size, item, index) => {
    if (index === size - 1) {
      return <li
        className="last-item"
        key={item.label}>
        <span>{item.label}</span>
      </li>
    } else {
      return <li key={item.label}>
        <NavLink to={item.url}>
          <span>{item.label}</span>
        </NavLink>
      </li>
    }
  }

  return (
    <ul className="breadcrumbs">
      {props.itens.map((item, index) => li(props.itens.length, item, index))}
    </ul>
  )
}

export default Breadcrumbs